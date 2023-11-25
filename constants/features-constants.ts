import { v4 as uuid } from "uuid";
import story_1_desktop from "@/assets/features/desktop/hero.jpg";
import story_1_tab from "@/assets/features/tablet/hero.jpg";
import story_1_mobile from "@/assets/features/mobile/hero.jpg";

import Responsiveness from "@/components/SVGS/Responsiveness/Responsiveness";
import NoLimit from "@/components/SVGS/NoLimit/NoLimit";
import Embed from "@/components/SVGS/Embed/Embed";
import Domain from "@/components/SVGS/Domain/Domain";
import Boost from "@/components/SVGS/Boost/Boost";
import Dnd from "@/components/SVGS/Dnd/Dnd";

export const featuresStory = {
  id: uuid(),
  title: "FEATURES",
  description:
    "We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.",
  images: {
    desktop: story_1_desktop,
    tab: story_1_tab,
    mobile: story_1_mobile,
  },
};

export const featuresBenefits = [
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
  {
    id: uuid(),
    icon: Domain,
    title: "Custom Domain",
    description:
      "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
  },
  {
    id: uuid(),
    icon: Boost,
    title: "Boost Your Exposure",
    description:
      "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
  },
  {
    id: uuid(),
    icon: Dnd,
    title: "Drag & Drop Image",
    description:
      "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
  },
];
