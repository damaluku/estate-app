import React from "react";
import styles from "../../styles/Details.module.css";
import Image from "next/image";
import { Container } from "../../components/styled";
// import getPost from "../../lib/helper";
import Link from "next/link";
import db from "../api/data.json";

const Details = ({ image, description, address }) => {
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
        <Link href="/portfolio">Return</Link>
      </Container>
    </>
  );
};

export default Details;

// ................................................

export const getStaticProps = async ({ params }) => {
  const posts = db.find((item) => item.id === 4);
  const { address, description, image } = posts;

  return {
    props: {
      posts,
      address,
      description,
      image,
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
    paths,
    fallback: false,
  };
};

// ..................................................
/* export async function getStaticProps({ params }) {
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
} */
