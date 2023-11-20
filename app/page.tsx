import styles from "./page.module.scss";
import { mainStories, subStories } from "@/constants.ts/home-constants";
import MainStory from "@/components/MainStory/MainStory";
import StoryCard from "@/components/StoryCard/StoryCard";

export default function Home() {
  return (
    <main className={styles.main}>
      {mainStories.map((story, index) => {
        return <MainStory key={story.id} isDark={index == 0} story={story} />;
      })}

      <section className={styles.main__cards_holder}>
        {subStories.map((story) => {
          return <StoryCard key={story.id} story={story} />;
        })}
      </section>
    </main>
  );
}
