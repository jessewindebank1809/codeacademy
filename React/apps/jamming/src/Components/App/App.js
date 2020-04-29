import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

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
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    if (
      this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)
    ) {
      let newTrack = {
        name: track.name,
        artist: track.artist,
        album: track.album,
        id: track.id
      };
      return this.setState({
        playlistTracks: [...this.state.playlistTracks, newTrack]
      });
    }
  }

  removeTrack = track => {
    const items = this.state.playlistTracks.filter(
      item => item.id !== track.id
    );
    this.setState({ playlistTracks: items });
  };

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    const trackURIs = [this.state.playlistTracks.map(item => item.id)];
  }

  search(searchTerm) {
    console.log(searchTerm);
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
