import styles from "./styles.module.scss";
import Image from "next/image";
import logoPalermo from "../../Images/logoPalermo.png";

const LogoCitta = () => {
  return (
    <div>
      <Image src={logoPalermo} width={100} height={100} />
    </div>
  );
};
export default LogoCitta;
