import {useRef} from 'react';
import {motion, useScroll, useTransform} from 'motion/react';

export function WeddingCarSVG({className = 'w-36 h-16'}: {className?: string}) {
  return (
    <svg
      viewBox="0 0 220 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Ground shadow */}
      <ellipse cx="110" cy="88" rx="88" ry="6" fill="rgba(0,0,0,0.22)" />

      {/* Couple silhouettes inside open-top car */}
      {/* Groom */}
      <circle cx="92" cy="30" r="8" fill="#5A3825" />
      <path d="M84 26C86 19 98 19 100 26Z" fill="#F4E3B2" />
      <rect x="81" y="38" width="22" height="18" rx="6" fill="#F7F0DF" />
      <path d="M87 38L92 48L97 38" stroke="#D4AF37" strokeWidth="2" />

      {/* Bride */}
      <circle cx="118" cy="32" r="7.5" fill="#4A2D1C" />
      <path d="M109 27C112 20 125 20 127 29L129 43H108Z" fill="#C82333" />
      <circle cx="118" cy="24" r="2.2" fill="#F6C84C" />
      <rect x="108" y="39" width="20" height="17" rx="5" fill="#B81D2B" />

      {/* Windshield frame */}
      <path d="M136 50L148 28H154L144 50Z" fill="#DCE9EE" stroke="#D4AF37" strokeWidth="2" />

      {/* Main vintage car body */}
      <path
        d="M22 52C22 44 29 38 38 38H74L84 48H146L158 42H186C197 42 204 49 204 59V69C204 73 200 76 195 76H29C25 76 22 72 22 68V52Z"
        fill="#C82333"
      />
      {/* Upper crimson highlight */}
      <path
        d="M28 52C28 46 34 42 41 42H73L83 51H148L160 45H185C192 45 198 49 199 55H28V52Z"
        fill="#DE3545"
      />

      {/* Gold trim stripe */}
      <rect x="26" y="59" width="174" height="3.5" rx="1.5" fill="#F2C14E" />

      {/* Marigold floral garlands on car side & hood */}
      <path
        d="M52 57C64 67 80 67 92 57C104 67 120 67 132 57C144 67 162 67 174 57"
        stroke="#F6A81C"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="1 7"
      />
      <path
        d="M56 59C68 68 82 68 94 59C106 68 122 68 134 59C146 68 160 68 172 59"
        stroke="#E63946"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="1 10"
      />
      {/* Hood flower bouquet */}
      <circle cx="176" cy="43" r="5" fill="#F6B41E" />
      <circle cx="183" cy="44" r="4.2" fill="#E63946" />
      <circle cx="170" cy="45" r="3.8" fill="#2D6A4F" />

      {/* Bumpers & headlight */}
      <rect x="14" y="66" width="14" height="6" rx="3" fill="#E5E7EB" />
      <rect x="196" y="66" width="14" height="6" rx="3" fill="#E5E7EB" />
      <circle cx="201" cy="52" r="5" fill="#FEF08A" stroke="#D4AF37" strokeWidth="1.5" />

      {/* Front & Rear Fenders */}
      <path d="M36 74C36 58 64 58 64 74" fill="#9E1926" />
      <path d="M150 74C150 58 178 58 178 74" fill="#9E1926" />

      {/* Left Wheel */}
      <g className="animate-wheel">
        <circle cx="50" cy="74" r="14" fill="#1F2421" />
        <circle cx="50" cy="74" r="9" fill="#E5E7EB" />
        <circle cx="50" cy="74" r="4" fill="#C82333" />
        <line x1="50" y1="65" x2="50" y2="83" stroke="#9CA3AF" strokeWidth="1.5" />
        <line x1="41" y1="74" x2="59" y2="74" stroke="#9CA3AF" strokeWidth="1.5" />
      </g>

      {/* Right Wheel */}
      <g className="animate-wheel">
        <circle cx="164" cy="74" r="14" fill="#1F2421" />
        <circle cx="164" cy="74" r="9" fill="#E5E7EB" />
        <circle cx="164" cy="74" r="4" fill="#C82333" />
        <line x1="164" y1="65" x2="164" y2="83" stroke="#9CA3AF" strokeWidth="1.5" />
        <line x1="155" y1="74" x2="173" y2="74" stroke="#9CA3AF" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

export function RickshawSVG({className = 'w-28 h-16'}: {className?: string}) {
  return (
    <svg
      viewBox="0 0 160 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="80" cy="88" rx="64" ry="5" fill="rgba(0,0,0,0.2)" />
      {/* Painted rickshaw hood */}
      <path d="M36 58V34C36 22 48 16 62 16H78V58H36Z" fill="#1E7E5D" />
      <path d="M40 34C40 24 50 20 62 20H74V38H40V34Z" fill="#E63946" />
      <path d="M44 26H70" stroke="#F6C84C" strokeWidth="3" strokeDasharray="4 3" />
      {/* Seat & body */}
      <rect x="34" y="54" width="46" height="16" rx="4" fill="#E6A817" />
      <rect x="42" y="58" width="30" height="8" rx="2" fill="#264653" />
      {/* Frame to front wheel */}
      <path d="M78 64L114 48L124 72" stroke="#2D6A4F" strokeWidth="4" strokeLinecap="round" />
      <path d="M110 46H122" stroke="#1F2421" strokeWidth="3" strokeLinecap="round" />
      {/* Driver silhouette */}
      <circle cx="96" cy="36" r="6" fill="#5A3825" />
      <path d="M88 54L94 42H104L100 58Z" fill="#3B82F6" />

      {/* Rear wheels */}
      <g className="animate-wheel">
        <circle cx="52" cy="74" r="14" stroke="#1F2421" strokeWidth="3.5" fill="none" />
        <circle cx="52" cy="74" r="3.5" fill="#E63946" />
        <line x1="52" y1="60" x2="52" y2="88" stroke="#4B5563" strokeWidth="1.2" />
        <line x1="38" y1="74" x2="66" y2="74" stroke="#4B5563" strokeWidth="1.2" />
      </g>
      {/* Front wheel */}
      <g className="animate-wheel">
        <circle cx="124" cy="74" r="13" stroke="#1F2421" strokeWidth="3.5" fill="none" />
        <circle cx="124" cy="74" r="3" fill="#E63946" />
        <line x1="124" y1="61" x2="124" y2="87" stroke="#4B5563" strokeWidth="1.2" />
        <line x1="111" y1="74" x2="137" y2="74" stroke="#4B5563" strokeWidth="1.2" />
      </g>
    </svg>
  );
}

interface ScrollRoadTrackProps {
  showRickshaw?: boolean;
  reverse?: boolean;
  darkSky?: boolean;
}

/**
 * Horizontal road strip seen between sections in the video.
 * The vintage red wedding car glides across the road as the guest scrolls.
 */
export function ScrollRoadTrack({
  showRickshaw = false,
  reverse = false,
  darkSky = false,
}: ScrollRoadTrackProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: trackRef,
    offset: ['start end', 'end start'],
  });

  const carX = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? ['62%', '-12%'] : ['-10%', '68%'],
  );
  const rickshawX = useTransform(
    scrollYProgress,
    [0, 1],
    reverse ? ['82%', '16%'] : ['8%', '48%'],
  );

  return (
    <div ref={trackRef} className="relative w-full overflow-hidden select-none pt-10">
      {/* Grass verge */}
      <div
        className={`h-5 w-full ${
          darkSky
            ? 'bg-gradient-to-b from-[#1E2B48] to-[#23533A]'
            : 'bg-gradient-to-b from-[#A8C9A3] to-[#6B9F6E]'
        }`}
      />
      {/* Road asphalt */}
      <div className="relative h-14 sm:h-16 w-full bg-[#44484D] border-y-4 border-[#D6D3C9]">
        {/* Dashed white road lines */}
        <div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 opacity-90"
          style={{
            backgroundImage:
              'repeating-linear-gradient(to right, #FAF6EC 0px, #FAF6EC 26px, transparent 26px, transparent 48px)',
          }}
        />
        {/* Moving vehicles */}
        {showRickshaw && (
          <motion.div
            style={{x: rickshawX}}
            className="absolute -top-11 sm:-top-12 left-0 z-10 pointer-events-none"
          >
            <RickshawSVG className="w-24 sm:w-28 h-14 sm:h-16" />
          </motion.div>
        )}
        <motion.div
          style={{x: carX}}
          className={`absolute -top-11 sm:-top-13 left-0 z-20 pointer-events-none ${
            reverse ? '-scale-x-100' : ''
          }`}
        >
          <WeddingCarSVG className="w-32 sm:w-44 h-16 sm:h-20" />
        </motion.div>
      </div>
      {/* Lower grass strip */}
      <div className={`h-4 w-full ${darkSky ? 'bg-[#17165E]' : 'bg-[#5E8D61]'}`} />
    </div>
  );
}

