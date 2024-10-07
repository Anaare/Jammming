import TrackList from "./TrackList";
import styles from "./SearchResults.module.css";
function SearchResults({ tracks, onAddToPlaylist }) {
  return (
    <div className={styles.results}>
      <h1>Results</h1>
      <TrackList tracks={tracks} onAddToPlaylist={onAddToPlaylist} />
    </div>
  );
}

export default SearchResults;
