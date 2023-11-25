export type PlanCardProps = {
  plan: {
    id: string;
    tier: string;
    desription: string;
    price: number;
  };
  isMonthly: boolean;
};