/**
 * Hero landscape backdrop: layered green misty hills, pine trees flanking both sides,
 * festive triangular bunting flags, and vanishing-point highway.
 */
export function HeroLandscapeSVG() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Distant hills */}
      <svg
        viewBox="0 0 1440 520"
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full h-[58%]"
      >
        <path
          d="M0 240C240 160 440 180 720 230C1020 280 1240 170 1440 210V520H0Z"
          fill="#DCE9D7"
        />
        <path
          d="M0 300C300 220 520 290 820 250C1090 215 1290 280 1440 255V520H0Z"
          fill="#BDD4B8"
        />
        <path
          d="M0 360C320 330 620 350 960 330C1210 315 1350 350 1440 340V520H0Z"
          fill="#8BB88B"
        />
        {/* Perspective asphalt road leading toward horizon */}
        <polygon points="688,335 752,335 960,520 480,520" fill="#464A4F" />
        <polygon points="682,335 688,335 480,520 462,520" fill="#FAF6EC" />
        <polygon points="752,335 758,335 978,520 960,520" fill="#FAF6EC" />
        <polygon points="717,345 723,345 726,375 714,375" fill="#FAF6EC" />
        <polygon points="715,392 725,392 729,432 711,432" fill="#FAF6EC" />
        <polygon points="712,452 728,452 734,505 706,505" fill="#FAF6EC" />
      </svg>

      {/* Left pine cluster */}
      <svg
        viewBox="0 0 260 360"
        className="absolute bottom-4 -left-8 sm:left-0 w-40 sm:w-64 h-auto opacity-95"
      >
        <polygon points="70,40 120,160 20,160" fill="#2D6A4F" />
        <polygon points="70,95 130,220 10,220" fill="#245840" />
        <polygon points="70,150 140,295 0,295" fill="#1B4332" />
        <rect x="63" y="295" width="14" height="55" fill="#5C4033" />

        <polygon points="160,115 200,205 120,205" fill="#40916C" />
        <polygon points="160,160 210,265 110,265" fill="#2D6A4F" />
        <polygon points="160,210 220,320 100,320" fill="#1B4332" />
        <rect x="155" y="320" width="10" height="40" fill="#5C4033" />
      </svg>

      {/* Right pine cluster */}
      <svg
        viewBox="0 0 260 360"
        className="absolute bottom-4 -right-8 sm:right-0 w-40 sm:w-64 h-auto opacity-95"
      >
        <polygon points="190,40 240,160 140,160" fill="#2D6A4F" />
        <polygon points="190,95 250,220 130,220" fill="#245840" />
        <polygon points="190,150 260,295 120,295" fill="#1B4332" />
        <rect x="183" y="295" width="14" height="55" fill="#5C4033" />

        <polygon points="100,115 140,205 60,205" fill="#40916C" />
        <polygon points="100,160 150,265 50,265" fill="#2D6A4F" />
        <polygon points="100,210 160,320 40,320" fill="#1B4332" />
        <rect x="95" y="320" width="10" height="40" fill="#5C4033" />
      </svg>

      {/* Overhead festival bunting flags strung across the road */}
      <svg
        viewBox="0 0 1200 130"
        className="absolute bottom-28 sm:bottom-36 left-1/2 -translate-x-1/2 w-[94%] max-w-4xl h-auto opacity-90"
      >
        <path d="M40,20 Q600,98 1160,20" stroke="#7A6A53" strokeWidth="2.5" fill="none" />
        {[
          {x: 110, y: 34, c: '#C82333'},
          {x: 190, y: 45, c: '#E6A817'},
          {x: 275, y: 54, c: '#2D6A4F'},
          {x: 365, y: 60, c: '#3B82F6'},
          {x: 455, y: 63, c: '#C82333'},
          {x: 545, y: 65, c: '#E6A817'},
          {x: 635, y: 65, c: '#2D6A4F'},
          {x: 725, y: 62, c: '#3B82F6'},
          {x: 815, y: 57, c: '#C82333'},
          {x: 905, y: 50, c: '#E6A817'},
          {x: 995, y: 41, c: '#2D6A4F'},
          {x: 1085, y: 31, c: '#C82333'},
        ].map((flag, i) => (
          <polygon
            key={i}
            points={`${flag.x - 16},${flag.y} ${flag.x + 16},${flag.y} ${flag.x},${flag.y + 30}`}
            fill={flag.c}
          />
        ))}
      </svg>
    </div>
  );
}

