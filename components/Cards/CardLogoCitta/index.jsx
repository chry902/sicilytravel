import styles from "./styles.module.scss";
import useId from "react-use-uuid";
import Image from "next/image";
// import logoPalermo from "../../Images/logoPalermo.png";
import { UserLocationContext } from "../../context/Context";
import { useEffect } from "react";

const LogoCitta = () => {
  const id = useId();
  const stato = UserLocationContext();
  console.log(stato.location[0].logo);
  useEffect(() => {}, []);

  return (
    <div className={styles.logoContain}>
      {stato.location?.map((item, index) => (
        <div key={index.id}>
          <Image src={item.logo} width={200} height={200} alt={"logo"} />
        </div>
      ))}
    </div>
  );
};
export default LogoCitta;
