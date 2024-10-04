import styles from "./SearchBar.module.css";
function SearchBar({ song, setSong }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="search result"
        value={song}
        onChange={(e) => {
          setSong(e.target.value);
        }}
      />
      <button type="submit">SEARCH</button>
    </form>
  );
}

export default SearchBar;
