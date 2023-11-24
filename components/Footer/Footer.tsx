import React from "react";
import styles from "./Footer.module.scss";
import Logo from "../SVGS/Logo/Logo";
import Link from "next/link";
import InviteButton from "../InviteButton/InviteButton";
import facebook from "@/assets/shared/desktop/facebook.svg";
import youtube from "@/assets/shared/desktop/youtube.svg";
import twitter from "@/assets/shared/desktop/twitter.svg";
import pinterest from "@/assets/shared/desktop/pinterest.svg";
import instagram from "@/assets/shared/desktop/instagram.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <Logo color="white" />

        <ul className={styles.footer__list}>
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/stories">STORIES</Link>
          </li>
          <li>
            <Link href="/features">FEATURES</Link>
          </li>
          <li>
            <Link href="/pricing">PRICING</Link>
          </li>
        </ul>

        <InviteButton color="white" />

        <div className={styles.footer__socials}>
          <Image src={facebook} alt="" />
          <Image src={youtube} alt="" />
          <Image src={twitter} alt="" />
          <Image src={pinterest} alt="" />
          <Image src={instagram} alt="" />
        </div>

        <p>Copyright {`${new Date().getFullYear()}`}. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
