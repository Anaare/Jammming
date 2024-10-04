import TrackList from "./TrackList";
import styles from "./SearchResults.module.css";
function Results() {
  return (
    <div className={styles.results}>
      <h1>Results</h1>
      <TrackList />
    </div>
  );
}

export default Results;
