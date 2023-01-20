import React from "react";
import styles from "../../styles/Details.module.css";
import Image from "next/image";
import { Container } from "../../components/styled";
import Link from "next/link";
import db from "../api/data.json";
import { useRouter } from "next/router";

const Details = ({ image, description, address, details }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Container className={styles.container}>
        <div className={styles.cover}>
          <div>
            <div className={styles.image}>
              <Image src={image} alt={address} layout="fill" />
            </div>
            <div className={styles.info}>
              <h2>{address}</h2>
              <h3>{description}</h3>
              <p>{details}</p>
            </div>
          </div>
          <Link href="/portfolio">Return</Link>
        </div>
      </Container>
    </>
  );
};

export default Details;

// ................................................

export const getStaticProps = async ({ params }) => {
  const posts = db.find((item) => item.id == params.id);

  const { address, description, image, details } = posts;

  return {
    props: {
      address,
      description,
      image,
      details,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = db.map((post) => {
    return {
      params: {
        id: post?.id.toString(),
      },
    };
  });

  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: true,
  };
};
