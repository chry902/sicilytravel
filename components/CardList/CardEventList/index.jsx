import styles from "./styles.module.scss";
import EventCard from "../../Cards/EventCard";
import { useEffect, useState } from "react";

const CardEventList = ({ location }) => {
  // console.log("CArdEventList", location);
  const [eventi, setEventi] = useState([]);

  useEffect(() => {
    const concert = [];

    location.forEach((event) => {
      concert.push(event.eventi);
    });

    setEventi(concert.flat());

    console.log("debug", eventi);
  }, [location]);

  return (
    <>
      <h2 className={styles.titleCard}>
        che si fa?... dai un occhiata qua sotto!!{" "}
      </h2>
      <div className={styles.cardContiner}>
        {eventi?.map((item, index) => (
          <EventCard item={item} key={index} />
        ))}
      </div>
    </>
  );
};
export default CardEventList;
