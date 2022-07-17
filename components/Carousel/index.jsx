import styles from "./styles.module.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useEffect } from "react";
import Link from "next/link";
// import Image from "next/image";
import { useLocationContext } from "../context/Context";

const handleDragStart = (e) => e.preventDefault();
const items = [];

const Gallery = ({ location }) => {
  useEffect(() => {
    location?.forEach((element, index) => {
      items.push(
        <Link href={`/country/${element.city || ""}`}>
          <div className={styles.imgContainer}>
            <img
              className={styles.carouselImg}
              alt="location images"
              src={element.image[0]}
              onDragStart={handleDragStart}
              role="presentation"
              key={index}
            />
          </div>
        </Link>
      );
    });
  }, [location]);

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
      autoPlayInterval={2000}
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
