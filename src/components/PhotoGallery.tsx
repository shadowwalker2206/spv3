import { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface Photo {
  src: string;
  title: string;
}

// 1. Corrected image paths
const photos: Photo[] = [
  { src: "/m1.jpg", title: "Memory 1" },
  { src: "/m2.jpg", title: "Memory 2" },
  { src: "/m3.jpg", title: "Memory 3" },
  { src: "/m4.jpg", title: "Memory 4" },
  { src: "/m5.jpg", title: "Memory 5" },
  { src: "/m6.jpg", title: "Memory 6" },
  { src: "/m7.jpg", title: "Memory 7" },
  { src: "/m8.jpg", title: "Memory 8" },
  { src: "/m9.jpg", title: "Memory 9" },
  { src: "/m10.jpg", title: "Memory 10" },
  { src: "/m11.jpg", title: "Memory 11" },
  { src: "/m12.jpg", title: "Memory 12" },
  { src: "/m13.jpg", title: "Memory 13" },
];

export const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null); // Ref for the modal

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

  // 4. Improved keyboard event handling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhoto === null) return;
      if (e.key === "Escape") setSelectedPhoto(null);
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    if (selectedPhoto !== null) {
      // Focus the modal when it opens
      modalRef.current?.focus();
      window.addEventListener("keydown", handleKeyDown);
    }

    // Cleanup listener
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPhoto]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            // 2. Fixed grid cropping
            className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-scale-in bg-black/5"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedPhoto(index)}
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" // Changed to object-contain
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
          ref={modalRef}
          tabIndex={-1} // Make the div focusable
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in-up outline-none"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Close Button */}
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

          {/* Image Container */}
          <div className="relative max-w-4xl w-full max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
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