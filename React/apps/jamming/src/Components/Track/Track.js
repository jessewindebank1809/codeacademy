import React from "react";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }
  renderAction() {
    if (this.props.onClick(this.props.value) === true) {
      <button onClick={this.props.onRemove}>-</button>;
    } else {
      <button onClick={this.props.addTrack}>+</button>;
    }
  }

  addTrack() {
    this.props.track = this.props.onAdd;
  }

  removeTrack() {
    this.props.track = this.props.onRemove;
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
