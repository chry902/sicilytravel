import styles from "./styles.module.scss";
import SicilyImg from "../Images/sicilyImg.png";
import Image from "next/image";

const SicilyLogo = () => {
  return (
    <div className={styles.sicilyContainer}>
      <p>
        Suli a livanti, suli a punenti, terra vasata di tutti li venti,
        accarizzata di l’azzurru mari, terra di gioie e di lacrimi amari. Terra
        di suli, d’amuri e d’incantu, terra di spartenzi,di duluri e di chiantu.
        Terra chi cunfunni e la menti scumpigghia, terra ricca di storia e di
        ogni meravigghia. Terra dunni lu suli darré u mari scumpari, mentri u
        cielu di russu accumincia a pittari, prima di lassari lu só postu a la
        luna, e putilla ammirari é na gran furtuna. Terra di genti chi la lassa
        scuntenti, e giá mentri parti di turnari é 'mpazienti. Terra di fimmini
        beddi comu li ciuri, chi ogni picciottu fannu 'mpazziri d’amuri, comu
        Dee di l’Olimpu, eleganti e abbronzati, cu l’occhi só scuri e li só
        corpi dorati. Terra di l'antichi Greci e di li só Dei, oggi ricurdati da
        li templi e i musei. Ogni petra di sta terra é un opira d’arti, e
        lassalla é un duluri pi ognirunu ca parti. Forsi ci sará un postu chi la
        rassumigghia, ma sulu a Sicilia é sta gran meravigghia!
      </p>
      <div className={styles.imgContain}>
        <Image src={SicilyImg} />
      </div>
    </div>
  );
};
export default SicilyLogo;
