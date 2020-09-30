import React from 'react';
import {Link, withRouter} from "react-router-dom";

const RepoDetail = ({searchResult}) => {
  return (
    <div className="repo-detail-page">
      <Link className="search-result-line-item" to={'/'}> {'<-- Back'} </Link>
      <h3>{searchResult.name}</h3>
      <div className="search-result-details">
        {searchResult.owner ? searchResult.owner.login : 'unknown'}
      </div>
    </div>
  );
};

export default withRouter(RepoDetail);
