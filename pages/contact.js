import React, { useEffect, useRef } from "react";
import { Container, Main } from "../components/styled";
import { Footer } from "../components/basket";
import Image from "next/image";
import styles from "../styles/Contact.module.css";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import Typed from "typed.js";

const Contact = () => {
  const element = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["we are here to help provide your dream home", "SOTAKE "],
      typeSpeed: 50,
      backSpeed: 40,
    };

    typed.current = new Typed(element.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <>
      <Container>
        <Main>
          <div className={styles.contact}>
            <div className={styles.image}>
              <Image
                src="/property3.jpg"
                alt="property "
                priority
                layout="fill"
              />
              <div className={styles.typed}>
                <div>
                  <span ref={element} />
                </div>
              </div>
            </div>
            <div className={styles.contactUs}>
              <h1>We&apos;d love to hear from you</h1>
              <div className={styles.socials}>
                <a
                  href="http//facebook.com"
                  target="_blank"
                  className={styles.facebook}
                >
                  <FaFacebookF />
                </a>
                <a
                  href="http//twitter.com"
                  target="_blank"
                  className={styles.twitter}
                >
                  <FaTwitter />
                </a>
                <a
                  href="http//whatsapp.com"
                  target="_blank"
                  className={styles.whatsapp}
                >
                  <FaWhatsapp />
                </a>
                <a href="tel:+23414405145" className={styles.phone}>
                  <FaPhoneAlt />
                </a>
              </div>
            </div>
          </div>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default Contact;
