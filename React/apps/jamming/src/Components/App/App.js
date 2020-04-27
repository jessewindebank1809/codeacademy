import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component() {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: value,
          artist: value,
          album: value,
          id: value
        },
        {
          name: value,
          artist: value,
          album: value,
          id: value
        },
        {
          name: value,
          artist: value,
          album: value,
          id: value
        }
      ]
    };

    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          //-- Add a SearchBar component -->
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
