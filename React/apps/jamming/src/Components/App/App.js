import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";

class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "Song 1",
          artist: "Brit Spears",
          album: "Call Me Baby",
          id: "123"
        },
        {
          name: "Song 2",
          artist: "Brit Spears",
          album: "Call Me Baby",
          id: "123"
        },
        {
          name: "Song 3",
          artist: "Brit Spears",
          album: "Call Me Baby",
          id: "123"
        }
      ],
      playlistName: "New Playlist",
      playlistTracks: [
        {
          name: "Stronger",
          artist: "Brit Spears",
          album: "Call Me Baby",
          id: "123"
        },
        {
          name: "So Emotional",
          artist: "Brit Spears",
          album: "Call Me Baby",
          id: "123"
        }
      ]
    };

    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
