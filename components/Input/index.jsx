import styles from "./styles.module.scss";

const Input = ({ search, setSearch, category, setCategory }) => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.h2Contain}>
        <h2 className={styles.h2Title}>Dimmi dove sei e ti dirò dove andare</h2>
      </div>

      <div>
        <form className={styles.formContainer}>
          <input
            className={styles.input}
            type="text"
            id="search"
            placeholder="Search,Citta"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};
export default Input;
