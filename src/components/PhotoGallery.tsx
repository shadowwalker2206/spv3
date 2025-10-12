import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface Photo {
  src: string;
  title: string;
}

// Placeholder photos - user will replace with their own
const photos: Photo[] = [
  { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800", title: "Memory 1" },
  { src: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800", title: "Memory 2" },
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800", title: "Memory 3" },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800", title: "Memory 4" },
  { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800", title: "Memory 5" },
  { src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800", title: "Memory 6" },
];

export const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const handlePrevious = () => {
    if (selectedPhoto !== null && selectedPhoto > 0) {
      setSelectedPhoto(selectedPhoto - 1);
    }
  };

  const handleNext = () => {
    if (selectedPhoto !== null && selectedPhoto < photos.length - 1) {
      setSelectedPhoto(selectedPhoto + 1);
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (selectedPhoto === null) return;
    
    if (e.key === "Escape") setSelectedPhoto(null);
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedPhoto(index)}
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-poppins font-semibold text-lg">{photo.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Screen Preview Modal */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in-up"
          onClick={() => setSelectedPhoto(null)}
          onKeyDown={(e: any) => handleKeyDown(e)}
        >
          {/* Close Button - Top Right */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedPhoto(null);
            }}
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Previous Button */}
          {selectedPhoto > 0 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          )}

          {/* Next Button */}
          {selectedPhoto < photos.length - 1 && (
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          )}

          {/* Image */}
          <div className="max-w-7xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].title}
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            />
            <p className="text-white text-center mt-4 text-xl font-poppins">
              {photos[selectedPhoto].title}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
