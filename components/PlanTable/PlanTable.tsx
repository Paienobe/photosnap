import React from "react";
import styles from "./PlanTable.module.scss";
import check from "@/assets/pricing/desktop/check.svg";
import Image from "next/image";
import { planFeatures } from "@/constants/pricing-constants";

const PlanTable = () => {
  return (
    <section className={styles.plan_table}>
      <h1>COMPARE</h1>

      <section className={styles.plan_table__head}>
        <div>THE FEATURES</div>
        <div>
          <p>BASIC</p>
          <p>PRO</p>
          <p>BUSINESS</p>
        </div>
      </section>

      {planFeatures.map((feature) => {
        return (
          <section key={feature.title} className={styles.plan_table__body}>
            <div>{feature.title}</div>

            <div>
              <div>
                <span>basic</span>
                {feature.basic && <Image src={check} alt="" />}
              </div>
              <div>
                <span>pro</span> {feature.pro && <Image src={check} alt="" />}
              </div>
              <div>
                <span>business</span>
                {feature.business && <Image src={check} alt="" />}
              </div>
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default PlanTable;
