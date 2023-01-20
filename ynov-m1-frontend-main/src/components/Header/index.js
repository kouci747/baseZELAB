import React from 'react';
import Link from "next/link";
import styles from "./index.module.scss";
import Logo from "../../../public/netflix.png";

const Index = () => {

  return (
    <header className={styles.header__main}>
      <div className={styles.header__logo}>
        <img src={Logo.src} alt="Netflix" />
      </div>
      <div className={styles.header__menu}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <Link href="/about">
              About
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/register">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Index;
