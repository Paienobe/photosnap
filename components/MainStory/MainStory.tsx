import React from "react";
import { MainStoryProps } from "./types";
import styles from "./MainStory.module.scss";
import InviteButton from "../InviteButton/InviteButton";

const MainStory = ({ story, isDark }: MainStoryProps) => {
  return (
    <section className={styles.main_story}>
      <div
        style={{
          backgroundColor: isDark ? "black" : "transparent",
          color: isDark ? "white" : "black",
        }}
      >
        <h1>{story.title}</h1>
        <p>{story.description}</p>
        <InviteButton color={isDark ? "white" : "black"} />
        {isDark && <div className={styles.hr} />}
      </div>

      <div>
        <picture>
          <source media="(max-width:850px)" srcSet={story.images.tab.src} />
          <source media="(max-width:480px)" srcSet={story.images.mobile.src} />
          <img src={story.images.desktop.src} alt="" />
        </picture>
      </div>
    </section>
  );
};

export default MainStory;
