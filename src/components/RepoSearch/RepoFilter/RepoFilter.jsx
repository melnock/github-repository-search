import React, {useContext} from 'react';
import './RepoFilter.scss';
import {RepoSearchContext} from "../../../contextProviders/RepoSearchContextProvider";

// this file builds the dropdown for the filtering by language
const RepoFilter = () => {
  const {
    searchResultLanguages,
    selectedSearchResultLanguage,
    setSelectedSearchResultLanguage,
    setSortByPushedAt,
    sortByPushedAt,
  } = useContext(RepoSearchContext);
  const handleSetSearchFilter = event => {
    let value = event.target.value;
    if (value === "all") {
      value = null;
    }
    setSelectedSearchResultLanguage(value);
  };

  const handleSortByPushedAt = event => {
    let value = event.target.value;
    if (value === "None") {
      value = null;
    }
    setSortByPushedAt(value);
  };

  const sortOptions = [
    <option key='None' value="None">
      None
    </option>,
    <option key={'Most Recent'} value={'Most Recent'}>
      Most Recent
    </option>,
    <option key={'Longest Without Love'} value={'Longest Without Love'}>
      Longest Without Love
    </option>
 ]

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
      <label>Sort by last updated: </label>
      <select
        id="sort-options"
        name="sort-options"
        onChange={handleSortByPushedAt}
        defaultValue={sortByPushedAt}
      >
        {sortOptions}
      </select>
    </div>
  );
};

export default RepoFilter;
