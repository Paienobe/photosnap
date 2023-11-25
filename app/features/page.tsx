import Benefit from "@/components/Benefit/Benefit";
import MainStory from "@/components/MainStory/MainStory";
import {
  featuresBenefits,
  featuresStory,
} from "@/constants/features-constants";
import styles from "./page.module.scss";
import React from "react";
import BetaBanner from "@/components/BetaBanner/BetaBanner";

const Features = () => {
  return (
    <section className={styles.features}>
      <MainStory story={featuresStory} isDark />

      <section className={styles.features__benefits}>
        {featuresBenefits.map((benefit) => {
          return <Benefit key={benefit.id} benefit={benefit} />;
        })}
      </section>

      <BetaBanner />
    </section>
  );
};

export default Features;
