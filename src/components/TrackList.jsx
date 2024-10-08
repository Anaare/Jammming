import Track from "./Track";
function TrackList({ tracks, onAddToPlaylist }) {
  return (
    <>
      {tracks.map((track) => (
        <Track
          song={track.name}
          artist={track.artist}
          album={track.album}
          key={track.id}
          id={track.id}
          uri={track.uri}
          onAddToPlaylist={onAddToPlaylist}
        />
      ))}
    </>
  );
}

export default TrackList;
