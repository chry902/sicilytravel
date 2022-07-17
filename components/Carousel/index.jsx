import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./styles.module.scss";

import AliceCarousel from "react-alice-carousel";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
// import { UserLocationContext } from "../context/Context";

const Gallery = ({ location }) => {
  const handleDragStart = (e) => e.preventDefault();
  const items = [];

  useEffect(() => {
    location.forEach((element, index) => {
      items.push(
        <>
          <Link href={`/country/${element.city || ""}`}>
            <Image
              alt="location images"
              src={element.image[0]}
              onDragStart={handleDragStart}
              role="presentation"
              width={750}
              height={560}
              key={index}
            />
          </Link>
        </>
      );
    });
  }, []);

  const responsive = {
    0: { items: 1 },
    376: { items: 2 },
    768: { items: 3 },
    1023: { items: 4 },
    1439: { items: 5 },
    2559: { items: 6 },
  };
  return (
    <div className={styles.imgContainer}>
      <AliceCarousel
        mouseTracking={true}
        autoPlay={true}
        autoPlayInterval={2000}
        responsive={responsive}
        infinite={true}
        disableButtonsControls={true}
        disableDotsControls={true}
        // autoHeight={true}
        // controlsStrategy="alternate"
        items={items}
      />
    </div>
  );
};
export default Gallery;
