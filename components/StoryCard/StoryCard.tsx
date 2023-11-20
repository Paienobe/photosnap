import React from "react";
import { StoryCardProps } from "./types";
import styles from "./StoryCard.module.scss";
import InviteButton from "../InviteButton/InviteButton";

const StoryCard = ({ story }: StoryCardProps) => {
  return (
    <div className={styles.story_card}>
      <picture>
        <source media="(max-width:850px)" srcSet={story.images.tab.src} />
        <source media="(max-width:480px)" srcSet={story.images.mobile.src} />
        <img src={story.images.desktop.src} alt="" />
      </picture>

      <div className={styles.story_card__text_holder}>
        <div>
          <h2>{story.title}</h2>
          <p>by {story.author}</p>
          <hr />
          <InviteButton color="white" />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default StoryCard;
