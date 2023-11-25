import styles from "./page.module.scss";
import { mainStories, subStories, benefits } from "@/constants/home-constants";
import MainStory from "@/components/MainStory/MainStory";
import StoryCard from "@/components/StoryCard/StoryCard";
import Benefit from "@/components/Benefit/Benefit";

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

      <section className={styles.main__benefits_section}>
        {benefits.map((benefit) => {
          return <Benefit key={benefit.id} benefit={benefit} inHome />;
        })}
      </section>
    </main>
  );
}
