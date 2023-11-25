import React from "react";
import styles from "./PlanCard.module.scss";
import { PlanCardProps } from "./types";

const PlanCard = ({ plan, isMonthly }: PlanCardProps) => {
  const planCost = isMonthly ? plan.price : plan.price * 10;
  return (
    <div className={styles.plan_card}>
      <h2>{plan.tier}</h2>
      <p>{plan.desription}</p>
      <h1>${planCost.toFixed(2)}</h1>
      <p>per {isMonthly ? "month" : "year"}</p>
      <button>PICK A PLAN</button>
      <div></div>
    </div>
  );
};

export default PlanCard;
