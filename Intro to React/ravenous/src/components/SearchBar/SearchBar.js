import React from "react";
import "./SearchBar.css";

const sortByOptions = {
  "Best Match": "best_match",
  "Highest Rated": "highest_rated",
  "Most Reviewed": "most_reviewed"
};

class SearchBar extends React.Component {
  renderSortByOptions(sortByOptions) {
    return Object.keys(sortByOptions).map(sortByOption => {
      const sortByOptionValue = sortByOptions[sortByOption];
      <li key="sortByOptionValue">{sortByOption}</li>;
    });
  }

  render() {
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>renderSortByOptions()</ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div className="SearchBar-submit">
        <a>Let's Go</a>
      </div>
    </div>;
  }
}

export default SearchBar;
