import React from "react";
import styles from "./StoriesBanner.module.scss";
import bannerDesktop from "@/assets/stories/desktop/moon-of-appalacia.jpg";
import bannerTab from "@/assets/stories/tablet/moon-of-appalacia.jpg";
import bannerMobile from "@/assets/stories/mobile/moon-of-appalacia.jpg";
import InviteButton from "../InviteButton/InviteButton";

const StoriesBanner = () => {
  return (
    <section className={styles.stories_banner}>
      <picture>
        <source media="(max-width:850px)" srcSet={bannerTab.src} />
        <source media="(max-width:480px)" srcSet={bannerMobile.src} />
        <img src={bannerDesktop.src} alt="" />
      </picture>

      <div>
        <h3>last month's featured story</h3>
        <h1>Hazy full moon of Appalachia</h1>
        <p className={styles.stories_banner__author}>
          <time>March 2nd 2021</time> by John Appleseed
        </p>
        <p>
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called "mountains," especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </p>
        <InviteButton color="white" text="READ THE STORY" />
      </div>
    </section>
  );
};

export default StoriesBanner;
