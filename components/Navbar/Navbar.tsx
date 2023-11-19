import React from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import logo from "@/assets/shared/desktop/logo.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>

      <ul className={styles.navbar__link_list}>
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

      <button>GET AN INVITE</button>
    </nav>
  );
};

export default Navbar;
