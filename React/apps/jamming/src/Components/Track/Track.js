import React from "react";

class Track extends React.Component {
  renderAction() {
    if (this.props.onClick(this.props.value) === true) {
      <button>-</button>;
    } else {
      <button>+</button>;
    }
  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} | {this.props.track.album}
          </p>
        </div>
        <button className="Track-action">+ or -</button>
      </div>
    );
  }
}

export default Track;
