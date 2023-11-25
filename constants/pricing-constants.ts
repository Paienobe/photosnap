import { v4 as uuid } from "uuid";

import story_1_desktop from "@/assets/pricing/desktop/hero.jpg";
import story_1_tab from "@/assets/pricing/tablet/hero.jpg";
import story_1_mobile from "@/assets/pricing/mobile/hero.jpg";

export const pricingStory = {
  id: uuid(),
  title: "PRICING",
  description:
    "Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.",
  images: {
    desktop: story_1_desktop,
    tab: story_1_tab,
    mobile: story_1_mobile,
  },
};

export const plans = [
  {
    id: uuid(),
    tier: "Basic",
    desription:
      "Includes basic usage of our platform. Recommended for new and aspiring photographers.",
    price: 19,
  },
  {
    id: uuid(),
    tier: "Pro",
    desription:
      "More advanced features available. Recommended for photography veterans and professionals.",
    price: 39,
  },
  {
    id: uuid(),
    tier: "Business",
    desription:
      "Additional features available such as more detailed metrics. Recommended for business owners.",
    price: 99,
  },
];

export const planFeatures = [
  { title: "UNLIMITED STORY POSTING", basic: true, pro: true, business: true },
  { title: "UNLIMITED PHOTO UPLOAD", basic: true, pro: true, business: true },
  {
    title: "EMBEDDING CUSTOM CONTENT",
    basic: false,
    pro: true,
    business: true,
  },
  { title: "CUSTOMIZE METADATA", basic: false, pro: true, business: true },
  {
    title: "ADVANCED METRICS",
    basic: false,
    pro: false,
    business: true,
  },
  {
    title: "PHOTO DOWNLOADS",
    basic: false,
    pro: false,
    business: true,
  },
  {
    title: "SEARCH ENGINE INDEXING",
    basic: false,
    pro: false,
    business: true,
  },
  {
    title: "CUSTOM ANALYTICS",
    basic: false,
    pro: false,
    business: true,
  },
];
