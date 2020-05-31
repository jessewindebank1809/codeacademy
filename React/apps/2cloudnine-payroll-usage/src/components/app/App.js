import React from "react";
import logo from "../app/2cloudnine logo cropped.png";
import "./App.css";
import "../License/License.css";
import retrieveLicenses from "../Salesforce/Salesforce";
import License from "../License/License";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.retrieveLicenses = this.retrieveLicenses.bind(this);

    this.state = {
      records: []
    };
  }

  retrieveLicenses(records) {
    retrieveLicenses().then(records => {
      this.setState({
        records: records
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>2cloudnine payroll</p> */}
          <div className="App-Body">
            {this.state.records.map((record, key) => (
              <License record={record} key={record.id} />
            ))}
          </div>
          <button onClick={this.retrieveLicenses}>Refresh</button>
        </div>
      </div>
    );
  }
}

export default App;
