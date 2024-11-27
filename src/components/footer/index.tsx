"use client";

import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import cn from "classnames";

import { Button } from "@/components/button";
import { IconLink } from "@/components/icon-link/";
import { NavLink } from "@/components/nav-link";
import { FOOTER_LINK, SOCIAL_LINKS } from "@/constants/links";
import typography from "@/styles/typography.module.scss";
import { sendEmail } from "@/utils/send-email/sendEmail";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "@maaxxon/client-blog-ui-kit";

import { EmailData } from "./config";
import styles from "./style.module.scss";
import { FooterFormData } from "./types";
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

  const onSubmit = (data: FooterFormData) => {
    sendEmail({
      name: EmailData.name,
      email: data.email!,
      message: EmailData.message,
    });
    setValue("email", undefined);
  };

  return (
    <footer className={styles.footer}>
      <section className={styles.topSection}>
        <h4 className={`${typography.heading4} ${styles.title}`}>{t("top-title")}</h4>
        <nav className={`${styles.navbar}`}>
          {FOOTER_LINK.map(({ href, title }, index) =>
            <NavLink key={index} href={t(href)}>
              {t(title)}
            </NavLink>,
          )}
        </nav>
      </section>
      <section className={styles.middleSection}>
        <h2 className={cn(typography.heading2, styles.title)}>
          {t("middle-title")}
        </h2>
        <form className={styles.inputContainer} onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            {...register("email")}
            className={styles.button}
            type="email"
            placeholder={t("input-placeholder")}
            data-testid="footer-email"
          />
          {!!errors.email && (
            <p className={cn(typography.body1, styles.error)} data-testid="footer-error">
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
          {SOCIAL_LINKS.map(({ href, alt, icon }, index) =>
            <IconLink
              key={index}
              alt={t(alt)}
              href={t(href)}
              icon={icon}
            />,
          )}
        </div>
      </section>
    </footer>
  );
};
