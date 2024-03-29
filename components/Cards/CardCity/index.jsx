import styles from "./styles.module.scss";
import Link from "next/link";

const CardCity = ({ item }) => {
  const name = item.city || "ciao";
  const image = item.image[0] || "";
  const descript =
    item.description ||
    "In Sicilia l’abbiocco in spiaggia ha il gusto di cannoli e arancin* e!";

  const formatMinText = (descript) =>
    descript.split("").slice(0, 550).join("") + "...";
  return (
    <div className={styles.cardLargeContainer}>
      <div className={styles.imgWrapper}>
        <img src={image} alt="ciao" className={styles.img} />
      </div>

      <div className={styles.descriptionContainer}>
        <h2 className={styles.h2Title}>{name}</h2>

        <p className={styles.paragraph}>{formatMinText(descript)}</p>

        <Link href={`/country/city/${name}`}>
          <a className={styles.btn}>Più su {name}</a>
        </Link>
      </div>
    </div>
  );
};
export default CardCity;
