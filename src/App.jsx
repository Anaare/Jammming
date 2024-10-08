import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Playlist from "./components/Playlist";
import SearchResults from "./components/SearchResults";
import { useSpotifyToken } from "./custom-hooks/useSpotifyToken";
import { useEffect, useState } from "react";

function App() {
  const token = useSpotifyToken();

  const [searchResults, setSearchResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("");
  const [track, setTrack] = useState("");

  const [searchTriggered, setSearchTriggered] = useState(false);

  useEffect(() => {
    const getTrackData = async () => {
      if (!searchTriggered) return;
      try {
        const response = await fetch(
          `https://api.spotify.com/v1/search?q=remaster%2520track%3A${track}&type=track&limit=10`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();

        const trackInfo = result.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          artist: track.artists[0].name,
          album: track.album.name,
          uri: track.uri,
        }));

        setSearchResults(trackInfo);
      } catch (error) {
        console.log(error);
      } finally {
        setSearchTriggered(false);
        setTrack("");
      }
    };
    getTrackData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track, searchTriggered]);

  const handleSearch = () => {
    setSearchTriggered(true);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch();
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
      <SearchBar
        track={track}
        setTrack={setTrack}
        onSearchSubmit={handleSearchSubmit}
      />
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
