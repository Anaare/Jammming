import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Playlist from "./components/Playlist";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <div className="container">
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
