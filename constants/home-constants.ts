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

import mountain_desktop from "@/assets/stories/desktop/mountains.jpg";
import mountain_tab from "@/assets/stories/desktop/mountains.jpg";
import mountain_mobile from "@/assets/stories/mobile/mountains.jpg";

import city_desktop from "@/assets/stories/desktop/cityscapes.jpg";
import city_tab from "@/assets/stories/desktop/cityscapes.jpg";
import city_mobile from "@/assets/stories/mobile/cityscapes.jpg";

import voyage_desktop from "@/assets/stories/desktop/18-days-voyage.jpg";
import voyage_tab from "@/assets/stories/desktop/18-days-voyage.jpg";
import voyage_mobile from "@/assets/stories/mobile/18-days-voyage.jpg";

import architectural_desktop from "@/assets/stories/desktop/architecturals.jpg";
import architectural_tab from "@/assets/stories/desktop/architecturals.jpg";
import architectural_mobile from "@/assets/stories/mobile/architecturals.jpg";

import Responsiveness from "@/components/SVGS/Responsiveness/Responsiveness";
import NoLimit from "@/components/SVGS/NoLimit/NoLimit";
import Embed from "@/components/SVGS/Embed/Embed";

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

export const subStories = [
  {
    id: uuid(),
    title: "The Mountains",
    author: "John Appleseed",
    images: {
      desktop: mountain_desktop,
      tab: mountain_tab,
      mobile: mountain_mobile,
    },
  },
  {
    id: uuid(),
    title: "Sunset Cityscapes",
    author: "Benjamin Cruz",
    images: {
      desktop: city_desktop,
      tab: city_tab,
      mobile: city_mobile,
    },
  },
  {
    id: uuid(),
    title: "18 Days Voyage",
    author: "Alexei Borodin",
    images: {
      desktop: voyage_desktop,
      tab: voyage_tab,
      mobile: voyage_mobile,
    },
  },
  {
    id: uuid(),
    title: "Architecturals",
    author: "Samantha Brooke",
    images: {
      desktop: architectural_desktop,
      tab: architectural_tab,
      mobile: architectural_mobile,
    },
  },
];

export const benefits = [
  {
    id: uuid(),
    icon: Responsiveness,
    title: "100% Responsive",
    description:
      "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.",
  },
  {
    id: uuid(),
    icon: NoLimit,
    title: "No Photo Upload Limit",
    description:
      "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
  },
  {
    id: uuid(),
    icon: Embed,
    title: "Available to Embed",
    description:
      "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
  },
];
