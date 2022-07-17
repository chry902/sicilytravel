import styles from "./styles.module.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useEffect } from "react";

import Image from "next/image";
import { useLocationContext } from "../context/Context";

const handleDragStart = (e) => e.preventDefault();
const items = [];

const Gallery = ({ state }) => {
  console.log("props", state);

  useEffect(() => {
    state?.forEach((item) => {
      items.push(
        <div className={styles.imgContainer}>
          <Image
            className={styles.carouselImg}
            alt="location images"
            src={item}
            onDragStart={handleDragStart}
            role="presentation"
            width={700}
            height={600}
          />
        </div>
      );
    });
  }, [state]);

  const responsive = {
    0: { items: 1 },
    376: { items: 2 },
    768: { items: 3 },
    1023: { items: 4 },
    1439: { items: 5 },
    2559: { items: 6 },
  };

  return (
    <AliceCarousel
      className={styles.imgContainer}
      mouseTracking={true}
      autoPlay={true}
      autoPlayInterval={2500}
      responsive={responsive}
      infinite={true}
      disableButtonsControls={true}
      disableDotsControls={true}
      // autoWidth={true}
      // autoHeight={true}
      // controlsStrategy="alternate"
      items={items}
    />
  );
};
export default Gallery;
