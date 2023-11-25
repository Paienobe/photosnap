"use client";

import React, { useState } from "react";
import PlanTrigger from "../PlanTrigger/PlanTrigger";
import styles from "./PricingDisplay.module.scss";
import { plans } from "@/constants/pricing-constants";
import PlanCard from "../PlanCard/PlanCard";

const PricingDisplay = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  return (
    <section className={styles.pricing_display}>
      <PlanTrigger isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
      <section className={styles.pricing_display__cards_holder}>
        {plans.map((plan) => {
          return <PlanCard key={plan.id} plan={plan} isMonthly={isMonthly} />;
        })}
      </section>
    </section>
  );
};

export default PricingDisplay;
