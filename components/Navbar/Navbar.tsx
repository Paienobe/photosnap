import React from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Logo from "../SVGS/Logo/Logo";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Logo color="black" />
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
