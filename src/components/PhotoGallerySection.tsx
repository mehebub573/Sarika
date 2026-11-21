import {useState} from 'react';
import {ChevronLeft, ChevronRight, Expand, ImageOff, X} from 'lucide-react';
import {COPY, GALLERY_PHOTOS, GalleryPhoto, Language} from '../data/weddingContent';

function ResilientPhoto({
  photo,
  lang,
  className = '',
}: {
  photo: GalleryPhoto;
  lang: Language;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#2B266B] via-[#4C2A4F] to-[#8E1523] p-6 text-center text-white ${className}`}
      >
        <ImageOff className="h-8 w-8 opacity-75 mb-2" />
        <p className="text-sm font-semibold">{photo.title[lang]}</p>
        <p className="text-xs opacity-75 mt-1">{photo.momentDate[lang]}</p>
      </div>
    );
  }

  return (
    <img
      src={photo.src}
      alt={photo.title[lang]}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${className}`}
    />
  );
}

export function PhotoGallerySection({lang}: {lang: Language}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const t = COPY[lang].gallery;

  const activePhoto = activeIndex !== null ? GALLERY_PHOTOS[activeIndex] : null;

  const handlePrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
  };

  const handleNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % GALLERY_PHOTOS.length);
  };

  return (
    <section id="gallery" className="bg-[#17165E] py-16 px-4 sm:px-6 text-white">
      <div className="mx-auto max-w-5xl">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium text-[#F5D06B]">{t.eyebrow}</p>
          <h2
            className={`mt-1 text-3xl sm:text-4xl font-bold text-white ${
              lang === 'bn' ? 'font-display-bn' : 'font-display-en'
            }`}
          >
            {t.heading}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#D7DAF5]">{t.subtitle}</p>
        </div>

        {/* Editorial Asymmetric Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Portrait Lead Frame */}
          <button
            type="button"
            onClick={() => setActiveIndex(0)}
            className="group relative md:col-span-5 min-h-[340px] md:min-h-[460px] overflow-hidden rounded-xl border border-white/15 bg-[#222078] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F5D06B]"
          >
            <ResilientPhoto photo={GALLERY_PHOTOS[0]} lang={lang} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
            <div className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm opacity-90 group-hover:opacity-100 transition-opacity">
              <Expand className="h-4 w-4" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-xs text-[#F5D06B]">{GALLERY_PHOTOS[0].momentDate[lang]}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">
                {GALLERY_PHOTOS[0].title[lang]}
              </h3>
              <p className="mt-1 text-xs text-white/85 line-clamp-2">
                {GALLERY_PHOTOS[0].caption[lang]}
              </p>
            </div>
          </button>

          {/* Right Stacked Frames */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {GALLERY_PHOTOS.slice(1, 3).map((photo, idx) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setActiveIndex(idx + 1)}
                className="group relative h-[220px] overflow-hidden rounded-xl border border-white/15 bg-[#222078] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F5D06B]"
              >
                <ResilientPhoto photo={photo} lang={lang} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm">
                  <Expand className="h-4 w-4" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-xs text-[#F5D06B]">{photo.momentDate[lang]}</p>
                  <h3 className="mt-0.5 text-base font-semibold text-white">
                    {photo.title[lang]}
                  </h3>
                </div>
              </button>
            ))}

            {/* Wide Evening Reception Showcase */}
            <button
              type="button"
              onClick={() => setActiveIndex(3)}
              className="group relative sm:col-span-2 h-[220px] overflow-hidden rounded-xl border border-white/15 bg-[#222078] text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#F5D06B]"
            >
              <ResilientPhoto photo={GALLERY_PHOTOS[3]} lang={lang} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm">
                <Expand className="h-4 w-4" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs text-[#F5D06B]">{GALLERY_PHOTOS[3].momentDate[lang]}</p>
                <h3 className="mt-0.5 text-lg font-semibold text-white">
                  {GALLERY_PHOTOS[3].title[lang]}
                </h3>
                <p className="mt-1 text-xs text-white/85">{GALLERY_PHOTOS[3].caption[lang]}</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title[lang]}
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Close gallery"
            className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous photo"
            className="hidden sm:flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors mr-3 cursor-pointer"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="relative max-w-3xl w-full overflow-hidden rounded-xl bg-[#111044] border border-white/15 shadow-2xl">
            <div className="aspect-[4/3] w-full bg-black">
              <ResilientPhoto photo={activePhoto} lang={lang} className="object-contain" />
            </div>
            <div className="p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <p className="text-xs text-[#F5D06B]">{activePhoto.momentDate[lang]}</p>
                <h3 className="text-lg font-semibold text-white">{activePhoto.title[lang]}</h3>
                <p className="text-sm text-white/80 mt-0.5">{activePhoto.caption[lang]}</p>
              </div>
              <div className="flex sm:hidden gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex h-11 flex-1 items-center justify-center rounded-lg bg-white/10 text-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex h-11 flex-1 items-center justify-center rounded-lg bg-white/10 text-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next photo"
            className="hidden sm:flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors ml-3 cursor-pointer"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </section>
  );
}
