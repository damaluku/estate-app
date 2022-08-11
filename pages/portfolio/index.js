import React, { useEffect } from "react";
import { Container, Main } from "../../components/styled";
import { Footer, portfolioData } from "../../components/basket";
import Image from "next/image";
import styles from "../../styles/Portfolio.module.css";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import fetcher from "../../lib/fetcher";

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { data, isloading, isError } = fetcher(`api/portfolio`);
  if (isloading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  // console.log(data);

  return (
    <>
      <Container>
        <Main>
          <div className={styles.portfolioConatainer}>
            {data &&
              data.map((portfolio) => {
                return (
                  <Link href={`/portfolio/${portfolio.id}`} key={portfolio.id}>
                    <div
                      className={styles.portfolioBox}
                      data-aos="fade-up-left"
                    >
                      <div className={styles.image}>
                        <Image
                          src={portfolio.image}
                          alt={portfolio.address}
                          layout="fill"
                          priority
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
