"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

import { testimonials } from "@/constants/testimonials.constant";
import { useSlider } from "@/hooks/use-slider/use-slider";
import typography from "@/styles/typography.module.scss";

import styles from "./testimonials-banner.module.scss";

const NEXT_SYMBOL = String.fromCharCode(8594);
const PREV_SYMBOL = String.fromCharCode(8592);

export const TestimonialsBanner = () => {
  const { currentIndex, nextSlide, prevSlide } = useSlider(testimonials);
  const t = useTranslations("Testimonials");

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className={typography.cap}>{t("header")}</p>
        <h2 className={typography.Heading2}>{t("title")}</h2>
        <p className={typography.body1}>{t("description")}</p>
      </div>
      <div className={styles.carousel}>
        <div className={styles.slides} data-index={currentIndex}>
          {Object.entries(testimonials).map(([testimonial, { avatar }]) => (
            <div key={testimonial} className={styles.slide}>
              <p className={typography.Heading4}>{t(`${testimonial}.text`)}</p>

              <div className={styles.userInfo}>
                <div className={styles.avatarWrapper}>
                  <Image
                    src={avatar}
                    alt={t(`${testimonial}.avatar.alt`)}
                    className={styles.avatar}
                    fill
                  />
                </div>
                <div>
                  <h3 className={typography.Heading4}>
                    {t(`${testimonial}.name`)}
                  </h3>
                  <p className={`${typography.body1} ${styles.location}`}>
                    {t(`${testimonial}.location`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.controls}>
          <button
            className={`${styles.controlBtn} ${styles.prevBtn}`}
            onClick={prevSlide}
          >
            {PREV_SYMBOL}
          </button>
          <button
            className={`${styles.nextBtn} ${styles.controlBtn}`}
            onClick={nextSlide}
          >
            {NEXT_SYMBOL}
          </button>
        </div>
      </div>
    </div>
  );
};
