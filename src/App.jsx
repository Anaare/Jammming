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
  },
  {
    id: 2,
    song: "Do I wanna know",
    artist: "Arctic Monkeys",
    album: "AM",
  },
  {
    id: 3,
    song: "505",
    artist: "Arctic Monkeys",
    album: "AM",
  },
];

function App() {
  const [song, setSong] = useState("");

  return (
    <div>
      <NavBar />
      <SearchBar song={song} setSong={setSong} />
      <div className="container">
        <SearchResults tracks={tracks} />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
