import React from 'react';
import {Link, withRouter} from "react-router-dom";
import {shape, number, string} from 'prop-types';
import './SearchResultLineItem.scss';

// this file makes the individual repo line items
const SearchResultLineItem = ({searchItem}) => {
  return (
    <div className="search-result-line-item">
      <Link
        className="search-result-link"
        to={{pathname:`/repo/${searchItem.id}`, state: {searchItem}}}>
        <h3>{searchItem.name}</h3>
        <div className="search-result-details">
          Owner: {searchItem.owner && searchItem.owner.login}
        </div>
        <div className="search-result-details">
          Stars: {searchItem.stargazers_count}
        </div>
        <div className="search-result-details">
          Pushed At: {searchItem.pushed_at}
        </div>
      </Link>
    </div>
  );
};

SearchResultLineItem.propType = {
  searchItem: shape({
    id: number,
    name: string,
    stargazers_count: number,
    owner: {
      login: string
    }
  })
};

export default withRouter(SearchResultLineItem);
