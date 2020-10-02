import React, {useContext} from 'react';
import {string, func} from 'prop-types';
import './RepoSearchBar.scss';
import {RepoSearchContext} from "../../../contextProviders/RepoSearchContextProvider";

// this file builds the components for the searching and sorting
// sorting options are by best match or by number of stars
const RepoSearchBar = ({
   getSearchResults,
   searchError
}) => {
  const {
    searchValue,
    setSearchValue,
    setSortOption
  } = useContext(RepoSearchContext);
  const handleSetSearchValue = event => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleSetSortOption = event => {
    const value = event.target.value;
    setSortOption(value);
  };

  return (
    <div className="repo-search-bar">
      <h1>Repository Search</h1>
      {searchError && <p className="searching-error">{searchError}</p>}
      <input
        type="text"
        onChange={handleSetSearchValue}
        value={searchValue}
        placeholder="Input your search parameters"
      />
      <select id="sort-options" name="sort-options" onChange={handleSetSortOption}>
        <option value="">Best Match</option>
        <option value="stars">Stars</option>
      </select>
      <button onClick={getSearchResults}> SEARCH </button>
    </div>
  );
};

RepoSearchBar.propTypes = {
  getSearchResults: func.isRequired,
  searchError: string
};

RepoSearchBar.defaultProps = {
  searchError: null
};

export default RepoSearchBar;
