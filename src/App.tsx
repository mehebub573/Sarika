import {useState} from 'react';
import {ChevronDown, HeartHandshake} from 'lucide-react';
import {motion} from 'motion/react';
import {CountdownSection} from './components/CountdownSection';
import {GeometricFrame} from './components/GeometricFrame';
import {MusicPlayer} from './components/MusicPlayer';
import {PhotoGallerySection} from './components/PhotoGallerySection';
import {RsvpSection} from './components/RsvpSection';
import {ScheduleSection} from './components/ScheduleSection';
import {VenueMapSection} from './components/VenueMapSection';
import {
  HeroLandscapeSVG,
  NightCoupleSVG,
  ScrollRoadTrack,
  TwilightSkylineSVG,
} from './components/WeddingIllustrations';
import {COPY, EventKey, Language} from './data/weddingContent';

export default function App() {
  const [lang, setLang] = useState<Language>('bn');
  const [selectedMapEvent, setSelectedMapEvent] = useState<EventKey>('biye');
  const [musicPlaySignal, setMusicPlaySignal] = useState(0);

  const t = COPY[lang];
  const displayFont = lang === 'bn' ? 'font-display-bn' : 'font-display-en';

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  };

  const handleOpenInvitation = () => {
    setMusicPlaySignal((prev) => prev + 1);
    scrollToSection('bismillah');
  };

  const handleViewVenueOnMap = (key: EventKey) => {
    setSelectedMapEvent(key);
    scrollToSection('location');
  };

  return (
    <div className="min-h-screen bg-[#FAF6EC] text-[#1E241E]">
      {/* Strict 3-zone Top Navigation Bar */}
      <header className="sticky top-0 z-30 border-b border-[#E6DFCE] bg-[#FAF6EC]/90 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6">
          {/* Zone 1: Single-line Wordmark */}
          <a
            href="#top"
            className={`text-lg sm:text-xl font-bold tracking-tight text-[#8E1523] whitespace-nowrap shrink-0 ${displayFont}`}
          >
            {t.brand}
          </a>

          {/* Zone 2: Clean Single-line Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#3B423B]">
            <a
              href="#bismillah"
              className="hover:text-[#8E1523] transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.invite}
            </a>
            <a
              href="#schedule"
              className="hover:text-[#8E1523] transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.schedule}
            </a>
            <a
              href="#gallery"
              className="hover:text-[#8E1523] transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.gallery}
            </a>
            <a
              href="#location"
              className="hover:text-[#8E1523] transition-colors whitespace-nowrap shrink-0"
            >
              {t.nav.map}
            </a>
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={() => scrollToSection('rsvp')}
              className="min-h-[40px] rounded-lg bg-[#1D633A] px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-[#164E2D] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {t.nav.rsvp}
            </button>
          </div>
        </div>
      </header>

      <main id="top">
        {/* SECTION 1: HERO GATE & VANISHING ROAD (Video 0:00 - 0:05) */}
        <section className="relative min-h-[86vh] overflow-hidden bg-gradient-to-b from-[#FAF6EC] via-[#F4EFE1] to-[#DCE9D7] pb-24 sm:pb-32">
          <HeroLandscapeSVG />

          {/* EN | বাংলা Language Switcher matching top-right of video */}
          <div className="relative z-20 mx-auto flex max-w-5xl justify-end px-4 pt-4 sm:px-6">
            <div
              role="group"
              aria-label="Language switch"
              className="inline-flex items-center rounded-full border border-[#D4CDBB] bg-white/90 p-1 shadow-sm backdrop-blur-sm"
            >
              <button
                type="button"
                onClick={() => setLang('en')}
                className={`min-h-[34px] rounded-full px-3.5 text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[#1D633A] text-white'
                    : 'text-[#3B423B] hover:text-[#1E241E]'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('bn')}
                className={`min-h-[34px] rounded-full px-3.5 text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                  lang === 'bn'
                    ? 'bg-[#1D633A] text-white'
                    : 'text-[#3B423B] hover:text-[#1E241E]'
                }`}
              >
                বাংলা
              </button>
            </div>
          </div>

          {/* Hanging Hero Invitation Billboard */}
          <motion.div
            initial={{opacity: 0, y: -18}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
            className="relative z-20 mx-auto max-w-lg px-4 pt-1 animate-hanging-sway"
          >
            <GeometricFrame wireHeight={28} innerClassName="text-center">
              <p className="text-xs sm:text-sm font-medium text-[#6B7268]">
                {t.hero.familyLine}
              </p>

              <h1
                className={`mt-3 text-4xl sm:text-5xl font-bold leading-tight text-[#8E1523] ${displayFont}`}
                style={{textWrap: 'balance'}}
              >
                {t.hero.couple}
              </h1>

              <p className="mt-3 text-sm sm:text-base font-medium text-[#3B423B]">
                {t.hero.inviteLine}
              </p>

              <div className="my-5 border-t border-[#E6DFCE]" />

              <p className="text-base sm:text-lg font-bold text-[#1E241E]">{t.hero.date}</p>
              <p className="mt-1 text-xs sm:text-sm text-[#5E655D]">{t.hero.venue}</p>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleOpenInvitation}
                  className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#1D633A] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#164E2D] transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>{t.hero.ctaOpen}</span>
                  <ChevronDown className="h-4 w-4 shrink-0" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection('rsvp')}
                  className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-[#C82333] bg-[#FFF5F5] px-5 py-2.5 text-sm font-semibold text-[#8E1523] hover:bg-[#FEE8E8] transition-colors whitespace-nowrap cursor-pointer"
                >
                  <HeartHandshake className="h-4 w-4 shrink-0" />
                  <span>{t.hero.ctaRsvp}</span>
                </button>
              </div>
            </GeometricFrame>
          </motion.div>
        </section>

        {/* Scroll-driven Road Transition */}
        <ScrollRoadTrack />

        {/* SECTION 2: BISMILLAH & FORMAL INVITATION (Video 0:06 - 0:08) */}
        <section id="bismillah" className="bg-[#FAF6EC] pt-8 pb-6 px-4">
          <motion.div
            initial={{opacity: 0, y: 24}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.25}}
            transition={{duration: 0.5}}
            className="mx-auto max-w-xl"
          >
            <GeometricFrame wireHeight={38} innerClassName="text-center">
              <p
                className="font-arabic text-2xl sm:text-3xl font-bold text-[#1E241E] leading-relaxed"
                dir="rtl"
                lang="ar"
              >
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
              </p>
              <p className="mt-1 text-xs sm:text-sm text-[#6B7268]">{t.bismillah.meaning}</p>

              <p className="mt-6 text-xs sm:text-sm font-semibold text-[#C82333]">
                {t.bismillah.eyebrow}
              </p>
              <h2
                className={`mt-1 text-3xl sm:text-4xl font-bold text-[#1E241E] ${displayFont}`}
              >
                {t.bismillah.heading}
              </h2>

              <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#3B423B] max-w-md mx-auto">
                {t.bismillah.body}
              </p>

              <div className="mt-6 pt-5 border-t border-[#E6DFCE]">
                <p className={`text-base sm:text-lg font-bold text-[#1D633A] ${displayFont}`}>
                  {t.bismillah.signoff}
                </p>
              </div>
            </GeometricFrame>
          </motion.div>
        </section>

        <ScrollRoadTrack showRickshaw reverse />

        {/* SECTION 3: GROOM & BRIDE HIGHWAY SIGNPOST (Video 0:09 - 0:13) */}
        <section id="couple" className="bg-[#FAF6EC] pt-10 pb-6 px-4">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-sm font-medium text-[#7A6A53]">{t.coupleSection.eyebrow}</p>
            <h2
              className={`mt-1 text-3xl sm:text-5xl font-bold text-[#1E241E] ${displayFont}`}
            >
              {t.coupleSection.heading}
            </h2>

            {/* Signpost Pole with Green Groom Board & Crimson Bride Board */}
            <div className="relative mt-10 pb-4">
              {/* Central striped signpost pole */}
              <div
                className="pointer-events-none absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-3.5 rounded-t-full border border-[#1E241E]"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(to bottom, #1E241E 0px, #1E241E 18px, #FAF6EC 18px, #FAF6EC 36px)',
                }}
                aria-hidden="true"
              />

              <div className="relative z-10 space-y-6">
                {/* Groom Green Highway Sign */}
                <motion.div
                  initial={{opacity: 0, x: -24}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: true, amount: 0.3}}
                  transition={{duration: 0.45}}
                  className="mx-auto max-w-md rounded-xl bg-[#1D633A] p-3 shadow-[0_12px_24px_rgba(29,99,58,0.22)]"
                >
                  <div className="rounded-lg border-2 border-white/85 px-5 py-6 text-white">
                    <p className="text-xs font-semibold text-[#C6F0D6]">
                      {t.coupleSection.groomLabel}
                    </p>
                    <h3 className={`mt-1 text-3xl sm:text-4xl font-bold text-white ${displayFont}`}>
                      {t.coupleSection.groomName}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#EBF7EF]">
                      {t.coupleSection.groomParents}
                    </p>
                  </div>
                </motion.div>

                {/* Bride Crimson Highway Sign */}
                <motion.div
                  initial={{opacity: 0, x: 24}}
                  whileInView={{opacity: 1, x: 0}}
                  viewport={{once: true, amount: 0.3}}
                  transition={{duration: 0.45}}
                  className="mx-auto max-w-md rounded-xl bg-[#B81D2B] p-3 shadow-[0_12px_24px_rgba(184,29,43,0.22)]"
                >
                  <div className="rounded-lg border-2 border-white/85 px-5 py-6 text-white">
                    <p className="text-xs font-semibold text-[#FDE0E3]">
                      {t.coupleSection.brideLabel}
                    </p>
                    <h3 className={`mt-1 text-3xl sm:text-4xl font-bold text-white ${displayFont}`}>
                      {t.coupleSection.brideName}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#FFF1F2]">
                      {t.coupleSection.brideParents}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <ScrollRoadTrack />

        {/* SECTION 4: CEREMONY SCHEDULE (Video 0:14 - 0:24) */}
        <ScheduleSection lang={lang} onViewVenueOnMap={handleViewVenueOnMap} />

        {/* SECTION 5: LIVE COUNTDOWN TIMER (Video 0:25 - 0:27) */}
        <CountdownSection lang={lang} />

        <ScrollRoadTrack />

        {/* SECTION 6: WEDDING LOCATION SIGNBOARD & INTERACTIVE MAP (Video 0:28 - 0:29) */}
        <VenueMapSection
          lang={lang}
          selectedEventKey={selectedMapEvent}
          onSelectEvent={setSelectedMapEvent}
        />

        {/* SECTION 7: TWILIGHT SKYLINE TO STARRY NIGHT CELEBRATION (Video 0:30 - 0:36) */}
        <div className="bg-[#FAF6EC]">
          <TwilightSkylineSVG />
        </div>

        <div className="bg-[#17165E]">
          <ScrollRoadTrack darkSky />
        </div>

        <section className="bg-[#17165E] pt-10 pb-8 px-4 text-center text-white">
          <div className="mx-auto max-w-4xl">
            <NightCoupleSVG />
          </div>
        </section>

        {/* PHOTO GALLERY */}
        <PhotoGallerySection lang={lang} />

        {/* FINAL HANGING CARD ON DEEP NIGHT SKY (Video 0:34 - 0:36) */}
        <section className="bg-[#17165E] pb-16 pt-4 px-4 text-center">
          <motion.div
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.25}}
            transition={{duration: 0.5}}
            className="mx-auto max-w-lg"
          >
            <GeometricFrame wireColor="#93C5FD" wireHeight={36} innerClassName="text-center">
              <h2
                className={`text-2xl sm:text-3xl font-bold text-[#8E1523] ${displayFont}`}
                style={{textWrap: 'balance'}}
              >
                {t.finale.heading}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#3B423B]">{t.finale.subtitle}</p>

              <div className="my-5 border-t border-[#E6DFCE]" />

              <p className={`text-3xl sm:text-4xl font-bold text-[#1E241E] ${displayFont}`}>
                {t.finale.couple}
              </p>
              <p className="mt-2 text-sm font-semibold text-[#6B7268] tabular-nums">
                {t.finale.datePlace}
              </p>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => scrollToSection('rsvp')}
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-[#C82333] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#A71B29] transition-colors whitespace-nowrap cursor-pointer"
                >
                  <HeartHandshake className="h-4 w-4 shrink-0" />
                  <span>{t.finale.rsvpCta}</span>
                </button>
              </div>
            </GeometricFrame>

            <div className="mt-8 text-white/90">
              <p className={`text-lg font-semibold ${displayFont}`}>{t.finale.familySign}</p>
              <p className="mt-1 text-xs text-[#C7D2FE]">{t.finale.credit}</p>
            </div>
          </motion.div>
        </section>

        {/* SECTION 8: RSVP CONFIRMATION & WISHES */}
        <RsvpSection lang={lang} />
      </main>

      {/* Quiet Footer */}
      <footer className="border-t border-[#E6DFCE] bg-[#F3EDE0] py-8 px-4 text-center text-xs text-[#5E655D]">
        <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-semibold text-[#1E241E]">{t.brand} · ৩০ মার্চ ২০৩০</p>
          <p>{t.finale.familySign}</p>
        </div>
      </footer>

      {/* Floating Red Music Player (Alfaaz — Hamza Malik & Zain Zohaib) */}
      <MusicPlayer lang={lang} externalPlaySignal={musicPlaySignal} />
    </div>
  );
}
