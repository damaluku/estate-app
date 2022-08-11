import React from "react";
import styles from "../../styles/Details.module.css";
import Image from "next/image";
import { Container } from "../../components/styled";
import getPost from "../../lib/helper";
import Link from "next/link";

const Details = ({ image, address, description }) => {
  return (
    <>
      <Container className={styles.container}>
        <div>
          <div className={styles.image}>
            <Image src={image} alt={address} layout="fill" />
          </div>
          <h2>{address}</h2>
          <p>{description}</p>
        </div>
      </Container>
    </>
  );
};

export default Details;

export async function getStaticProps({ params }) {
  const posts = await getPost(params.id);

  return {
    props: posts,
  };
}

export async function getStaticPaths() {
  const posts = await getPost();

  const paths = posts.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}