import styles from "./SearchBar.module.css";
function SearchBar({ track, setTrack, onSearchSubmit }) {
  return (
    <form className={styles.form} onSubmit={onSearchSubmit}>
      <input
        type="text"
        name="search result"
        value={track}
        onChange={(e) => {
          setTrack(e.target.value);
        }}
      />
      <button type="submit">SEARCH</button>
    </form>
  );
}

export default SearchBar;
