import Image from "next/image";
import { getTranslations } from "next-intl/server";
import cn from "classnames";

import { JoinOurTeamBanner } from "@/components/join-our-team-banner";
import { ListOfAuthors } from "@/components/list-of-authors";
import typography from "@/styles/typography.module.scss";
import PurpleShape from "@public/icons/shapes/purple-shape.svg";
import YellowShape from "@public/icons/shapes/yellow-shape.svg";
import ContentImage1 from "@public/images/about-us-1-image.png";
import ContentImage2 from "@public/images/about-us-2-image.png";
import BannerImage from "@public/images/why-we-started-image.png";

import styles from "./page.module.scss";

export default async function AboutUs() {
  const t = await getTranslations("AboutUsPage");

  return (
    <div className={styles.page}>
      <div className={styles.bannerContainer}>
        <div className={styles.bannerTop}>
          <div className={styles.bannerTopHeader}>
            <p className={typography.cap3}>{t("banner.header.heading")}</p>
            <h1 className={typography.heading1}>{t("banner.header.title")}</h1>
          </div>
          <div className={styles.bannerTopDescription}>
            <p className={cn(styles.body1, styles.bannerDescription)}>
              {t("banner.header.description")}
            </p>
          </div>
        </div>
        <div className={styles.banner}>
          <div className={styles.overview}>
            <Image
              className={styles.image}
              src={BannerImage}
              alt="Banner image"
              fill
            />
            <div className={styles.statistics}>
              <div className={styles.statisticsItem}>
                <h1 className={typography.display}>12+</h1>
                <p className={typography.body1}>
                  {t("statistics.blogsPublished")}
                </p>
              </div>
              <div className={styles.statisticsItem}>
                <h1 className={typography.display}>18K+</h1>
                <p className={typography.body1}>
                  {t("statistics.viewsOnFinsweet")}
                </p>
              </div>
              <div className={styles.statisticsItem}>
                <h1 className={typography.display}>30K+</h1>
                <p className={typography.body1}>
                  {t("statistics.totalActiveUsers")}
                </p>
              </div>
            </div>
            <div className={styles.topBar}>
              <div className={styles.purpleBar} />
              <div className={styles.yellowBar} />
            </div>
          </div>
          <div className={styles.missionVision}>
            <div className={`${styles.bannerSection}`}>
              <p className={`${typography.cap} ${styles.bannerHeading}`}>
                {t("missionVision.mission.heading")}
              </p>
              <h2 className={`${typography.heading2}`}>
                {t("missionVision.mission.title")}
              </h2>
              <p className={`${typography.body1} ${styles.bannerDescription}`}>
                {t("missionVision.mission.description")}
              </p>
            </div>

            <div className={`${styles.bannerSection}`}>
              <p className={`${typography.cap} ${styles.bannerHeading}`}>
                {t("missionVision.vision.heading")}
              </p>
              <h3 className={`${typography.heading3}`}>
                {t("missionVision.vision.title")}
              </h3>
              <p className={`${typography.body1} ${styles.bannerDescription}`}>
                {t("missionVision.vision.description")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentDescription}>
          <h2 className={typography.heading2}>{t("content.ourTeamTitle")}</h2>
          <h4 className={typography.heading4}>
            {t("content.ourTeamSubtitle")}
          </h4>
          <p className={typography.body1}>{t("content.ourTeamDescription")}</p>
        </div>
        <div className={styles.contentImageWrapper}>
          <Image
            src={ContentImage1}
            alt="Content image 1"
            className={styles.contentImage}
            fill
          />
          <Image
            src={YellowShape}
            alt="Yellow shape"
            className={styles.yellowShape}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentImageWrapper}>
          <Image
            src={ContentImage2}
            alt="Content image 2"
            className={styles.contentImage}
            fill
          />
          <Image
            src={PurpleShape}
            alt="Purple shape"
            className={styles.purpleShape}
          />
        </div>
        <div className={styles.contentDescription}>
          <h2 className={typography.heading2}>
            {t("content.whyWeStartedTitle")}
          </h2>
          <h4 className={typography.heading4}>
            {t("content.whyWeStartedSubtitle")}
          </h4>
          <p className={typography.body1}>
            {t("content.whyWeStartedDescription")}
          </p>
        </div>
      </div>
      <ListOfAuthors />
      <JoinOurTeamBanner />
    </div>
  );
}
