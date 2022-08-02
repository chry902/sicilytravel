import styles from "./styles.module.scss";
import CardCity from "../../Cards/CardCity";
import { useEffect, useState } from "react";

const CardCityList = ({ state, search }) => {
  const [cat, useCat] = useState([]);

  console.log("statefilter", state);
  console.log("search", search);

  // useEffect(() => {
  //   useCat(state[0]?.categorie, state[1]?.categorie);
  // }, []);

  console.log("cat", cat);
  return (
    <div className={styles.cardContainer}>
      {state
        ?.filter((item) =>
          item.city.toLowerCase().trim().includes(search.toLowerCase().trim())
        )
        .map((item) => (
          <CardCity className={styles.CardCity} key={item.id} item={item} />
        ))}
    </div>
  )
}
export default CardCityList;
/* {state
        ?.filter((item) =>
          item.city
            ?.toLowerCase()
            ?.trim()
            ?.includes(search.toLowerCase().trim())
        ) */
// ?.filter((item) => item.categorie == search.toLowerCase())
