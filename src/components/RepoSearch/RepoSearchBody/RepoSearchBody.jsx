import React, {useContext} from 'react';
import './RepoSearchBody.scss';

import SearchResultLineItem from "../SearchResultLineItem/SearchResultLineItem";
import LoadingState from "../../LoadingState";

import {arrayOf, object} from "prop-types";
import {RepoSearchContext} from "../../../contextProviders/RepoSearchContextProvider";

// this file displays the sorted, filtered results based off the string searched
const RepoSearchBody = ({searchResults}) => {
  const {isLoadingRepos} = useContext(RepoSearchContext);
  if (isLoadingRepos) {
    return (
      <div className="repo-search-result-body">
        <LoadingState/>
      </div>
    );
  }

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
