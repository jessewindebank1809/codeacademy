import React from "react";
import "./App.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

class Business extends React.Component {
  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img
            src="https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg"
            alt=""
          />
        </div>
        <h2>{Business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{Business.address}</p>
            <p>{Business.city}</p>
            <p>
              {Business.state} {Business.zipCode}
            </p>
          </div>
          <div className="Business-reviews">
            <h3>{Business.category}</h3>
            <h3 className="rating">{Business.rating} stars}</h3>
            <p>{Business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

const businesses = [
  { Business },
  { Business },
  { Business },
  { Business },
  { Business },
  { Business }
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}

export default App;
