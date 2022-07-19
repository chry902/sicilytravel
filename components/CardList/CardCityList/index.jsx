import styles from "./styles.module.scss";
import CardCity from "../../Cards/CardCity";

const CardCityList = ({ state }) => {
  return (
    <div className={styles.cardContainer}>
      {state?.map((item) => (
        <CardCity className={styles.CardCity} key={item.id} item={item} />
      ))}
    </div>
  );
};
export default CardCityList;
