import styles from "./styles.module.scss";
import CardCity from "../../Cards/CardCity";

const CardCityList = ({ state, search }) => {
  return (
    <div className={styles.cardContainer}>
      {state
        ?.filter((item) =>
          item.city
            ?.toLowerCase()
            ?.trim()
            ?.includes(search.toLowerCase().trim())
        )
        .map((item) => (
          <CardCity className={styles.CardCity} key={item.id} item={item} />
        ))}
    </div>
  );
};
export default CardCityList;
