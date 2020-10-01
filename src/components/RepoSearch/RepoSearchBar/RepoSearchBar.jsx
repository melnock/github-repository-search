import React from 'react';
import './RepoSearchBar.scss';

const RepoSearchBar = ({
   searchValue,
   setSearchValue,
   setSortOption,
   getSearchResults,
   searchError
}) => {
  const handleSetSearchValue = event => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleSetSortOption = event => {
    const value = event.target.value;
    setSortOption(value);
  };

  const handleSubmitSearch = () => {
    getSearchResults();
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
        <option value="" selected>Best Match</option>
        <option value="stars">Stars</option>
      </select>
      <button onClick={handleSubmitSearch}> SEARCH </button>
    </div>
  );
};

export default RepoSearchBar;
