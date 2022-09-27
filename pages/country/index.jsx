import { useEffect, useState } from "react";
import CardCityList from "../../components/CardList/CardCityList";
import CardEventList from "../../components/CardList/CardEventList";
import { useLocationContext } from "../../components/context/Context";
import Input from "../../components/Input";

import styles from "./styles.module.scss";

function Country() {
  const [state, setState] = useState([]);

  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");

  const {
    state: { location },
  } = useLocationContext();
  useEffect(() => {
    setState(location);
  }, []);
  console.log("country", location);
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Input
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
        />

        <CardCityList
          className={styles.CardCityList}
          state={state}
          search={search}
          category={category}
          setCategory={setCategory}
        />

        <CardEventList location={location} />
      </div>
    </div>
  );
}
export default Country;
