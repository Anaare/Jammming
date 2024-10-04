import styles from "./Playlist.module.css";

function Playlist() {
  return (
    <form className={styles.playlist}>
      <input type="text" name="playlist name" />
      <button type="submit">SAVE TO SPOTIFY</button>
    </form>
  );
}

export default Playlist;
