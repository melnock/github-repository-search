import React from 'react';

import SearchResultLineItem from "../SearchResultLineItem/SearchResultLineItem";

const RepoSearchBody = ({searchResults}) => {
  const SearchResults = searchResults.map( searchItem => {
    return (<SearchResultLineItem searchItem={searchItem}/>);
  });

  return (
    <div className="repo-search-result-body">
      {SearchResults}
    </div>
  );
};

export default RepoSearchBody;
