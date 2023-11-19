import { v4 as uuid } from "uuid";

import story_1_desktop from "@/assets/home/desktop/create-and-share.jpg";
import story_2_desktop from "@/assets/home/desktop/beautiful-stories.jpg";
import story_3_desktop from "@/assets/home/desktop/designed-for-everyone.jpg";

import story_1_tab from "@/assets/home/tablet/create-and-share.jpg";
import story_2_tab from "@/assets/home/tablet/beautiful-stories.jpg";
import story_3_tab from "@/assets/home/tablet/designed-for-everyone.jpg";

import story_1_mobile from "@/assets/home/mobile/create-and-share.jpg";
import story_2_mobile from "@/assets/home/mobile/beautiful-stories.jpg";
import story_3_mobile from "@/assets/home/mobile/designed-for-everyone.jpg";

export const mainStories = [
  {
    id: uuid(),
    title: "CREATE AND SHARE YOUR PHOTO STORIES.",
    description:
      "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    images: {
      desktop: story_1_desktop,
      tab: story_1_tab,
      mobile: story_1_mobile,
    },
  },
  {
    id: uuid(),
    title: "BEAUTIFUL STORIES EVERY TIME",
    description:
      "We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
    images: {
      desktop: story_2_desktop,
      tab: story_2_tab,
      mobile: story_2_mobile,
    },
  },
  {
    id: uuid(),
    title: "DESIGNED FOR EVERYONE.",
    description:
      "Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.",
    images: {
      desktop: story_3_desktop,
      tab: story_3_tab,
      mobile: story_3_mobile,
    },
  },
];
