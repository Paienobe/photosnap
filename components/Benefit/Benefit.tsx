import React from "react";
import { BenefitProps } from "./types";
import styles from "./Benefit.module.scss";

const Benefit = ({ benefit }: BenefitProps) => {
  const { description, title } = benefit;
  return (
    <div className={styles.benefit}>
      <div className={styles.benefit__svg_holder}>
        <benefit.icon />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Benefit;
