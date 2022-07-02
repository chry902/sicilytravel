import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./styles.module.scss";

const handleDragStart = (e) => e.preventDefault();

const items = [
  <div className={styles.imgContain}>
    <img
      src="https://picsum.photos/id/2/1000/500"
      onDragStart={handleDragStart}
      role="presentation"
    />
  </div>,
  <div className={styles.imgContain}>
    <img
      src="https://picsum.photos/id/4/1000/500"
      onDragStart={handleDragStart}
      role="presentation"
    />
  </div>,
  <div className={styles.imgContain}>
    <img
      src="https://picsum.photos/id/5/1000/500"
      onDragStart={handleDragStart}
      role="presentation"
    />
  </div>,
  <div className={styles.imgContain}>
    <img
      src="https://picsum.photos/id/6/1000/500"
      onDragStart={handleDragStart}
      role="presentation"
    />
  </div>,
  <div className={styles.imgContain}>
    <img
      src="https://picsum.photos/id/7/1000/500/"
      onDragStart={handleDragStart}
      role="presentation"
    />
  </div>,
  <div className={styles.imgContain}>
    <img
      src="https://picsum.photos/id/8/1000/500"
      onDragStart={handleDragStart}
      role="presentation"
    />
  </div>,
];

const Gallery = () => {
  return (
    <AliceCarousel
      mouseTracking
      keyboardNavigation
      autoPlay
      autoPlayInterval={2500}
      infinite
      items={items}
    />
  );
};
export default Gallery;
