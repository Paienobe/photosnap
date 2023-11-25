import React from "react";
import styles from "./PlanTrigger.module.scss";
import { PlanTriggerProps } from "./types";

const PlanTrigger = ({ isMonthly, setIsMonthly }: PlanTriggerProps) => {
  return (
    <div className={styles.plan_trigger}>
      <h3>Monthly</h3>
      <div
        className={`${styles.plan_trigger__button} ${
          !isMonthly ? styles.plan_trigger__yearly : ""
        }`}
        onClick={() => setIsMonthly(!isMonthly)}
      >
        <div></div>
      </div>
      <h3>Yearly</h3>
    </div>
  );
};

export default PlanTrigger;
