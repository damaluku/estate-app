import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { RiMenu4Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <>
      <header>
        <nav className={styles.nav}>
          <Link href="/">
            <Image src="/logo.png" alt="logo" width="100" height="100" />
          </Link>
          <ul className={styles.topMenu}>
            <li>
              <Link href="portfolio">portfolio</Link>
            </li>
            <li>
              <Link href="about">about</Link>
            </li>
            <li>
              <Link href="contact">contact</Link>
            </li>
          </ul>

          <div className={styles.smallScreen}>
            {toggleMenu ? (
              <span className={styles.menuButton}>
                <RiMenu4Line
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                />
              </span>
            ) : (
              <div className={styles.smallscreenOverlay}>
                <span className={styles.menuButton}>
                  <AiOutlineClose
                    className={styles.overlayClose}
                    onClick={() => {
                      setToggleMenu(true);
                    }}
                  />
                </span>
                <ul className={styles.smallscreenOverlayLinks}>
                  <li
                    onClick={() => {
                      setToggleMenu(true);
                    }}
                  >
                    <Link href="portfolio">portfolio</Link>
                  </li>
                  <li
                    onClick={() => {
                      setToggleMenu(true);
                    }}
                  >
                    <Link href="about">about</Link>
                  </li>
                  <li
                    onClick={() => {
                      setToggleMenu(true);
                    }}
                  >
                    <Link href="contact">contact</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
