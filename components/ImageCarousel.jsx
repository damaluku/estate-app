import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { images } from "./basket";
import styles from "../styles/ImageCarousel.module.css";

const ImageCarousel = () => {
  return (
    <>
      <div className={styles.container}>
        <Carousel autoPlay interval={2500} infiniteLoop showIndicators={false}>
          {images.map((image) => {
            return (
              <>
                <div key={image.id} className={styles.imageContainer}>
                  <Image src={image.source} alt={image.alt} layout="fill" />
                  <p className="legend">{image.alt}</p>
                </div>
              </>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default ImageCarousel;
