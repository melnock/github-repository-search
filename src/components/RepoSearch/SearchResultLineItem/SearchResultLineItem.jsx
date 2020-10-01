import React from 'react';
import {Link, withRouter} from "react-router-dom";
import './SearchResultLineItem.scss';

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
      </Link>
    </div>
  );
};

export default withRouter(SearchResultLineItem);
