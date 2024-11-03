import { useState } from "react";

export const useSlider = <T extends object>(slides: T) => {
  const length = Object.keys(slides).length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? length - 1 : prevIndex - 1,
    );
  };

  return {
    currentIndex,
    nextSlide,
    prevSlide,
  };
};
