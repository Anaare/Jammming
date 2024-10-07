import { useState } from "react";
import styles from "./SearchBar.module.css";
function SearchBar({ addSearchResults }) {
  const [track, setTrack] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="search result"
        value={track}
        onChange={(e) => {
          setTrack(e.target.value);
        }}
      />
      <button type="submit" onClick={addSearchResults}>
        SEARCH
      </button>
    </form>
  );
}

export default SearchBar;
