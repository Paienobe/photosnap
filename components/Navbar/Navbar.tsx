"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Logo from "../SVGS/Logo/Logo";
import Menu from "../SVGS/Menu/Menu";
import Close from "../SVGS/Close/Close";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const closeMenu = () => setShowMenu(false);

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Logo color="black" />
      </Link>

      <ul
        className={`${styles.navbar__link_list} ${
          showMenu ? styles.navbar__visible_menu : ""
        }`}
      >
        <li>
          <Link href="/stories" onClick={closeMenu}>
            STORIES
          </Link>
        </li>
        <li>
          <Link href="/features" onClick={closeMenu}>
            FEATURES
          </Link>
        </li>
        <li>
          <Link href="/pricing" onClick={closeMenu}>
            PRICING
          </Link>
        </li>
        <button>GET AN INVITE</button>
      </ul>

      <button>GET AN INVITE</button>

      <button
        className={styles.navbar__menu}
        onClick={() => setShowMenu(!showMenu)}
      >
        {!showMenu ? <Menu /> : <Close />}
      </button>
    </nav>
  );
};

export default Navbar;
