import TrackList from "./TrackList";
import styles from "./SearchResults.module.css";
function Results({ tracks }) {
  return (
    <div className={styles.results}>
      <h1>Results</h1>
      <TrackList tracks={tracks} />
    </div>
  );
}

export default Results;
