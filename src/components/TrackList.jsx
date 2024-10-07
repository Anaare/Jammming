import Track from "./Track";
function TrackList({ tracks, onAddToPlaylist }) {
  return (
    <>
      {tracks.map((track) => (
        <Track
          song={track.song}
          artist={track.artist}
          album={track.album}
          key={track.id}
          id={track.id}
          onAddToPlaylist={onAddToPlaylist}
        />
      ))}
    </>
  );
}

export default TrackList;
