import styles from "./Playlist.module.css";
import PlaylistTrack from "./PlaylistTrack";

function Playlist({
  tracks,
  playlistName,
  setPlaylistName,
  onRemoveTrack,
  createPlaylist,
  onSubmit,
}) {
  return (
    <form className={styles.playlist} onSubmit={onSubmit}>
      <input
        type="text"
        name="playlist name"
        value={playlistName}
        onChange={setPlaylistName}
      />
      {tracks.length > 0 &&
        tracks.map((track) => {
          return (
            <PlaylistTrack
              track={track}
              key={track.id}
              onRemoveTrack={onRemoveTrack}
            />
          );
        })}
      <button
        type="submit"
        className={styles["save-button"]}
        onClick={createPlaylist}
      >
        SAVE TO SPOTIFY
      </button>
    </form>
  );
}

export default Playlist;
