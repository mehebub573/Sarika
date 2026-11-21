import {useEffect, useRef, useState} from 'react';
import {ExternalLink, Music, Pause, Play, Volume2, VolumeX, X} from 'lucide-react';
import {COPY, Language, MUSIC_TRACK} from '../data/weddingContent';

interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  mute: () => void;
  unMute: () => void;
  setVolume: (volume: number) => void;
  destroy: () => void;
}

declare global {
  interface Window {
    YT?: {
      Player: new (
        element: HTMLElement | string,
        options: {
          videoId: string;
          playerVars?: Record<string, string | number>;
          events?: {
            onReady?: (event: {target: YTPlayer}) => void;
            onStateChange?: (event: {data: number}) => void;
          };
        },
      ) => YTPlayer;
      PlayerState?: {
        PLAYING: number;
        PAUSED: number;
        ENDED: number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface MusicPlayerProps {
  lang: Language;
  externalPlaySignal: number;
}

export function MusicPlayer({lang, externalPlaySignal}: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);

  const playerMountRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const pendingPlayRef = useRef(false);

  const t = COPY[lang].music;

  useEffect(() => {
    const initPlayer = () => {
      if (!playerMountRef.current || !window.YT?.Player || playerRef.current) return;
      playerRef.current = new window.YT.Player(playerMountRef.current, {
        videoId: MUSIC_TRACK.youtubeId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          loop: 1,
          modestbranding: 1,
          playsinline: 1,
          playlist: MUSIC_TRACK.youtubeId,
          rel: 0,
        },
        events: {
          onReady: (ev) => {
            setPlayerReady(true);
            ev.target.setVolume(75);
            if (pendingPlayRef.current) {
              pendingPlayRef.current = false;
              ev.target.unMute();
              ev.target.playVideo();
            }
          },
          onStateChange: (ev) => {
            const playingState = window.YT?.PlayerState?.PLAYING ?? 1;
            const pausedState = window.YT?.PlayerState?.PAUSED ?? 2;
            if (ev.data === playingState) {
              setIsPlaying(true);
            } else if (ev.data === pausedState) {
              setIsPlaying(false);
            }
          },
        },
      });
    };

    if (window.YT?.Player) {
      initPlayer();
    } else {
      const existingScript = document.querySelector(
        'script[src="https://www.youtube.com/iframe_api"]',
      );
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        script.async = true;
        document.body.appendChild(script);
      }
      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        initPlayer();
      };
    }

    return () => {
      if (playerRef.current) {
        try {
          playerRef.current.destroy();
        } catch {
          // ignore cleanup failure
        }
        playerRef.current = null;
      }
    };
  }, []);

  // Respond to hero "Open Invitation & Play Music" click
  useEffect(() => {
    if (externalPlaySignal <= 0) return;
    setDrawerOpen(true);
    if (playerRef.current && playerReady) {
      playerRef.current.unMute();
      playerRef.current.playVideo();
      setIsPlaying(true);
      setIsMuted(false);
    } else {
      pendingPlayRef.current = true;
    }
  }, [externalPlaySignal, playerReady]);

  const togglePlay = () => {
    if (!playerRef.current || !playerReady) {
      pendingPlayRef.current = true;
      setDrawerOpen(true);
      return;
    }
    if (isPlaying) {
      playerRef.current.pauseVideo();
      setIsPlaying(false);
    } else {
      playerRef.current.unMute();
      playerRef.current.playVideo();
      setIsPlaying(true);
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (!playerRef.current || !playerReady) return;
    if (isMuted) {
      playerRef.current.unMute();
      setIsMuted(false);
    } else {
      playerRef.current.mute();
      setIsMuted(true);
    }
  };

  return (
    <>
      {/* Hidden YouTube Player Container */}
      <div
        className="pointer-events-none fixed -left-[9999px] top-0 h-1 w-1 opacity-0 overflow-hidden"
        aria-hidden="true"
      >
        <div ref={playerMountRef} />
      </div>

      {/* Floating bottom-right music widget matching the video's red speaker button */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-2.5">
        {drawerOpen && (
          <div className="w-[290px] sm:w-[320px] rounded-2xl border border-[#DFD7C4] bg-[#FDFBF5]/95 p-3.5 text-[#1E241E] shadow-[0_14px_34px_rgba(0,0,0,0.22)] backdrop-blur-md">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-xs font-medium text-[#C82333]">
                  <Music className="h-3.5 w-3.5 shrink-0" />
                  <span>{isPlaying ? t.nowPlaying : t.paused}</span>
                  {isPlaying && (
                    <span className="inline-flex items-end gap-0.5 h-3" aria-hidden="true">
                      <span className="w-0.5 h-full bg-[#C82333] animate-eq-1 rounded-full" />
                      <span className="w-0.5 h-full bg-[#C82333] animate-eq-2 rounded-full" />
                      <span className="w-0.5 h-full bg-[#C82333] animate-eq-3 rounded-full" />
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-sm font-bold truncate text-[#1E241E]">
                  {MUSIC_TRACK.title}
                </p>
                <p className="text-xs text-[#5E655D] truncate">{MUSIC_TRACK.artist}</p>
              </div>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Minimize music player"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#6B7268] hover:bg-[#EFEAE0] cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between gap-2 border-t border-[#EFEAE0] pt-2.5">
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause music' : 'Play music'}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C82333] text-white hover:bg-[#A71B29] transition-colors cursor-pointer"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
                </button>
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute music' : 'Mute music'}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#DFD7C4] bg-white text-[#1E241E] hover:bg-[#F3EDE0] transition-colors cursor-pointer"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>
              </div>

              <a
                href={MUSIC_TRACK.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#4D544C] hover:bg-[#EFEAE0] transition-colors whitespace-nowrap"
              >
                <span>{t.listenOnYt}</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* Primary Floating Crimson Speaker Button (exact visual match to video bottom-right) */}
        <div className="flex items-center gap-2">
          {!drawerOpen && !isPlaying && (
            <button
              type="button"
              onClick={() => {
                setDrawerOpen(true);
                togglePlay();
              }}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#DFD7C4] bg-[#FDFBF5]/95 px-3.5 py-2 text-xs font-semibold text-[#1E241E] shadow-md backdrop-blur-sm hover:bg-white transition-colors cursor-pointer"
            >
              <Music className="h-3.5 w-3.5 text-[#C82333]" />
              <span>{t.playPrompt}</span>
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              if (!drawerOpen) setDrawerOpen(true);
              togglePlay();
            }}
            aria-label={isPlaying ? 'Pause wedding music' : 'Play Alfaaz wedding music'}
            className="flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-full bg-[#C82333] text-white shadow-[0_6px_18px_rgba(200,35,51,0.42)] hover:bg-[#A71B29] active:scale-95 transition-transform cursor-pointer"
          >
            {isPlaying && !isMuted ? (
              <Volume2 className="h-5 w-5" />
            ) : (
              <VolumeX className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
