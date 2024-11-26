import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { IconLink } from "@/components/icon-link";
import { Link } from "@/i18n/routing";
import { getFirstFourAuthors } from "@/services/authors/get-first-four-authors";
import typography from "@/styles/typography.module.scss";
import FacebookIcon from "@public/icons/social-networks/facebook-icon.svg";
import InstagramIcon from "@public/icons/social-networks/instagram-icon.svg";
import LinkedInIcon from "@public/icons/social-networks/linked-in-icon.svg";
import TwitterIcon from "@public/icons/social-networks/twitter-icon.svg";

import styles from "./list-of-authors.module.scss";

export const ListOfAuthors = async () => {
  const t = await getTranslations("ListOfAuthors");

  const authors = getFirstFourAuthors();

  return (
    <div className={styles.container}>
      <h2 className={typography.heading2}>{t("title")}</h2>
      <div className={styles.list}>
        {authors.map(
          ({
            avatar,
            id,
            name,
            description,
            facebook,
            instagram,
            linkedin,
            twitter,
          }) => (
            <Link key={id} className={styles.card} href={`/author/${id}`}>
              <div className={styles.avatarWrapper}>
                <Image
                  src={avatar.src}
                  alt={avatar.alt}
                  className={styles.avatar}
                  fill
                />
              </div>
              <div className={styles.text}>
                <h3 className={typography.heading3}>{name}</h3>
                <p className={`${typography.body2} ${styles.description}`}>
                  {description}
                </p>
              </div>
              <div className={styles.socials}>
                {facebook && (
                  <IconLink
                    icon={FacebookIcon}
                    alt={`${name}'s facebook icon`}
                    href={facebook}
                  />
                )}
                {twitter && (
                  <IconLink
                    icon={TwitterIcon}
                    alt={`${name}'s twitter icon`}
                    href={twitter}
                  />
                )}
                {instagram && (
                  <IconLink
                    icon={InstagramIcon}
                    alt={`${name}'s instagram icon`}
                    href={instagram}
                  />
                )}
                {linkedin && (
                  <IconLink
                    icon={LinkedInIcon}
                    alt={`${name}'s linked in icon`}
                    href={linkedin}
                  />
                )}
              </div>
            </Link>
          ),
        )}
      </div>
    </div>
  );
};
