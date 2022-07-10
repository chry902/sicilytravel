import "react-alice-carousel/lib/alice-carousel.css";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import useId from "react-use-uuid";
import { UserLocationContext } from "../context/Context";

import Image from "next/image";

const Gallery = () => {
  const id = useId();

  const location = UserLocationContext();
  const [arrImge, setArrImge] = useState([]);

  const items = [];

  useEffect(() => {
    const arrImg = [];
    arrImg = [
      ...arrImg,
      ...location.location[0].image,
      ...location.location[1].image,
      ...location.location[2].image,
    ];
    setArrImge(arrImg);
  }, [location]);
  console.log("===>", arrImge);

  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: { items: 1 },
    376: { items: 2 },
    768: { items: 3 },
    1023: { items: 4 },
    1439: { items: 5 },
    2559: { items: 6 },
  };

  useEffect(() => {
    arrImge.forEach((element) => {
      items.push(
        <div>
          <Image
            alt="location images"
            src={element}
            onDragStart={handleDragStart}
            role="presentation"
            width={400}
            height={300}
            key={id}
          />
        </div>
      );
    });
    console.log("foreach", items);
  }, [arrImge]);

  return (
    <div className={styles.imgContainer}>
      <AliceCarousel
        mouseTracking={true}
        autoPlay={true}
        autoPlayInterval={2500}
        responsive={responsive}
        infinite={true}
        disableButtonsControls={true}
        disableDotsControls={true}
        // autoHeight={true}
        controlsStrategy="alternate"
        items={items}
      />
    </div>
  );
};
export default Gallery;
