"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./lazy-load.module.scss";
import { LazyLoadProps } from "./lazy-load.type";

export const LazyLoad = ({ children, id }: LazyLoadProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const currentSectionRef = sectionRef.current;

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={isVisible ? styles.visible : styles.hidden}
    >
      {children}
    </section>
  );
};
