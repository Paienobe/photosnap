import MainStory from "@/components/MainStory/MainStory";
import PlanTable from "@/components/PlanTable/PlanTable";
import PricingDisplay from "@/components/PricingDisplay/PricingDisplay";
import { pricingStory } from "@/constants/pricing-constants";
import React from "react";

const Pricing = () => {
  return (
    <section>
      <MainStory story={pricingStory} isDark />
      <PricingDisplay />
      <PlanTable />
    </section>
  );
};

export default Pricing;
