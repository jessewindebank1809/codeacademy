import React from "react";
import Track from "../Track/Track";

class Tracklist extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => {
          return (
            <Track
              key={track.id}
              name={this.props.track.name}
              artist={this.props.track.artist}
              album={this.props.track.album}
            />
          );
        })}
      </div>
    );
  }
}

export default Tracklist;
