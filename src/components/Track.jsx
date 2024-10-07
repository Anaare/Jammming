import styles from "./Track.module.css";

function Track({ id, song, artist, album, onAddToPlaylist }) {
  const trackData = {
    id,
    song,
    artist,
    album,
  };

  return (
    <div className={styles.result}>
      <div className={styles.info}>
        <h3>{song}</h3>
        <p>
          {artist} | {album}
        </p>
      </div>
      <button
        aria-label={`Add ${song} by ${artist}`}
        onClick={() => onAddToPlaylist(trackData)}
      >
        +
      </button>
    </div>
  );
}

export default Track;
