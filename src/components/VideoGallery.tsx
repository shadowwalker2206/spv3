import { useState } from "react";
import { Play, X } from "lucide-react";
import { Button } from "./ui/button";

interface Video {
  src: string;
  title: string;
  thumbnail?: string;
}

// Placeholder videos - user will replace with their own videos
const videos: Video[] = [
  { src: "/videos/video1.mp4", title: "Special Moment 1" },
  { src: "/videos/video2.mp4", title: "Special Moment 2" },
  { src: "/videos/video3.mp4", title: "Special Moment 3" },
];

export const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="group relative aspect-video overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-muted animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedVideo(index)}
          >
            {/* Thumbnail - will show video poster or placeholder */}
            <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
              <Play className="w-16 h-16 text-white drop-shadow-lg transform transition-transform group-hover:scale-110" />
            </div>

            {/* Title Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-poppins font-semibold text-lg">
                  {video.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Player Modal */}
      {selectedVideo !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in-up"
          onClick={() => setSelectedVideo(null)}
        >
          {/* Close Button - Top Right */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedVideo(null);
            }}
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Video Player */}
          <div className="max-w-6xl w-full px-4" onClick={(e) => e.stopPropagation()}>
            <video
              src={videos[selectedVideo].src}
              controls
              autoPlay
              className="w-full rounded-xl shadow-2xl"
            >
              Your browser does not support the video tag.
            </video>
            <p className="text-white text-center mt-4 text-xl font-poppins">
              {videos[selectedVideo].title}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
