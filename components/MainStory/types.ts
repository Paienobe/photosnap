import { StaticImageData } from "next/image";

export type MainStoryProps = {
  isDark: boolean;
  story: {
    id: string;
    title: string;
    description: string;
    images: {
      desktop: StaticImageData;
      tab: StaticImageData;
      mobile: StaticImageData;
    };
  };
};
