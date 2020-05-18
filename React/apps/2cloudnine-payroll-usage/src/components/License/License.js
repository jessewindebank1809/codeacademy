import React from "react";

class License extends React.Component {
  render() {
    return (
      <div>
        <p>Org ID: {this.props.record.id}</p>
        <p>License: {this.props.record.name}</p>
        <p>Minimum: {this.props.record.minimum}</p>
        <p>Last Month: {this.props.record.last_month}</p>
      </div>
    );
  }
}

export default License;
