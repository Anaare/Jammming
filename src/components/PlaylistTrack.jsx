import styles from "./Playlist.module.css";

function PlaylistTrack({ track, onRemoveTrack }) {
  return (
    <div className={styles["playlist-track"]}>
      <div className={styles.info}>
        <h3>{track.song}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      <button
        className={styles["remove-button"]}
        onClick={() => onRemoveTrack(track.id)}
      >
        -
      </button>
    </div>
  );
}

export default PlaylistTrack;
