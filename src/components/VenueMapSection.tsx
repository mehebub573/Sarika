import {useState} from 'react';
import {ArrowUpRight, Check, Copy, MapPin} from 'lucide-react';
import {CEREMONY_EVENTS, COPY, EventKey, Language} from '../data/weddingContent';

interface VenueMapSectionProps {
  lang: Language;
  selectedEventKey: EventKey;
  onSelectEvent: (key: EventKey) => void;
}

export function VenueMapSection({
  lang,
  selectedEventKey,
  onSelectEvent,
}: VenueMapSectionProps) {
  const [copied, setCopied] = useState(false);
  const t = COPY[lang].mapSection;
  const activeEvent =
    CEREMONY_EVENTS.find((ev) => ev.key === selectedEventKey) ?? CEREMONY_EVENTS[1];

  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    activeEvent.mapQuery,
  )}`;
  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
    activeEvent.mapQuery,
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(
        `${activeEvent.venueName[lang]}, ${activeEvent.venueAddress[lang]}`,
      );
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="location" className="bg-[#FAF6EC] py-16 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-medium text-[#7A6A53]">{t.eyebrow}</p>
          <h2
            className={`mt-1 text-3xl sm:text-4xl font-bold text-[#1E241E] ${
              lang === 'bn' ? 'font-display-bn' : 'font-display-en'
            }`}
          >
            {t.heading}
          </h2>
        </div>

        {/* Venue switcher tabs */}
        <div className="mt-7 flex flex-wrap justify-center gap-2">
          {CEREMONY_EVENTS.map((ev) => {
            const isActive = ev.key === activeEvent.key;
            return (
              <button
                key={ev.key}
                type="button"
                onClick={() => onSelectEvent(ev.key)}
                className={`min-h-[44px] px-4 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-[#1D633A] text-white shadow-sm'
                    : 'bg-white text-[#2F362F] border border-[#D8D1C0] hover:bg-[#F3EDE0]'
                }`}
              >
                {ev.title[lang]}
              </button>
            );
          })}
        </div>

        {/* Highway signboard + Embedded Map two-column balanced showcase */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Classic Bangladeshi Green Highway Signboard (from video 0:28) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="relative h-full rounded-xl bg-[#1D633A] p-4 sm:p-5 shadow-[0_12px_28px_rgba(29,99,58,0.22)] text-white flex flex-col justify-between">
              <div className="rounded-lg border-2 border-white/85 p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-medium text-[#DCEFE3] border-b border-white/25 pb-3">
                    <span>{t.signLabel}</span>
                    <span>{activeEvent.title[lang]}</span>
                  </div>

                  <h3
                    className={`mt-5 text-2xl sm:text-3xl font-bold leading-snug text-white ${
                      lang === 'bn' ? 'font-display-bn' : 'font-display-en'
                    }`}
                  >
                    {activeEvent.venueName[lang]}
                  </h3>

                  <p className="mt-3 text-base text-[#EBF7EF] leading-relaxed">
                    {activeEvent.venueAddress[lang]}
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/20 text-sm text-[#DCEFE3] space-y-1.5">
                    <p>{activeEvent.dateLabel[lang]}</p>
                    <p>{activeEvent.timeLabel[lang]}</p>
                    <p className="text-xs text-[#BCE0CA] pt-1">{activeEvent.landmark[lang]}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#1D633A] hover:bg-[#F3F8F5] transition-colors whitespace-nowrap"
                  >
                    <MapPin className="h-4 w-4 shrink-0" />
                    <span>{t.directionsBtn}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0" />
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-white/50 bg-[#154E2C] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#103D22] transition-colors whitespace-nowrap cursor-pointer"
                  >
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span>{copied ? t.copiedText : t.copyAddressBtn}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Google Maps Embed Frame */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 min-h-[320px] lg:min-h-[380px] overflow-hidden rounded-xl border border-[#D4CDBB] bg-[#E8E2D2] shadow-sm">
              <iframe
                title={`${activeEvent.venueName[lang]} Location Map`}
                src={embedSrc}
                className="h-full w-full min-h-[320px] lg:min-h-[380px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
