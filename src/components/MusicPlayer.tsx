import { useState, useRef, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";

interface Song {
  title: string;
  artist: string;
  src: string;
}

// ✅ Local songs (put inside /public folder)
const playlist: Song[] = [
  { title: "Sahiba", artist: "Artist 1", src: "/Sahiba.mp3" },
  { title: "Tum Ho Toh", artist: "Artist 2", src: "/tum ho toh.mp3" },
  { title: "Preet Re", artist: "Artist 3", src: "/preet re.mp3" },
];

export const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([70]);
  const [duration, setDuration] = useState(0);
  const [playback, setPlayback] = useState([0]);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = playlist[currentSongIndex];

  // 🟢 Toggle Play / Pause
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // ⏭ Next Song
  const playNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
  };

  // ⏮ Previous Song
  const playPrevious = () => {
    setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  // 🔊 Volume Control
  const handleVolumeChange = (value: number[]) => {
    setVolume(value);
    if (audioRef.current) audioRef.current.volume = value[0] / 100;
  };

  // 🪄 Automatically play when song changes
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.load(); // reset audio
      if (isPlaying) {
        audio.play().catch(() => setIsPlaying(false)); // in case autoplay blocked
      }
    }
  }, [currentSongIndex, isPlaying]);

  // 🪄 Keep volume in sync on mount
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume[0] / 100;
    }
  }, [volume]);

  // 🪄 Auto play next song when current ends
  const handleSongEnd = () => {
    playNext();
    setIsPlaying(true);
  };

  // Update duration when metadata loads
  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (audio) {
      setDuration(Math.floor(audio.duration) || 0);
      setPlayback([Math.floor(audio.currentTime) || 0]);
    }
  };

  // Update playback position as audio plays
  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    if (audio) {
      setPlayback([Math.floor(audio.currentTime)]);
    }
  };

  // Seeking from the slider
  const handleSeek = (value: number[]) => {
    setPlayback(value);
    const audio = audioRef.current;
    if (audio) {
      // value[0] is in seconds
      audio.currentTime = value[0];
    }
  };

  const formatTime = (secs: number) => {
    if (!Number.isFinite(secs) || secs <= 0) return "0:00";
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="bg-card rounded-3xl shadow-2xl p-8 border border-border animate-scale-in">
        {/* Current Song Info */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-playfair font-bold text-foreground mb-2">{currentSong.title}</h3>
          <p className="text-lg font-poppins text-muted-foreground">{currentSong.artist}</p>
        </div>

        {/* Playlist */}
        <div className="mb-8 max-h-60 overflow-y-auto space-y-2">
          {playlist.map((song, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                index === currentSongIndex
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/70"
              }`}
              onClick={() => {
                setCurrentSongIndex(index);
                setIsPlaying(true);
              }}
            >
              <p className="font-poppins font-medium">{song.title}</p>
              <p className="font-poppins text-sm opacity-80">{song.artist}</p>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-full hover:bg-primary/10"
            onClick={playPrevious}
          >
            <SkipBack className="w-6 h-6" />
          </Button>

          <Button
            size="icon"
            className="w-16 h-16 rounded-full bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 transition-opacity"
            onClick={togglePlay}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8" fill="currentColor" />
            ) : (
              <Play className="w-8 h-8" fill="currentColor" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-12 h-12 rounded-full hover:bg-primary/10"
            onClick={playNext}
          >
            <SkipForward className="w-6 h-6" />
          </Button>
        </div>

        {/* Playback progress */}
        <div className="mb-4">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-sm text-muted-foreground">{formatTime(playback[0])}</span>
            <Slider
              value={playback}
              onValueChange={handleSeek}
              min={0}
              max={Math.max(duration, 0)}
              step={1}
              className="flex-1"
            />
            <span className="text-sm text-muted-foreground">{formatTime(duration)}</span>
          </div>
        </div>

        {/* Volume */}
        <div className="flex items-center gap-4">
          <Volume2 className="w-5 h-5 text-muted-foreground" />
          <Slider
            value={volume}
            onValueChange={handleVolumeChange}
            max={100}
            step={1}
            className="flex-1"
          />
        </div>

        {/* Hidden Audio Element */}
        <audio
          ref={audioRef}
          src={currentSong.src}
          onEnded={handleSongEnd}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
        />
      </div>

      <p className="text-center mt-6 text-muted-foreground font-poppins">
        🎵 Our favorite songs together 🎵
      </p>
    </div>
  );
};
