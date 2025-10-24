import { useState, useRef, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface Photo {
  src: string;
  title: string;
}

// ✅ Use local images from /public/gallery/
const photos: Photo[] = [
  { src: "/gallery/m1.jpg", title: "Memory 1" },
  { src: "/gallery/m2.jpg", title: "Memory 2" },
  { src: "/gallery/m3.jpg", title: "Memory 3" },
  { src: "/gallery/m4.jpg", title: "Memory 4" },
  { src: "/gallery/m5.jpg", title: "Memory 5" },
  { src: "/gallery/m6.jpg", title: "Memory 6" },
  { src: "/gallery/m7.jpg", title: "Memory 7" },
  { src: "/gallery/m8.jpg", title: "Memory 8" },
  { src: "/gallery/m9.jpg", title: "Memory 9" },
  { src: "/gallery/m10.jpg", title: "Memory 10" },
  { src: "/gallery/m11.jpg", title: "Memory 11" },
  { src: "/gallery/m12.jpg", title: "Memory 12" },
  { src: "/gallery/m13.jpg", title: "Memory 13" },
];

export const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhoto === null) return;
      if (e.key === "Escape") setSelectedPhoto(null);
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    if (selectedPhoto !== null) {
      modalRef.current?.focus();
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedPhoto]);

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-black/5"
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setSelectedPhoto(index)}
          >
            {/* ✅ Changed to object-contain to avoid thumbnail cropping */}
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-lg text-center sm:text-left">{photo.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Full Screen Modal */}
      {selectedPhoto !== null && (
        <div
          ref={modalRef}
          tabIndex={-1}
          className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center animate-fade-in-up outline-none p-4"
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

          {/* ✅ Image View - now fully visible, never cropped */}
          <div
            className="relative flex justify-center items-center w-full h-full max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={photos[selectedPhoto].src}
              alt={photos[selectedPhoto].title}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
            />
          </div>

          <p className="text-white text-center mt-4 text-xl font-medium">
            {photos[selectedPhoto].title}
          </p>
        </div>
      )}
    </>
  );
};
