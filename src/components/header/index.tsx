"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import cn from "classnames";

import { Button } from "@/components/button/";
import { LANGUAGES } from "@/components/header/config";
import { Modal } from "@/components/modal";
import { NavLink } from "@/components/nav-link";
import { HEADER_LINKS } from "@/constants/links";
import { useModalOpen } from "@/hooks/use-modal-open/use-modal-open";
import { usePathname, useRouter } from "@/i18n/routing";
import { Link } from "@/i18n/routing";
import typography from "@/styles/typography.module.scss";

import { Video } from "./video/video";
import styles from "./style.module.scss";

export const Header = () => {
  const { isModalOpen, handleModalOpen, handleModalClose } = useModalOpen();
  const [isBurgerOpen, setBurgerOpen] = useState(false);
  const t = useTranslations("Header");

  const handleBurgerToggle = () => {
    setBurgerOpen(!isBurgerOpen);
  };

  const pathname = usePathname();
  const router = useRouter();
  const changeLanguage = (language: string) => () => {
    router.replace(pathname, { locale: language });
  };

  return (
    <header className={styles.header}>
      <Link href={"/"}>
        <h4 className={cn(typography.heading4, styles.title)}>{t("title")}</h4>
      </Link>

      <div className={styles.languages}>
        {LANGUAGES.map(lang => <span key={lang}
                                     className={cn({ [styles.active]: pathname.includes(lang) })}
                                     onClick={changeLanguage(lang)}>{lang}</span>)}
      </div>

      <nav className={cn(styles.navbar, { [styles.open]: isBurgerOpen })}>
        {HEADER_LINKS.map(({ href, title }, index) =>
          <NavLink key={index} href={t(href)}>
            {t(title)}
          </NavLink>)}
      </nav>
      <div className={styles.burger} onClick={handleBurgerToggle}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </div>
      <Button className={styles.button} onClick={handleModalOpen}>
        {t("video-about-us-button")}
      </Button>
      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <Video />
        </Modal>
      )}
    </header>
  );
};
