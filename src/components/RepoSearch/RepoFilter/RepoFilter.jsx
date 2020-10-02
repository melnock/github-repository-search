import React, {useContext} from 'react';
import './RepoFilter.scss';
import {RepoSearchContext} from "../../../contextProviders/RepoSearchContextProvider";

// this file builds the dropdown for the filtering by language
const RepoFilter = () => {
  const {
    searchResultLanguages,
    selectedSearchResultLanguage,
    setSelectedSearchResultLanguage
  } = useContext(RepoSearchContext);
  const handleSetSearchFilter = event => {
    let value = event.target.value;
    if (value === "all") {
      value = null;
    }
    setSelectedSearchResultLanguage(value);
  };

  const SearchFilters = Object.keys(searchResultLanguages).map( language => {
    return (
      <option key={language} value={language}>
        {language}
      </option>
    );
  });

  // default to selecting all languages, which would be a null filter
  SearchFilters.unshift(<option key="all" value="all">All</option>);

  return (
    <div className="repo-search-filters">
      <label>Filter by language: </label>
      <select
        id="filter-options"
        name="filter-options"
        onChange={handleSetSearchFilter}
        defaultValue={selectedSearchResultLanguage}
      >
        {SearchFilters}
      </select>
    </div>
  );
};

export default RepoFilter;
