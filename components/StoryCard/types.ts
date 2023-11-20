import { StaticImageData } from "next/image";

export type StoryCardProps = {
  story: {
    id: string;
    title: string;
    author: string;
    images: {
      desktop: StaticImageData;
      tab: StaticImageData;
      mobile: StaticImageData;
    };
  };
};
