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
          <h3>Track Name</h3>
          <p>Track Artist | Track Album</p>
        </div>
        <button className="Track-action">+ or -</button>
      </div>
    );
  }
}

export default Track;
