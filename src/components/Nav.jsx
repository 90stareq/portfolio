import React from "react";
import styles from "../../styles/Nav.module.css";
import Link from "next/link";

export default function Nav() {
  return (
    <div className={styles.navigation}>
      <ul className={styles.nav__items}>
        <li className={styles.nav__item}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link href="/skills">
            <a>Skills</a>
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
