import styles from "./styles.module.scss";

const Input = ({ search, setSearch, category, setCategory }) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.h2Contain}>
        <h2 className={styles.h2Title}>Dimmi dove sei e ti dirò dove andare</h2>
      </div>

      <div>
        <form className={styles.formContainer}>
          <label>Search city</label>
          <input
            type="text"
            id="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        <form>
          <input
            type="radio"
            id="tutto"
            name="tutto"
            value=""
            onChange={(e) => setCategory(e.target.value)}
          />
          <label>Tutto</label>

          <input
            type="radio"
            id="mare"
            name="mare"
            value="mare"
            onChange={(e) => setCategory(e.target.value)}
          />
          <label>Mare</label>

          <input
            type="radio"
            id="montagna"
            name="montagna"
            value="montagna"
            onChange={(e) => setCategory(e.target.value)}
          />
          <label>Montagna</label>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  );
};
export default Input;
