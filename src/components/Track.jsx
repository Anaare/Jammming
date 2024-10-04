import styles from "./Track.module.css";

function Track({ song, artist, album, selected, onAddToPlaylist }) {
  return (
    <div className={styles.result}>
      <div className={styles.info}>
        <h3>{song}</h3>
        <p>
          {artist} | {album}
        </p>
      </div>
      <button aria-label={`Add ${song} by ${artist}`} onClick={onAddToPlaylist}>
        +
      </button>
      {/*relies on where it is displayed. in Results +, in Playlist - */}
    </div>
  );
}

export default Track;
