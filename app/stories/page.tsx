import StoriesBanner from "@/components/StoriesBanner/StoriesBanner";
import StoryCard from "@/components/StoryCard/StoryCard";
import { stories } from "@/constants/stories-constants";
import styles from "./page.module.scss";
import React from "react";

const Stories = () => {
  return (
    <div className={styles.stories}>
      <StoriesBanner />
      <section className={styles.stories__container}>
        {stories.map((story) => {
          return <StoryCard key={story.id} story={story} />;
        })}
      </section>
    </div>
  );
};

export default Stories;
