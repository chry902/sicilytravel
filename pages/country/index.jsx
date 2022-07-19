import { useEffect, useState } from "react";
import CardCityList from "../../components/CardList/CardCityList";
import { useLocationContext } from "../../components/context/Context";

import styles from "./styles.module.scss";

function Country() {
  const [state, setState] = useState([]);
  const {
    state: { location },
  } = useLocationContext();
  useEffect(() => {
    setState(location);
  }, []);
  console.log("country", state);
  return (
    <div className={styles.container}>
      <CardCityList state={state} />
    </div>
  );
}
export default Country;
