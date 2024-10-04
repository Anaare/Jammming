import styles from "./SearchBar.module.css";
function SearchBar() {
  return (
    <form className={styles.form}>
      <input type="text" name="search result" />
      <button type="submit">SEARCH</button>
    </form>
  );
}

export default SearchBar;
