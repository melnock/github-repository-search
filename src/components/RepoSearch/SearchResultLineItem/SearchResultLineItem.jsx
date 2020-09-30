import React from 'react';
import {Link, withRouter} from "react-router-dom";

const SearchResultLineItem = ({searchResult}) => {
  return (
    <Link className="search-result-line-item" to={`/repo/${searchResult.id}`}>
      <h3>{searchResult.name}</h3>
      <div className="search-result-details">
        {searchResult.owner && searchResult.owner.login}
      </div>
    </Link>
  );
};

export default withRouter(SearchResultLineItem);
