import React from 'react';
import './RepoSearchBody.scss';

import SearchResultLineItem from "../SearchResultLineItem/SearchResultLineItem";
import {arrayOf, object} from "prop-types";

const RepoSearchBody = ({searchResults}) => {
  const SearchResults = searchResults.map( searchItem => {
    return (<SearchResultLineItem key={searchItem.id} searchItem={searchItem}/>);
  });

  return (
    <div className="repo-search-result-body">
      {SearchResults}
    </div>
  );
};

RepoSearchBody.propTypes = {
  searchResults: arrayOf(object).isRequired
};

export default RepoSearchBody;
