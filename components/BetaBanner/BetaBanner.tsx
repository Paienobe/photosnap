import React from "react";
import styles from "./BetaBanner.module.scss";
import bannerDesktop from "@/assets/shared/desktop/bg-beta.jpg";
import bannerTab from "@/assets/shared/desktop/bg-beta.jpg";
import bannerMobile from "@/assets/shared/desktop/bg-beta.jpg";
import InviteButton from "../InviteButton/InviteButton";

const BetaBanner = () => {
  return (
    <section className={styles.beta_banner}>
      <div></div>

      <picture>
        <source media="(max-width:850px)" srcSet={bannerTab.src} />
        <source media="(max-width:480px)" srcSet={bannerMobile.src} />
        <img src={bannerDesktop.src} alt="" />
      </picture>

      <div>
        <h1>WE'RE IN BETA. GET YOUR INVITE TODAY</h1>
        <InviteButton color="white" text="READ STORY" />
      </div>
    </section>
  );
};

export default BetaBanner;