/**
 * Three framed portrait windows above the Bou Bhat card (0:22 in video)
 */
export function CeremonyPortraitsSVG() {
  return (
    <div className="mx-auto grid max-w-md grid-cols-3 gap-3 px-4" aria-hidden="true">
      {/* Groom portrait window */}
      <div className="rounded-t-2xl border-2 border-[#D4AF37]/60 bg-[#F2ECE0] p-2.5 shadow-sm">
        <svg viewBox="0 0 80 86" className="mx-auto w-full h-20">
          <rect x="6" y="6" width="68" height="74" rx="8" fill="#E3D9C6" />
          <circle cx="40" cy="34" r="12" fill="#8C5E3C" />
          <path d="M27 28C31 18 49 18 53 28Z" fill="#2D6A4F" />
          <path d="M18 80C20 58 60 58 62 80Z" fill="#2D6A4F" />
          <path d="M35 58L40 69L45 58" stroke="#E6A817" strokeWidth="2.5" fill="none" />
        </svg>
      </div>
      {/* Elder / Imam portrait window */}
      <div className="rounded-t-2xl border-2 border-[#D4AF37]/60 bg-[#F2ECE0] p-2.5 shadow-sm">
        <svg viewBox="0 0 80 86" className="mx-auto w-full h-20">
          <rect x="6" y="6" width="68" height="74" rx="8" fill="#E3D9C6" />
          <circle cx="40" cy="34" r="12" fill="#9A6B4A" />
          <path d="M29 27C32 19 48 19 51 27Z" fill="#FFFFFF" />
          <path d="M31 40C35 50 45 50 49 40" fill="#E5E7EB" />
          <path d="M18 80C20 56 60 56 62 80Z" fill="#FAF6EC" />
        </svg>
      </div>
      {/* Bride portrait window */}
      <div className="rounded-t-2xl border-2 border-[#D4AF37]/60 bg-[#F2ECE0] p-2.5 shadow-sm">
        <svg viewBox="0 0 80 86" className="mx-auto w-full h-20">
          <rect x="6" y="6" width="68" height="74" rx="8" fill="#E3D9C6" />
          <path d="M24 32C28 16 52 16 56 32L60 76H20Z" fill="#C82333" />
          <circle cx="40" cy="35" r="11" fill="#A67452" />
          <path d="M28 29C32 22 48 22 52 29" stroke="#F6C84C" strokeWidth="2.5" fill="none" />
          <circle cx="40" cy="26" r="2.2" fill="#F6C84C" />
        </svg>
      </div>
    </div>
  );
}

