declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: {
      Player: new (
        elementId: string | HTMLElement,
        config: {
          height?: string | number;
          width?: string | number;
          videoId?: string;
          playerVars?: Record<string, unknown>;
          events?: {
            onReady?: (event: { target: YTPlayerInstance }) => void;
            onStateChange?: (event: { data: number; target: YTPlayerInstance }) => void;
            onError?: (event: { data: number }) => void;
          };
        }
      ) => YTPlayerInstance;
      PlayerState?: {
        UNSTARTED: number;
        ENDED: number;
        PLAYING: number;
        PAUSED: number;
        BUFFERING: number;
        CUED: number;
      };
    };
  }
}

export interface YTPlayerInstance {
  playVideo: () => void;
  pauseVideo: () => void;
  stopVideo: () => void;
  mute: () => void;
  unMute: () => void;
  isMuted: () => boolean;
  setVolume: (volume: number) => void;
  getVolume: () => number;
  getPlayerState: () => number;
  destroy: () => void;
  getVideoData?: () => { title?: string; author?: string; video_id?: string };
}

type AudioListener = (isPlaying: boolean, isMuted: boolean, volume: number, title?: string) => void;

class YouTubeAudioEngine {
  public readonly videoId: string = '6jSLH9CDPPQ';
  private player: YTPlayerInstance | null = null;
  private isReady: boolean = false;
  private isPlayingState: boolean = false;
  private isMutedState: boolean = false;
  private volumeState: number = 80;
  private listeners: Set<AudioListener> = new Set();
  private pendingPlay: boolean = false;
  private videoTitle: string = 'Our Song';

  constructor() {
    if (typeof window !== 'undefined') {
      this.loadYouTubeAPI();
    }
  }

  private loadYouTubeAPI() {
    if (window.YT && window.YT.Player) {
      this.initPlayer();
      return;
    }

    const prevCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      if (prevCallback) prevCallback();
      this.initPlayer();
    };

    if (!document.getElementById('youtube-iframe-api')) {
      const tag = document.createElement('script');
      tag.id = 'youtube-iframe-api';
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    }
  }

  public initPlayer(containerId: string = 'youtube-audio-container') {
    if (this.player || !window.YT || !window.YT.Player) return;

    let container = document.getElementById(containerId);
    if (!container) {
      container = document.createElement('div');
      container.id = containerId;
      container.style.position = 'fixed';
      container.style.bottom = '-9999px';
      container.style.right = '-9999px';
      container.style.width = '1px';
      container.style.height = '1px';
      container.style.opacity = '0';
      container.style.pointerEvents = 'none';
      document.body.appendChild(container);
    }

    try {
      this.player = new window.YT.Player(containerId, {
        height: '200',
        width: '200',
        videoId: this.videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          loop: 1,
          playlist: this.videoId,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
        },
        events: {
          onReady: (event) => {
            this.isReady = true;
            this.player = event.target;
            this.player.setVolume(this.volumeState);
            try {
              const data = this.player.getVideoData?.();
              if (data?.title) {
                this.videoTitle = data.title;
              }
            } catch {
              // Ignore video data retrieval error
            }

            if (this.pendingPlay) {
              this.pendingPlay = false;
              this.play();
            }
            this.notify();
          },
          onStateChange: (event) => {
            // YT.PlayerState.PLAYING = 1, PAUSED = 2, ENDED = 0
            if (event.data === 1) {
              this.isPlayingState = true;
            } else if (event.data === 2 || event.data === 0) {
              this.isPlayingState = false;
            }
            this.notify();
          },
          onError: () => {
            this.isPlayingState = false;
            this.notify();
          }
        },
      });
    } catch {
      // Ignore initial setup error
    }
  }

  public play() {
    if (!this.player || !this.isReady) {
      this.pendingPlay = true;
      this.initPlayer();
      return;
    }
    try {
      this.player.playVideo();
      this.isPlayingState = true;
      this.notify();
    } catch {
      // Fallback handling
    }
  }

  public pause() {
    if (this.player && this.isReady) {
      try {
        this.player.pauseVideo();
        this.isPlayingState = false;
        this.notify();
      } catch {
        // Safe catch
      }
    }
  }

  public togglePlay() {
    if (this.isPlayingState) {
      this.pause();
    } else {
      this.play();
    }
  }

  public mute() {
    if (this.player && this.isReady) {
      this.player.mute();
      this.isMutedState = true;
      this.notify();
    }
  }

  public unMute() {
    if (this.player && this.isReady) {
      this.player.unMute();
      this.isMutedState = false;
      this.notify();
    }
  }

  public toggleMute() {
    if (this.isMutedState) {
      this.unMute();
    } else {
      this.mute();
    }
  }

  public setVolume(volume: number) {
    this.volumeState = volume;
    if (this.player && this.isReady) {
      this.player.setVolume(volume);
      this.notify();
    }
  }

  public subscribe(listener: AudioListener): () => void {
    this.listeners.add(listener);
    listener(this.isPlayingState, this.isMutedState, this.volumeState, this.videoTitle);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((listener) => {
      try {
        listener(this.isPlayingState, this.isMutedState, this.volumeState, this.videoTitle);
      } catch {
        // Safe catch
      }
    });
  }

  public getIsPlaying(): boolean {
    return this.isPlayingState;
  }

  public getIsMuted(): boolean {
    return this.isMutedState;
  }

  public getTitle(): string {
    return this.videoTitle;
  }
}

export const youtubeAudioEngine = new YouTubeAudioEngine();
