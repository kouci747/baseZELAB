import {useContext} from 'react';
import WishlistContext from '../../context/WishlistContext';
import Link from "next/link";
import styles from "./index.module.scss";
import Logo from "../../../public/logo.jpg";

const Index = () => {

  const { wishlist } = useContext(WishlistContext);

  console.log(wishlist);

  return (
    <header className={styles.header__main}>
      <div className={styles.header__logo}>
        <Link href="/">
          <img src={Logo.src} alt="Airbnb" />
        </Link>
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
          <li className={styles.nav__item}>
            <Link href="/login">
              Login
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/profil">
              Profil
            </Link>
          </li>
          <li className={styles.nav__item}>
            <Link href="/wishlist">
              Favoris {wishlist.length}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Index;
