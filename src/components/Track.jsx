import styles from "./Track.module.css";

function Track() {
  return (
    <div className={styles.result}>
      <div className={styles.info}>
        <h3>Song name</h3>
        <p>Artist | Album</p>
      </div>
      <button>+</button>{" "}
      {/*relies on where it is displayed. in Results +, in Playlist - */}
    </div>
  );
}

export default Track;
