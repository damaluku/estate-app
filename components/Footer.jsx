import React, { useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Midline from "./Midline";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <footer>
        <div className={styles.contact}>
          <div className={styles.location}>
            <span data-aos="fade-up">1406 W Fulton St., STE </span>
            <span data-aos="fade-up" data-aos-delay="200">
              2A Chicago, IL 60607
            </span>
          </div>
          <div
            className={styles.contactLink}
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a href="mailto:damaluku@gmail.com">
              <h1>Contact</h1>
              <span>
                <FaAngleDoubleRight />
              </span>
            </a>
          </div>
        </div>
        <Midline />
        <div className={styles.rightsLink}>
          <div className={styles.rights}>
            <h3>
              ©2022 <span>P</span> <span>E</span> <span>O</span>. All Rights
              Reserved.
            </h3>
          </div>
          <div className={styles.links}>
            <ul>
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
          </div>
          <div className={styles.credits}>
            <h3>made by damian dark</h3>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
