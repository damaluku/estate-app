import React, { useEffect } from "react";
import { Container, Main } from "../../components/styled";
import { Footer } from "../../components/basket";
import Image from "next/image";
import styles from "../../styles/Portfolio.module.css";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../api/data.json";

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Container>
        <Main>
          <div className={styles.portfolioConatainer}>
            {data &&
              data.map((portfolio) => {
                return (
                  <Link
                    href={`/portfolio/${portfolio.id}`}
                    key={portfolio.id}
                    passHref
                  >
                    <div
                      className={styles.portfolioBox}
                      data-aos="fade-up-left"
                    >
                      <div className={styles.image}>
                        <Image
                          src={portfolio.image}
                          alt={portfolio.address}
                          layout="fill"
                          loading="lazy"
                        />
                      </div>
                      <h2>{portfolio.address} </h2>
                      <h4>{portfolio.description}</h4>
                    </div>
                  </Link>
                );
              })}
          </div>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default Portfolio;
