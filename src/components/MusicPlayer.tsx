import { useState, useRef } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";

interface Song {
  title: string;
  artist: string;
  src: string;
}

// Playlist using Google Drive direct links
const playlist: Song[] = [
  {
    title: "Sahiba",
    artist: "Artist 1",
    src: "https://drive.google.com/uc?export=download&id=1cvclsXNcHlAxzsu7vux0YpTYHM_SCJu6"
  },
  {
    title: "Song 2",
    artist: "Artist 2",
    src: "https://drive.google.com/uc?export=download&id=1jc2IxRpY8zPtugTCgw_5wvhZOyviRfme"
  },
  {
    title: "Song 3",
    artist: "Artist 3",
    src: "https://drive.google.com/uc?export=download&id=1Gm8HxuoPbHvXdJ2Q_iH2KhQSw618L3IE"
  },
  // Add more songs here
];

export const MusicPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([70]);
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentSong = playlist[currentSongIndex];

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const playNext = () => {
    setCurrentSongIndex((prev) => (prev + 1) % playlist.length);
    setIsPlaying(true);
  };

  const playPrevious = () => {
    setCurrentSongIndex((prev) => (prev - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  };

  const handleVolumeChange = (value: number[]) => {
    setVolume(value);
    if (audioRef.current) audioRef.current.volume = value[0] / 100;
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div className="bg-card rounded-3xl shadow-2xl p-8 border border-border animate-scale-in">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-playfair font-bold text-foreground mb-2">{currentSong.title}</h3>
          <p className="text-lg font-poppins text-muted-foreground">{currentSong.artist}</p>
        </div>

        <div className="mb-8 max-h-60 overflow-y-auto space-y-2">
          {playlist.map((song, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                index === currentSongIndex ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/70"
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

        <div className="flex items-center justify-center gap-4 mb-6">
          <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full hover:bg-primary/10" onClick={playPrevious}>
            <SkipBack className="w-6 h-6" />
          </Button>

          <Button size="icon" className="w-16 h-16 rounded-full bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 transition-opacity" onClick={togglePlay}>
            {isPlaying ? <Pause className="w-8 h-8" fill="currentColor" /> : <Play className="w-8 h-8" fill="currentColor" />}
          </Button>

          <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full hover:bg-primary/10" onClick={playNext}>
            <SkipForward className="w-6 h-6" />
          </Button>
        </div>

        <div className="flex items-center gap-4">
          <Volume2 className="w-5 h-5 text-muted-foreground" />
          <Slider value={volume} onValueChange={handleVolumeChange} max={100} step={1} className="flex-1" />
        </div>

        <audio ref={audioRef} src={currentSong.src} onEnded={playNext} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} />
      </div>

      <p className="text-center mt-6 text-muted-foreground font-poppins">🎵 Our favorite songs together 🎵</p>
    </div>
  );
};