/**
 * Twilight Dhaka skyline transitioning into evening (0:30 - 0:31 in video)
 */
export function TwilightSkylineSVG() {
  return (
    <svg
      viewBox="0 0 1200 220"
      preserveAspectRatio="none"
      className="w-full h-36 sm:h-48 block"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="twilightSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FAF6EC" stopOpacity="0" />
          <stop offset="45%" stopColor="#6D5CAE" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#2A2775" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <rect width="1200" height="220" fill="url(#twilightSky)" />
      {/* Far city silhouette */}
      <path
        d="M0 220V145H60V112H115V155H165V95H230V150H290V125H350V160H415V108H490V165H550V90H625V155H690V120H760V160H830V102H895V150H970V118H1030V162H1100V105H1165V155H1200V220Z"
        fill="#4F4591"
        opacity="0.6"
      />
      {/* Jatiya Sangsad (Parliament) inspired silhouette + Mosque Dome */}
      <rect x="470" y="110" width="120" height="110" fill="#2A256D" />
      <circle cx="530" cy="145" r="20" fill="#4B449C" />
      <path d="M770 150C770 118 825 118 825 150V220H770Z" fill="#252063" />
      <rect x="838" y="95" width="14" height="125" fill="#252063" />
      {/* Metrorail viaduct line */}
      <rect x="0" y="168" width="1200" height="12" fill="#3B3588" />
      <rect x="110" y="154" width="160" height="12" rx="4" fill="#A5B4FC" opacity="0.65" />
    </svg>
  );
}

