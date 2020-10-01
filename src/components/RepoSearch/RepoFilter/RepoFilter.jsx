import React, {useContext} from 'react';
import './RepoFilter.scss';
import {RepoSearchContext} from "../../../contextProviders/RepoSearchContextProvider";

const RepoFilter = () => {
  const {
    searchResultLanguages,
    selectedSearchResultLanguage,
    setSelectedSearchResultLanguage
  } = useContext(RepoSearchContext);
  const handleSetSearchFilter = event => {
    const value = event.target.value;
    setSelectedSearchResultLanguage(value);
  };

  const SearchFilters = Object.keys(searchResultLanguages).map( language => {
    return (
      <option key={language} value={language} selected={selectedSearchResultLanguage === language}>
        {language}
      </option>
    );
  });

  // default to selecting all languages, which would be a null filter
  SearchFilters.unshift(<option value={null} selected={!selectedSearchResultLanguage}>All</option>);

  return (
    <div className="repo-search-filters">
      <label>Filter by language: </label>
      <select id="filter-options" name="filter-options" onChange={handleSetSearchFilter}>
        {SearchFilters}
      </select>
    </div>
  );
};

export default RepoFilter;
