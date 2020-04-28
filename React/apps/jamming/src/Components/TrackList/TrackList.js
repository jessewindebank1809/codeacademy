import React from "react";
import Track from "../Track/Track";

class Tracklist extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => {
          return <Track key={track.id} />;
        })}
      </div>
    );
  }
}

export default Tracklist;
