import React, { useEffect } from "react";
import { Container, Main } from "../components/styled";
import { Footer } from "../components/basket";
import styles from "../styles/About.module.css";
import Carousel from "../components/Carousel";
import Midline from "../components/Midline";
import Image from "next/image";
import { people } from "../components/basket";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Container>
        <Main>
          <div className={styles.container}>
            <div className={styles.intro}>
              <span data-aos="fade-up">Creating best in</span>
              <span data-aos="fade-up" data-aos-delay="300">
                class communities
              </span>
              <span data-aos="fade-up" data-aos-delay="600">
                that are engaging,
              </span>
              <span data-aos="fade-up" data-aos-delay="900">
                beautiful and sustainable.
              </span>
            </div>
            <div className={styles.carousel}>
              <Carousel />
            </div>
            <div className={styles.what}>
              <div className={styles.whatWeDo}>
                <span data-aos="fade-up">What</span>
                <span data-aos="fade-up" data-aos-delay="200">
                  We
                </span>
                <span data-aos="fade-up" data-aos-delay="400">
                  Do
                </span>
              </div>
              <div className={styles.development} data-aos="fade-up">
                <h3>Development</h3>
                <p>
                  Working alongside communities to create what others cannot see
                  by undergoing a detailed zoning, architectural, and design
                  process.
                </p>
              </div>
              <div
                className={styles.management}
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <h3>Project Management</h3>
                <p>
                  Apply expertise gained from decades of experience to manage
                  all stages of the construction and design process.
                </p>
              </div>
              <div
                className={styles.rehab}
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <h3>Rehab & Adaptive Reuse</h3>
                <p>
                  Identifying opportunity to rectify an existing structure that
                  is underperforming, and undeserving its best use by
                  implementing a creative improvement process.
                </p>
              </div>
            </div>
            <div className={styles.team}>
              <h1>Our team</h1>
              <Midline />

              {people.map((person) => {
                return (
                  <>
                    <div className={styles.bio} key={person.id}>
                      <div className={styles.image}>
                        <Image
                          src={person.image}
                          layout="fill"
                          alt={person.name}
                          loading="lazy"
                          data-aos="fade-up"
                        />
                      </div>
                      <div className={styles.info}>
                        <h2 data-aos="fade-up">{person.name}</h2>
                        <h4 data-aos="fade-up">{person.position}</h4>
                        <p data-aos="fade-up">
                          {person.bioStart}
                          <br />
                          {person.bioEnd}
                        </p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </Main>
      </Container>
      <Footer />
    </>
  );
};

export default About;
