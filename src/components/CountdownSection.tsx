import {useEffect, useState} from 'react';
import {COPY, Language, toLocalDigits, WEDDING_TARGET_ISO} from '../data/weddingContent';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

function computeTimeLeft(): TimeLeft {
  const target = new Date(WEDDING_TARGET_ISO).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return {days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true};
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return {days, hours, minutes, seconds, isPast: false};
}

export function CountdownSection({lang}: {lang: Language}) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => computeTimeLeft());
  const t = COPY[lang].countdown;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(computeTimeLeft());
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const units = [
    {
      value: toLocalDigits(String(timeLeft.days).padStart(2, '0'), lang),
      label: t.days,
      archColor: 'bg-[#F3D36B]',
    },
    {
      value: toLocalDigits(String(timeLeft.hours).padStart(2, '0'), lang),
      label: t.hours,
      archColor: 'bg-[#EFA59A]',
    },
    {
      value: toLocalDigits(String(timeLeft.minutes).padStart(2, '0'), lang),
      label: t.minutes,
      archColor: 'bg-[#A6D3C1]',
    },
    {
      value: toLocalDigits(String(timeLeft.seconds).padStart(2, '0'), lang),
      label: t.seconds,
      archColor: 'bg-[#B9CBE8]',
    },
  ];

  return (
    <section
      id="countdown"
      className="relative overflow-hidden bg-[#FAF6EC] pt-14 pb-6 px-4 sm:px-6"
    >
      {/* Subtle skyline silhouettes behind the flip cards as in video 0:26 */}
      <svg
        viewBox="0 0 1200 260"
        preserveAspectRatio="none"
        className="pointer-events-none absolute bottom-0 left-0 w-full h-56 opacity-45"
        aria-hidden="true"
      >
        <path
          d="M0 260V170H75V120H145V185H210V105H280V175H360V135H430V180H515V92H595V165H665V125H745V180H835V108H910V170H985V130H1065V178H1135V115H1200V260Z"
          fill="#E8DFCA"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="text-sm font-medium text-[#7A6A53]">{t.eyebrow}</p>
        <h2
          className={`mt-1 text-3xl sm:text-5xl font-bold text-[#1E241E] ${
            lang === 'bn' ? 'font-display-bn' : 'font-display-en'
          }`}
        >
          {t.heading}
        </h2>
        <p className="mt-2 text-sm text-[#5E655D]">
          {lang === 'bn' ? 'শনিবার, ৩০ মার্চ ২০৩০ · সন্ধ্যা ৭:০০ ঘটিকা' : 'Saturday, 30 March 2030 · 7:00 PM BST'}
        </p>

        {timeLeft.isPast ? (
          <div className="mt-8 rounded-2xl border border-[#D4AF37]/50 bg-[#FFF9E8] px-6 py-8 text-xl font-semibold text-[#8E1523]">
            {t.arrived}
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5 max-w-3xl mx-auto">
            {units.map((unit) => (
              <div
                key={unit.label}
                className="relative flex flex-col items-center justify-end pt-6"
              >
                {/* Arched pastel topper like the video's countdown cards */}
                <div
                  className={`w-full rounded-t-full ${unit.archColor} pt-3 pb-1 text-xs font-semibold text-[#1E241E] border border-b-0 border-[#1E241E]/15`}
                >
                  {unit.label}
                </div>
                <div className="w-full rounded-b-xl border border-[#1E241E]/15 bg-white px-3 py-5 shadow-[0_6px_18px_rgba(30,36,30,0.08)]">
                  <span className="block text-3xl sm:text-4xl font-bold tracking-tight text-[#1E241E] tabular-nums">
                    {unit.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
