import React from 'react';
import './RepoFilter.scss';
import {objectOf, string, func} from "prop-types";

const RepoFilter = ({
  searchResultLanguages,
  setSelectedSearchResultLanguage
}) => {
  const handleSetSearchFilter = event => {
    const value = event.target.value;
    setSelectedSearchResultLanguage(value);
  };

  const SearchFilters = Object.keys(searchResultLanguages).map( language => {
    return (
      <option value={language}>{language}</option>
    );
  });

  return (
    <div className="repo-search-filters">
      <select id="filter-options" name="filter-options" onChange={handleSetSearchFilter}>
        {SearchFilters}
      </select>
    </div>
  );
};

RepoFilter.propTypes = {
  searchResultLanguages: objectOf(string).isRequired,
  setSelectedSearchResultLanguage: func.isRequired
};

export default RepoFilter;
