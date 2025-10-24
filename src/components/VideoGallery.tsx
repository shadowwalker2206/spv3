import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { Button } from "./ui/button";

interface Video {
  src: string;
  title: string;
  thumbnail: string;
}

const videos: Video[] = [
  { src: "/v1.mp4", title: "Special Moment 1", thumbnail: "/v1.jpg" },
  { src: "/v2.mp4", title: "Special Moment 2", thumbnail: "/v2.jpg" },
  { src: "/v3.mp4", title: "Special Moment 3", thumbnail: "/v3.jpg" },
  { src: "/v4.mp4", title: "Special Moment 4", thumbnail: "/v4.jpg" },
  { src: "/v5.mp4", title: "Special Moment 5", thumbnail: "/v5.jpg" },
  { src: "/v6.mp4", title: "Special Moment 6", thumbnail: "/v6.jpg" },
  { src: "/v7.mp4", title: "Special Moment 7", thumbnail: "/v7.jpg" },
  { src: "/v8.mp4", title: "Special Moment 8", thumbnail: "/v8.jpg" },
  { src: "/v9.mp4", title: "Special Moment 9", thumbnail: "/v9.jpg" },
  { src: "/v10.mp4", title: "Special Moment 10", thumbnail: "/v10.jpg" },
  { src: "/v11.mp4", title: "Special Moment 11", thumbnail: "/v11.jpg" },
  { src: "/v12.mp4", title: "Special Moment 12", thumbnail: "/v12.jpg" },
];

export const VideoGallery = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  return (
    <React.Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="group relative aspect-video overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-black animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedVideo(index)}
          >
            {/* Thumbnail Image - FIX APPLIED HERE */}
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" // Changed to object-contain
              loading="lazy"
            />

            {/* Play Icon Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/50">
              <Play className="w-16 h-16 text-white/80 drop-shadow-lg transform transition-transform group-hover:scale-110" />
            </div>

            {/* Title Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
          {/* Close Button */}
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
          <div
            className="max-w-6xl w-full px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={videos[selectedVideo].src}
              controls
              autoPlay
              className="w-full rounded-xl shadow-2xl max-h-[85vh]"
            >
              Your browser does not support the video tag.
            </video>
            <p className="text-white text-center mt-4 text-xl font-poppins">
              {videos[selectedVideo].title}
            </p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};