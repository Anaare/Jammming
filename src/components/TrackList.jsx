import { useState } from "react";
import Track from "./Track";
function TrackList({ tracks }) {
  const [selectedTracks, setSelectedTracks] = useState(false);

  const handleAddToPlaylist = (trackId) => {
    setSelectedTracks((prevSelected) => ({
      ...prevSelected,
      [trackId]: !prevSelected[trackId],
    }));
  };

  return (
    <>
      {tracks.map((track) => (
        <Track
          song={track.song}
          artist={track.artist}
          album={track.album}
          key={track.id}
          selected={!selectedTracks[track.id]}
          onAddToPlaylist={() => handleAddToPlaylist(track.id)}
        />
      ))}
    </>
  );
}

export default TrackList;
