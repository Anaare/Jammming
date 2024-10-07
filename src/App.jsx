import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Playlist from "./components/Playlist";
import SearchResults from "./components/SearchResults";
import { useState } from "react";

const tracks = [
  {
    id: 1,
    song: "I wanna be yours",
    artist: "Arctic Monkeys",
    album: "AM",
    uri: "i",
  },
  {
    id: 2,
    song: "Do I wanna know",
    artist: "Arctic Monkeys",
    album: "AM",
    uri: "b",
  },
  {
    id: 3,
    song: "505",
    artist: "Arctic Monkeys",
    album: "AM",
    uri: "c",
  },
];

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("");

  const addSearchResults = () => {
    setSearchResults(tracks);
  };

  const addToPlaylist = (track) => {
    setPlaylistTracks((prevTracks) => {
      if (!prevTracks.some((t) => t.id === track.id)) {
        return [
          ...prevTracks,
          {
            id: track.id,
            artist: track.artist,
            album: track.album,
            song: track.song,
            uri: track.uri,
          },
        ];
      }
      return prevTracks;
    });
  };

  const removeFromPlaylist = (id) => {
    setPlaylistTracks(playlistTracks.filter((track) => track.id !== id));
  };

  const createPlaylist = () => {
    const uris = [];
    playlistTracks.map((track) => {
      uris.push(track.uri);
    });

    setPlaylistTracks([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <NavBar />
      <SearchBar addSearchResults={addSearchResults} />
      <div className="container">
        <SearchResults tracks={searchResults} onAddToPlaylist={addToPlaylist} />
        <Playlist
          tracks={playlistTracks}
          onRemoveTrack={removeFromPlaylist}
          playlistName={playlistName}
          setPlaylistName={(e) => setPlaylistName(e.target.value)}
          createPlaylist={createPlaylist}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;
