import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ImageSliderProps {
  images: string[];
  title?: string;
  autoPlay?: boolean;
  interval?: number;
}

export default function ImageSlider({
  images,
  title,
  autoPlay = true,
  interval = 5000,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden rounded-lg group">
      {/* Main Image Container */}
      <div className="relative w-full h-96 md:h-[500px] overflow-hidden bg-gray-900">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Title Overlay */}
        {title && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h3 className="text-3xl font-bold" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                {title}
              </h3>
            </div>
          </div>
        )}

        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-accent/80 hover:bg-accent text-accent-foreground p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-accent/80 hover:bg-accent text-accent-foreground p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 py-4 bg-card">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-accent w-8"
                : "bg-gray-500 hover:bg-gray-400 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
