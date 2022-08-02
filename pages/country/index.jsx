import { useEffect, useState } from "react";
import CardCityList from "../../components/CardList/CardCityList";
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
      <Input
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
      />
      <CardCityList
        state={state}
        search={search}
        category={category}
        setCategory={setCategory}
      />
    </div>
  );
}
export default Country;
