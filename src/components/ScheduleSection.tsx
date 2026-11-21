import {CalendarPlus, MapPin} from 'lucide-react';
import {motion} from 'motion/react';
import {
  CEREMONY_EVENTS,
  COPY,
  downloadEventIcs,
  EventKey,
  Language,
} from '../data/weddingContent';
import {CeremonyPortraitsSVG, ScrollRoadTrack} from './WeddingIllustrations';

interface ScheduleSectionProps {
  lang: Language;
  onViewVenueOnMap: (key: EventKey) => void;
}

export function ScheduleSection({lang, onViewVenueOnMap}: ScheduleSectionProps) {
  const t = COPY[lang].schedule;
  const holud = CEREMONY_EVENTS[0];
  const biye = CEREMONY_EVENTS[1];
  const boubhat = CEREMONY_EVENTS[2];

  return (
    <section id="schedule" className="bg-[#FAF6EC] pt-10 pb-4">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
        <p className="text-sm font-medium text-[#7A6A53]">{t.eyebrow}</p>
        <h2
          className={`mt-1 text-3xl sm:text-5xl font-bold text-[#1E241E] ${
            lang === 'bn' ? 'font-display-bn' : 'font-display-en'
          }`}
        >
          {t.heading}
        </h2>
      </div>

      {/* 1. GAYE HOLUD — Festival Stall / Chalkboard Booth (Video 0:15-0:17) */}
      <motion.div
        initial={{opacity: 0, y: 24}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.2}}
        transition={{duration: 0.45}}
        className="mx-auto mt-10 max-w-lg px-4"
      >
        <div className="relative overflow-hidden rounded-t-3xl rounded-b-xl border-4 border-[#1F2421] bg-[#24282E] shadow-[0_14px_30px_rgba(30,36,30,0.16)]">
          {/* Top Marigold Awning */}
          <div className="relative bg-[#E6A817] px-5 pt-4 pb-3 text-center border-b-4 border-[#1F2421]">
            <div className="flex justify-center gap-2 mb-1.5" aria-hidden="true">
              {Array.from({length: 9}).map((_, idx) => (
                <span
                  key={idx}
                  className="h-2 w-2 rounded-full bg-[#FFF7CC] shadow-[0_0_6px_#FEF08A]"
                />
              ))}
            </div>
            <p className="text-xs font-bold tracking-wide text-[#1E241E]">{t.bannerNote}</p>
          </div>

          {/* Chalkboard Body */}
          <div className="px-6 py-8 text-center text-white">
            <h3
              className={`text-3xl sm:text-4xl font-bold text-[#F5C542] ${
                lang === 'bn' ? 'font-display-bn' : 'font-display-en'
              }`}
            >
              {holud.title[lang]}
            </h3>
            <p className="mt-2 text-sm text-[#D7DDD7]">{holud.tagline[lang]}</p>

            <div className="my-5 border-t border-dashed border-white/25" />

            <p className="text-lg sm:text-xl font-bold text-[#FDE68A]">{holud.dateLabel[lang]}</p>
            <p className="mt-1 text-base font-semibold text-white">{holud.timeLabel[lang]}</p>

            <div className="mt-4 text-sm text-[#D7DDD7] space-y-0.5">
              <p className="font-semibold text-white">{holud.venueName[lang]}</p>
              <p>{holud.venueAddress[lang]}</p>
            </div>
          </div>

          {/* Bottom Stall Action Buttons */}
          <div className="grid grid-cols-2 gap-3 bg-[#E5DEC9] p-4 border-t-4 border-[#1F2421]">
            <button
              type="button"
              onClick={() => onViewVenueOnMap('holud')}
              className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg bg-[#1E241E] px-3 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-[#313A31] transition-colors whitespace-nowrap cursor-pointer"
            >
              <MapPin className="h-4 w-4 shrink-0" />
              <span>{t.viewMap}</span>
            </button>
            <button
              type="button"
              onClick={() => downloadEventIcs(holud, lang)}
              className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg border border-[#1E241E] bg-white px-3 py-2 text-xs sm:text-sm font-semibold text-[#1E241E] hover:bg-[#FAF6EC] transition-colors whitespace-nowrap cursor-pointer"
            >
              <CalendarPlus className="h-4 w-4 shrink-0" />
              <span>{t.saveCal}</span>
            </button>
          </div>
        </div>
      </motion.div>

      <ScrollRoadTrack reverse />

      {/* 2. BIYE (MAIN WEDDING) — Colorful Pandal Gate Arch (Video 0:18-0:21) */}
      <motion.div
        initial={{opacity: 0, y: 24}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.2}}
        transition={{duration: 0.45}}
        className="mx-auto mt-10 max-w-lg px-4"
      >
        <div className="relative overflow-hidden rounded-t-[44px] rounded-b-xl border-4 border-[#1F2421] bg-[#FAF6EC] shadow-[0_14px_32px_rgba(30,36,30,0.16)]">
          {/* Colorful Sunburst Arch Header */}
          <div className="relative h-24 w-full overflow-hidden border-b-4 border-[#1F2421] bg-[#FFF8E7]">
            <svg
              viewBox="0 0 400 110"
              preserveAspectRatio="none"
              className="h-full w-full"
              aria-hidden="true"
            >
              <path d="M200 110 L0 110 L0 35 Z" fill="#1D633A" />
              <path d="M200 110 L0 35 L95 0 Z" fill="#F4A261" />
              <path d="M200 110 L95 0 L200 0 Z" fill="#C82333" />
              <path d="M200 110 L200 0 L305 0 Z" fill="#E6A817" />
              <path d="M200 110 L305 0 L400 35 Z" fill="#2563EB" />
              <path d="M200 110 L400 35 L400 110 Z" fill="#1D633A" />
              <circle cx="200" cy="110" r="34" fill="#FAF6EC" stroke="#1F2421" strokeWidth="4" />
            </svg>
          </div>

          <div className="p-5 sm:p-6 text-center space-y-3">
            <h3
              className={`text-3xl sm:text-4xl font-bold text-[#C82333] ${
                lang === 'bn' ? 'font-display-bn' : 'font-display-en'
              }`}
            >
              {biye.title[lang]}
            </h3>
            <p className="text-sm font-medium text-[#3B423B] pb-2">{biye.tagline[lang]}</p>

            {/* Stacked vibrant schedule blocks from video */}
            <div className="rounded-lg border-2 border-[#1F2421] bg-[#E6A817] px-4 py-3 text-base sm:text-lg font-bold text-[#1E241E]">
              {biye.dateLabel[lang]}
            </div>
            <div className="rounded-lg border-2 border-[#1F2421] bg-[#1E56A0] px-4 py-3 text-base sm:text-lg font-bold text-white">
              {biye.timeLabel[lang]}
            </div>
            <div className="rounded-lg border-2 border-[#1F2421] bg-[#1D633A] px-4 py-3.5 text-white">
              <p className="text-base sm:text-lg font-bold">{biye.venueName[lang]}</p>
              <p className="mt-0.5 text-xs sm:text-sm text-[#DCFCE7]">{biye.venueAddress[lang]}</p>
            </div>

            <div className="pt-3 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => onViewVenueOnMap('biye')}
                className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg bg-[#1E241E] px-3 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-[#313A31] transition-colors whitespace-nowrap cursor-pointer"
              >
                <MapPin className="h-4 w-4 shrink-0" />
                <span>{t.viewMap}</span>
              </button>
              <button
                type="button"
                onClick={() => downloadEventIcs(biye, lang)}
                className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg border border-[#1E241E] bg-white px-3 py-2 text-xs sm:text-sm font-semibold text-[#1E241E] hover:bg-[#F3EDE0] transition-colors whitespace-nowrap cursor-pointer"
              >
                <CalendarPlus className="h-4 w-4 shrink-0" />
                <span>{t.saveCal}</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <ScrollRoadTrack />

      {/* 3. BOU BHAT — Three Portraits + Festive Dot-Bordered Card (Video 0:22-0:24) */}
      <motion.div
        initial={{opacity: 0, y: 24}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true, amount: 0.2}}
        transition={{duration: 0.45}}
        className="mx-auto mt-10 max-w-lg px-4"
      >
        <CeremonyPortraitsSVG />

        <div className="mt-3 relative rounded-2xl border-4 border-[#1F2421] bg-white p-6 sm:p-8 shadow-[0_14px_32px_rgba(30,36,30,0.14)]">
          {/* Colorful festive dot garland across top */}
          <div className="flex justify-center gap-2.5 pb-4 border-b border-[#EFEAE0]" aria-hidden="true">
            {['#C82333', '#E6A817', '#1D633A', '#2563EB', '#C82333', '#E6A817', '#1D633A'].map(
              (c, i) => (
                <span key={i} style={{backgroundColor: c}} className="h-3 w-3 rounded-full" />
              ),
            )}
          </div>

          <div className="mt-5 text-center">
            <h3
              className={`text-3xl sm:text-4xl font-bold text-[#C82333] ${
                lang === 'bn' ? 'font-display-bn' : 'font-display-en'
              }`}
            >
              {boubhat.title[lang]}
            </h3>
            <p className="mt-1.5 text-sm text-[#4D544C]">{boubhat.tagline[lang]}</p>
          </div>

          <ul className="mt-6 space-y-3 text-left text-sm sm:text-base text-[#1E241E]">
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-[#C82333] bg-[#FFF5F5]" />
              <span className="font-semibold">{boubhat.dateLabel[lang]}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-[#E6A817] bg-[#FFFBEB]" />
              <span className="font-semibold">{boubhat.timeLabel[lang]}</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1.5 h-3.5 w-3.5 shrink-0 rounded-full bg-[#C82333]" />
              <div>
                <p className="font-bold">{boubhat.venueName[lang]}</p>
                <p className="text-sm text-[#5E655D]">{boubhat.venueAddress[lang]}</p>
              </div>
            </li>
          </ul>

          <div className="mt-7 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => onViewVenueOnMap('boubhat')}
              className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg bg-[#1E241E] px-3 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-[#313A31] transition-colors whitespace-nowrap cursor-pointer"
            >
              <MapPin className="h-4 w-4 shrink-0" />
              <span>{t.viewMap}</span>
            </button>
            <button
              type="button"
              onClick={() => downloadEventIcs(boubhat, lang)}
              className="inline-flex min-h-[44px] items-center justify-center gap-1.5 rounded-lg border border-[#1E241E] bg-[#FAF6EC] px-3 py-2 text-xs sm:text-sm font-semibold text-[#1E241E] hover:bg-[#F1EAD9] transition-colors whitespace-nowrap cursor-pointer"
            >
              <CalendarPlus className="h-4 w-4 shrink-0" />
              <span>{t.saveCal}</span>
            </button>
          </div>
        </div>
      </motion.div>

      <ScrollRoadTrack showRickshaw reverse />
    </section>
  );
}
