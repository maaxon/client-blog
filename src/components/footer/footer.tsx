"use client";

import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import classNames from "classnames";

import { Button } from "@/components/button/button";
import { FormInput } from "@/components/form-input/form-input";
import { IconLink } from "@/components/icon-link/icon-link";
import { NavLink } from "@/components/nav-link/nav-link";
import typography from "@/styles/typography.module.scss";
import { sendEmail } from "@/utils/send-email/sendEmail";
import { zodResolver } from "@hookform/resolvers/zod";
import FacebookIcon from "@public/icons/social-networks/facebook-icon.svg";
import InstagramIcon from "@public/icons/social-networks/instagram-icon.svg";
import LinkedInIcon from "@public/icons/social-networks/linked-in-icon.svg";
import TwitterIcon from "@public/icons/social-networks/twitter-icon.svg";

import { EmailData } from "./footer.config";
import styles from "./footer.module.scss";
import { FooterFormData } from "./footer.type";
import { schema } from "./form-schema";

export const Footer = () => {
  const t = useTranslations("Footer");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FooterFormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: FooterFormData) =>{
    sendEmail({
      name: EmailData.name,
      email: data.email!,
      message: EmailData.message
    })
    setValue("email",undefined)
  }

  return (
    <footer className={styles.footer}>
      <section className={styles.topSection}>
        <h4 className={`${typography.Heading4} ${styles.title}`}>{t("top-title")}</h4>
        <nav className={`${styles.navbar}`}>
          <NavLink href={t("nav.home.href")}>{t("nav.home.title")}</NavLink>
          <NavLink href={t("nav.blog.href")}>{t("nav.blog.title")}</NavLink>
          <NavLink href={t("nav.about-us.href")}>
            {t("nav.about-us.title")}
          </NavLink>
          <NavLink href={t("nav.contact-us.href")}>
            {t("nav.contact-us.title")}
          </NavLink>
          <NavLink href={t("nav.privacy-policy.href")}>
            {t("nav.privacy-policy.title")}
          </NavLink>
        </nav>
      </section>
      <section className={styles.middleSection}>
        <h2 className={classNames(typography.Heading2,styles.title)}>
          {t("middle-title")}
        </h2>
        <form className={styles.inputContainer} onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            {...register("email")}
            className={styles.button}
            type="email"
            placeholder={t("input-placeholder")}
          />
          {!!errors.email && (
            <p className={classNames(typography.body1, styles.error)}>
              {errors.email.message}
            </p>
          )}
          <Button type="submit">{t("button")}</Button>
        </form>
      </section>
      <section className={styles.bottomContainer}>
        <div className={`${styles.textContainer}`}>
          <p className={`${typography.body1} ${styles.text}`}>
            {t("bottom-text-1")}
          </p>
          <p className={`${typography.body1} ${styles.text}`}>
            {t("bottom-text-2")}
          </p>
        </div>
        <div className={styles.socialNetworkContainer}>
          <IconLink
            alt={t("social-links.facebook.alt")}
            href={t("social-links.facebook.href")}
            icon={FacebookIcon}
          />
          <IconLink
            alt={t("social-links.twitter.alt")}
            href={t("social-links.twitter.href")}
            icon={TwitterIcon}
          />
          <IconLink
            alt={t("social-links.instagram.alt")}
            href={t("social-links.instagram.href")}
            icon={InstagramIcon}
          />
          <IconLink
            alt={t("social-links.linkedin.alt")}
            href={t("social-links.linkedin.href")}
            icon={LinkedInIcon}
          />
        </div>
      </section>
    </footer>
  );
};
