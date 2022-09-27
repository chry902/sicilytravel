import styles from "./styles.module.scss";

const EventCard = ({ item }) => {
  const name = item.nome || "nome";
  const data = item.data || "data";
  const luogo = item.luogo || "luogo";
  const img = item.image || "image";

  return (
    <div className={`${styles.mediumCardContainer} `}>
      <div className={styles.imgContainer}>
        <img src={img} alt="{name}" className={styles.img} />
      </div>

      <div className={`${styles.description}`}>
        <h2>{name}</h2>
        <p>{data}</p>
        <p>{luogo}</p>
        {/* <p>
          <a>link tiket</a>
        </p> */}

        {/* <a className={styles.btn}>Scopri viaggi</a> */}
      </div>
    </div>
  );
};
export default EventCard;
