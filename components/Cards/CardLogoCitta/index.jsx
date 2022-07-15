import styles from "./styles.module.scss";
// import useId from "react-use-uuid";
import Image from "next/image";

import { UserLocationContext } from "../../context/Context";
import { useEffect } from "react";

const LogoCitta = () => {
  const {
    state: { location },
  } = UserLocationContext();
  console.log("location", location);
  useEffect(() => {}, []);

  return (
    <div className={styles.logoContain}>
      <div>
        <h2>Dimmi dove sei e ti dirò dove andare </h2>
      </div>

      <div className={styles.logoWrapper}>
        {location?.map((item, i) => (
          <div key={i}>
            <Image src={item.logo} width={200} height={200} alt={"logo"} />

            <h3>{item.city}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default LogoCitta;
