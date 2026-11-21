import React, {useEffect, useState} from 'react';
import {CheckCircle2, Users} from 'lucide-react';
import {CEREMONY_EVENTS, COPY, EventKey, Language, toLocalDigits} from '../data/weddingContent';

interface PublicWish {
  id: string;
  name: string;
  attending: 'yes' | 'no';
  guestsCount: number;
  events: EventKey[];
  message: string;
  createdAt: string;
}

interface RsvpSummary {
  totalResponses: number;
  confirmedResponses: number;
  confirmedGuests: number;
  wishes: PublicWish[];
}

export function RsvpSection({lang}: {lang: Language}) {
  const t = COPY[lang].rsvp;

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');
  const [guestsCount, setGuestsCount] = useState(2);
  const [selectedEvents, setSelectedEvents] = useState<EventKey[]>(['biye']);
  const [message, setMessage] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [summary, setSummary] = useState<RsvpSummary>({
    totalResponses: 0,
    confirmedResponses: 0,
    confirmedGuests: 0,
    wishes: [],
  });

  const LOCAL_STORAGE_KEY = 'mehebub_sarika_rsvps_v1';

  const readLocalSummary = (): RsvpSummary => {
    try {
      const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
      const parsed: PublicWish[] = raw ? JSON.parse(raw) : [];
      const list = Array.isArray(parsed) ? parsed : [];
      const confirmed = list.filter((r) => r.attending === 'yes');
      return {
        totalResponses: list.length,
        confirmedResponses: confirmed.length,
        confirmedGuests: confirmed.reduce((s, r) => s + (Number(r.guestsCount) || 1), 0),
        wishes: list,
      };
    } catch {
      return {totalResponses: 0, confirmedResponses: 0, confirmedGuests: 0, wishes: []};
    }
  };

  const loadSummary = async () => {
    try {
      const res = await fetch('./api/rsvp');
      const contentType = res.headers.get('content-type') || '';
      if (res.ok && contentType.includes('application/json')) {
        const data: RsvpSummary = await res.json();
        setSummary(data);
        return;
      }
    } catch {
      // Fallback to localStorage on static hosts like GitHub Pages
    }
    setSummary(readLocalSummary());
  };

  useEffect(() => {
    loadSummary();
  }, []);

  const toggleEvent = (key: EventKey) => {
    setSelectedEvents((prev) =>
      prev.includes(key) ? prev.filter((item) => item !== key) : [...prev, key],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (name.trim().length < 2) {
      setErrorMsg(
        lang === 'bn' ? 'অনুগ্রহ করে আপনার পূর্ণ নাম লিখুন।' : 'Please enter your full name.',
      );
      return;
    }
    if (contact.trim().length < 5) {
      setErrorMsg(
        lang === 'bn'
          ? 'অনুগ্রহ করে সঠিক মোবাইল নম্বর বা ইমেইল দিন।'
          : 'Please enter a valid phone number or email.',
      );
      return;
    }
    if (attending === 'yes' && selectedEvents.length === 0) {
      setErrorMsg(
        lang === 'bn'
          ? 'অনুগ্রহ করে অন্তত একটি অনুষ্ঠান নির্বাচন করুন।'
          : 'Please select at least one ceremony.',
      );
      return;
    }

    setSubmitting(true);
    const payload = {
      name: name.trim(),
      contact: contact.trim(),
      attending,
      guestsCount: attending === 'yes' ? guestsCount : 0,
      events: attending === 'yes' ? selectedEvents : [],
      message: message.trim(),
    };

    try {
      const res = await fetch('./api/rsvp', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload),
      });

      const contentType = res.headers.get('content-type') || '';
      if (contentType.includes('application/json')) {
        const data = await res.json();
        if (!res.ok) {
          setErrorMsg(
            data.error ||
              (lang === 'bn' ? 'তথ্য সংরক্ষণ করা যায়নি।' : 'Could not save your RSVP.'),
          );
          return;
        }
        setSubmitted(true);
        setName('');
        setContact('');
        setMessage('');
        await loadSummary();
        return;
      }
    } catch {
      // Static hosting fallback below
    } finally {
      setSubmitting(false);
    }

    // Save locally if running as static site (e.g., GitHub Pages)
    try {
      const current = readLocalSummary().wishes;
      const newWish: PublicWish = {
        id: `local_${Date.now()}`,
        name: payload.name,
        attending: payload.attending,
        guestsCount: payload.guestsCount,
        events: payload.events,
        message: payload.message,
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([newWish, ...current]));
      setSubmitted(true);
      setName('');
      setContact('');
      setMessage('');
      setSummary(readLocalSummary());
    } catch {
      setErrorMsg(
        lang === 'bn'
          ? 'তথ্য সংরক্ষণ করা যায়নি, আবার চেষ্টা করুন।'
          : 'Could not save your RSVP, please try again.',
      );
    }
  };

  return (
    <section id="rsvp" className="bg-[#FAF6EC] py-16 px-4 sm:px-6 border-t border-[#E6DFCE]">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-[#8E1523]">{t.eyebrow}</p>
          <h2
            className={`mt-1 text-3xl sm:text-4xl font-bold text-[#1E241E] ${
              lang === 'bn' ? 'font-display-bn' : 'font-display-en'
            }`}
          >
            {t.heading}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#4D544C]">{t.subtitle}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* RSVP Form Card */}
          <div className="lg:col-span-7 rounded-2xl border border-[#DFD7C4] bg-white p-6 sm:p-8 shadow-[0_10px_26px_rgba(30,36,30,0.06)]">
            {submitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E8F5EE] text-[#1D633A]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3
                  className={`mt-4 text-2xl font-bold text-[#1E241E] ${
                    lang === 'bn' ? 'font-display-bn' : 'font-display-en'
                  }`}
                >
                  {t.successTitle}
                </h3>
                <p className="mt-2 text-sm text-[#4D544C] max-w-md mx-auto">{t.successBody}</p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 min-h-[44px] rounded-lg border border-[#1D633A] px-5 py-2.5 text-sm font-semibold text-[#1D633A] hover:bg-[#EEF7F1] transition-colors cursor-pointer"
                >
                  {t.anotherBtn}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMsg && (
                  <div className="rounded-lg border border-[#C82333]/30 bg-[#FEF2F2] px-4 py-3 text-sm text-[#991B1B]">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="rsvp-name"
                      className="block text-sm font-semibold text-[#1E241E] mb-1.5"
                    >
                      {t.nameLabel}
                    </label>
                    <input
                      id="rsvp-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.namePlaceholder}
                      className="w-full min-h-[44px] rounded-lg border border-[#D4CDBB] bg-[#FDFBF6] px-3.5 py-2 text-sm text-[#1E241E] placeholder:text-[#8E8B80] focus:border-[#1D633A] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="rsvp-contact"
                      className="block text-sm font-semibold text-[#1E241E] mb-1.5"
                    >
                      {t.contactLabel}
                    </label>
                    <input
                      id="rsvp-contact"
                      type="text"
                      required
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder={t.contactPlaceholder}
                      className="w-full min-h-[44px] rounded-lg border border-[#D4CDBB] bg-[#FDFBF6] px-3.5 py-2 text-sm text-[#1E241E] placeholder:text-[#8E8B80] focus:border-[#1D633A] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Attendance choice */}
                <div>
                  <span className="block text-sm font-semibold text-[#1E241E] mb-2">
                    {t.attendingLabel}
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setAttending('yes')}
                      className={`min-h-[44px] rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors cursor-pointer ${
                        attending === 'yes'
                          ? 'bg-[#1D633A] text-white'
                          : 'border border-[#D4CDBB] bg-[#FDFBF6] text-[#3B423B] hover:bg-[#F3EDE0]'
                      }`}
                    >
                      {t.yesOption}
                    </button>
                    <button
                      type="button"
                      onClick={() => setAttending('no')}
                      className={`min-h-[44px] rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors cursor-pointer ${
                        attending === 'no'
                          ? 'bg-[#C82333] text-white'
                          : 'border border-[#D4CDBB] bg-[#FDFBF6] text-[#3B423B] hover:bg-[#F3EDE0]'
                      }`}
                    >
                      {t.noOption}
                    </button>
                  </div>
                </div>

                {attending === 'yes' && (
                  <>
                    {/* Ceremonies multi-select */}
                    <div>
                      <span className="block text-sm font-semibold text-[#1E241E] mb-2">
                        {t.eventsLabel}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {CEREMONY_EVENTS.map((ev) => {
                          const checked = selectedEvents.includes(ev.key);
                          return (
                            <button
                              key={ev.key}
                              type="button"
                              onClick={() => toggleEvent(ev.key)}
                              className={`min-h-[44px] rounded-lg px-3 py-2 text-sm font-medium border transition-colors cursor-pointer ${
                                checked
                                  ? 'border-[#C82333] bg-[#FFF5F5] text-[#8E1523] font-semibold'
                                  : 'border-[#D4CDBB] bg-[#FDFBF6] text-[#4D544C] hover:bg-[#F3EDE0]'
                              }`}
                            >
                              {ev.title[lang]}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Guest count */}
                    <div>
                      <span className="block text-sm font-semibold text-[#1E241E] mb-2">
                        {t.guestsLabel}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setGuestsCount(num)}
                            className={`h-11 w-11 rounded-lg text-sm font-semibold tabular-nums transition-colors cursor-pointer ${
                              guestsCount === num
                                ? 'bg-[#1E241E] text-white'
                                : 'border border-[#D4CDBB] bg-[#FDFBF6] text-[#1E241E] hover:bg-[#F3EDE0]'
                            }`}
                          >
                            {toLocalDigits(num, lang)}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label
                    htmlFor="rsvp-message"
                    className="block text-sm font-semibold text-[#1E241E] mb-1.5"
                  >
                    {t.messageLabel}
                  </label>
                  <textarea
                    id="rsvp-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.messagePlaceholder}
                    className="w-full rounded-lg border border-[#D4CDBB] bg-[#FDFBF6] px-3.5 py-2.5 text-sm text-[#1E241E] placeholder:text-[#8E8B80] focus:border-[#1D633A] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full min-h-[48px] rounded-lg bg-[#C82333] px-6 py-3 text-base font-semibold text-white hover:bg-[#A71B29] disabled:opacity-60 transition-colors cursor-pointer"
                >
                  {submitting ? t.submittingBtn : t.submitBtn}
                </button>
              </form>
            )}
          </div>

          {/* Live Guest Confirmation Summary & Wishes Wall */}
          <div className="lg:col-span-5 space-y-5">
            <div className="rounded-2xl border border-[#DFD7C4] bg-white p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4 divide-x divide-[#E6DFCE]">
                <div className="pr-3">
                  <p className="text-xs text-[#6B7268] flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-[#1D633A]" />
                    <span>{t.confirmedGuestsLabel}</span>
                  </p>
                  <p className="mt-1 text-3xl font-bold text-[#1E241E] tabular-nums">
                    {toLocalDigits(summary.confirmedGuests, lang)}
                  </p>
                </div>
                <div className="pl-4">
                  <p className="text-xs text-[#6B7268]">{t.responsesLabel}</p>
                  <p className="mt-1 text-3xl font-bold text-[#1E241E] tabular-nums">
                    {toLocalDigits(summary.totalResponses, lang)}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#DFD7C4] bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-[#1E241E] pb-3 border-b border-[#EFEAE0]">
                {t.wishesHeading}
              </h3>

              {summary.wishes.length === 0 ? (
                <p className="py-6 text-sm text-[#6B7268] text-center">{t.emptyWishes}</p>
              ) : (
                <ul className="divide-y divide-[#EFEAE0] max-h-[340px] overflow-y-auto pr-1">
                  {summary.wishes.map((wish) => (
                    <li key={wish.id} className="py-3.5">
                      <div className="flex items-center justify-between gap-2 text-sm">
                        <span className="font-semibold text-[#1E241E]">{wish.name}</span>
                        <span className="text-xs text-[#6B7268] tabular-nums">
                          {wish.attending === 'yes'
                            ? lang === 'bn'
                              ? `${toLocalDigits(wish.guestsCount, lang)} জন · উপস্থিত`
                              : `${wish.guestsCount} guests · Attending`
                            : lang === 'bn'
                              ? 'শুভেচ্ছা'
                              : 'Sent Wishes'}
                        </span>
                      </div>
                      {wish.message && (
                        <p className="mt-1 text-sm text-[#4D544C] leading-relaxed">
                          “{wish.message}”
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