/**
 * Night celebration couple illustration under fairy lights & crescent moon (0:32 - 0:33)
 */
export function NightCoupleSVG() {
  return (
    <svg
      viewBox="0 0 640 280"
      className="mx-auto w-full max-w-2xl h-auto"
      aria-hidden="true"
    >
      {/* Twinkling stars */}
      {[
        [65, 36, 2.5],
        [140, 62, 2],
        [210, 28, 2.8],
        [325, 42, 2],
        [430, 24, 2.5],
        [570, 58, 2],
        [95, 110, 1.8],
        [520, 115, 2.2],
      ].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="#FEF08A" opacity="0.85" />
      ))}

      {/* Crescent Moon */}
      <circle cx="520" cy="54" r="22" fill="#FEF08A" />
      <circle cx="529" cy="48" r="19" fill="#17165E" />

      {/* Festive Fairy Light Garlands */}
      <path d="M10,72 Q170,138 330,86 Q490,138 630,72" stroke="#93C5FD" strokeWidth="1.5" fill="none" opacity="0.55" />
      {[42, 92, 142, 194, 246, 298, 352, 404, 456, 508, 560, 602].map((x, idx) => {
        const y = idx < 6 ? 78 + Math.sin((idx / 5) * Math.PI) * 32 : 78 + Math.sin(((idx - 6) / 5) * Math.PI) * 32;
        return (
          <g key={x}>
            <circle cx={x} cy={y} r="7" fill="#FDE047" opacity="0.22" />
            <circle cx={x} cy={y} r="3.5" fill="#FEF9C3" />
          </g>
        );
      })}

      {/* Mandap / Archway backdrop */}
      <path d="M220 260V150C220 105 420 105 420 150V260" stroke="#F59E0B" strokeWidth="3" fill="#23217A" opacity="0.7" />
      <path d="M242 260V158C242 125 398 125 398 158V260" stroke="#FDE047" strokeWidth="1.5" strokeDasharray="5 5" fill="none" />

      {/* Groom (Mehebub) in ivory-gold sherwani */}
      <circle cx="288" cy="148" r="14" fill="#9A6B4A" />
      <path d="M274 142C278 130 298 130 302 142Z" fill="#FAF6EC" />
      <circle cx="288" cy="133" r="3" fill="#E6A817" />
      <path d="M266 258L274 164H302L310 258Z" fill="#FAF6EC" />
      <path d="M288 164V230" stroke="#D4AF37" strokeWidth="2.5" />
      {/* Groom holding bride's hand */}
      <path d="M300 182L322 196" stroke="#FAF6EC" strokeWidth="7" strokeLinecap="round" />

      {/* Bride (Sarika) in crimson & gold saree */}
      <circle cx="354" cy="154" r="13" fill="#A67452" />
      <path d="M338 148C342 135 366 135 370 150L376 258H326L334 166Z" fill="#C82333" />
      <path d="M336 168L374 225" stroke="#F6C84C" strokeWidth="3" opacity="0.85" />
      <path d="M342 145C348 139 360 139 366 145" stroke="#F6C84C" strokeWidth="2" fill="none" />
      <circle cx="354" cy="142" r="2.5" fill="#F6C84C" />
      {/* Bride hand */}
      <path d="M338 184L322 196" stroke="#C82333" strokeWidth="6.5" strokeLinecap="round" />
      <circle cx="322" cy="196" r="3.5" fill="#F6C84C" />

      {/* Golden ground line */}
      <rect x="60" y="258" width="520" height="4" rx="2" fill="#D4AF37" opacity="0.7" />
    </svg>
  );
}
