import styles from "./page.module.scss";
import { mainStories } from "@/constants.ts/home-constants";
import MainStory from "@/components/MainStory/MainStory";

export default function Home() {
  return (
    <main className={styles.main}>
      {mainStories.map((story, index) => {
        return <MainStory key={story.id} isDark={index == 0} story={story} />;
      })}
    </main>
  );
}
