export type BenefitProps = {
  benefit: {
    id: string;
    icon: () => JSX.Element;
    title: string;
    description: string;
  };
  inHome?: boolean;
};
