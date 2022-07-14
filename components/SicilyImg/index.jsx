import styles from "./styles.module.scss";
import SicilyImg from "../Images/sicilyImg.png";
import Image from "next/image";

const SicilyLogo = () => {
  return (
    <>
      <div className={styles.sicilyContainer}>
        <div className={styles.paragraphContaine}>
          <p>
            Suli a livanti, suli a punenti, <br /> terra vasata di tutti li
            venti,
            <br />
            accarizzata di l&apos;azzurru mari,
            <br />
            terra di gioie e di lacrimi amari.
            <br />
            Terra di suli, d&apos;amuri e d&apos;incantu, <br />
            terra di spartenzi,di duluri e di chiantu.
            <br />
            Terra chi cunfunni e la menti scumpigghia,
            <br />
            terra ricca di storia e di ogni meravigghia.
            <br />
            Terra dunni lu suli darré u mari scumpari,
            <br />
            mentri u cielu di russu accumincia a pittari,
            <br />
            prima di lassari lu só postu a la luna, <br />e putilla ammirari é
            na gran furtuna.
          </p>

          <p>
            Terra di genti chi la lassa scuntenti,
            <br /> e giá mentri parti di turnari é &apos;mpazienti. <br />
            Terra di fimmini beddi comu li ciuri,
            <br /> chi ogni picciottu fannu &apos;mpazziri d&apos;amuri, <br />
            comu Dee di l&apos;Olimpu, eleganti e abbronzati, <br />
            cu l&apos;occhi só scuri e li só corpi dorati.
            <br /> Terra di l&apos;antichi Greci e di li só Dei, <br />
            oggi ricurdati da li templi e i musei.
            <br /> Ogni petra di sta terra é un opira d&apos;arti,
            <br /> e lassalla é un duluri pi ognirunu ca parti.
            <br /> Forsi ci sará un postu chi la rassumigghia,
            <br /> ma sulu a Sicilia é sta gran meravigghia!
          </p>
        </div>
        <div className={styles.imgContain}>
          <Image src={SicilyImg} alt="immagine sicilia" />
        </div>
      </div>
    </>
  );
};
export default SicilyLogo;
