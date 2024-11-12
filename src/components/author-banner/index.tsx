import Image from "next/image";
import classNames from "classnames";

import { IconLink } from "@/components/icon-link/";
import { getAuthorById } from "@/services/authors/get-author-by-id";
import typography from "@/styles/typography.module.scss";
import FacebookIcon from "@public/icons/social-networks/facebook-icon.svg";
import InstagramIcon from "@public/icons/social-networks/instagram-icon.svg";
import LinkedInIcon from "@public/icons/social-networks/linked-in-icon.svg";
import TwitterIcon from "@public/icons/social-networks/twitter-icon.svg";

import styles from "./author-banner.module.scss";
import { AuthorBannerProps } from "./author-banner.type";

export const AuthorBanner = async ({ id }: AuthorBannerProps) => {
  const author = await getAuthorById(id);

  return (
    <div className={styles.container}>
      <div className={styles.avatarWrapper}>
        <Image
          src={author.avatar.src}
          alt={author.avatar.alt}
          className={styles.image}
          fill
        />
      </div>
      <div className={styles.content}>
        <h1 className={typography.Heading1}>{author.page.title}</h1>
        <p className={classNames(typography.body1, styles.description)}>
          {author.page.description}
        </p>
        <div className={styles.socials}>
          {!!author.facebook && (
            <IconLink
              icon={FacebookIcon}
              alt={`${author.name}'s facebook icon`}
              href={author.facebook}
            />
          )}
          {!!author.twitter && (
            <IconLink
              icon={TwitterIcon}
              alt={`${author.name}'s twitter icon`}
              href={author.twitter}
            />
          )}
          {!!author.instagram && (
            <IconLink
              icon={InstagramIcon}
              alt={`${author.name}'s instagram icon`}
              href={author.instagram}
            />
          )}
          {!!author.linkedin && (
            <IconLink
              icon={LinkedInIcon}
              alt={`${author.name}'s linked in icon`}
              href={author.linkedin}
            />
          )}
        </div>
      </div>
      <div className={styles.topBar}>
        <div className={styles.yellowBar} />
        <div className={styles.purpleBar} />
      </div>
    </div>
  );
};
