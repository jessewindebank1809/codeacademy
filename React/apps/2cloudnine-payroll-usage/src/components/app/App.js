import React from "react";
// import logo from './logo.svg';
import "./App.css";
import retrieveLicenses from "../Salesforce/Salesforce";
import License from "../License/License";

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
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>2cloudnine payroll</p>
          <button onClick={this.retrieveLicenses}>Login</button>
          {this.state.records.map((record, key) => (
            <License record={record} key={record.id} />
          ))}
        </header>
        <body className="App-body">text here</body>
      </div>
    );
  }
}

export default App;
