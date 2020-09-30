import React from 'react';

const RepoSearchBar = ({searchValue, setSearchValue, getSearchResults}) => {
  const handleSetSearchValue = event => {
    const value = event.target.value;
    setSearchValue(value);
  };

  const handleSubmitSearch = () => {
    getSearchResults();
  };

  return (
    <div className="repo-search-bar">
      <h1>Repository Search</h1>
      <input
        type="text"
        onChange={handleSetSearchValue}
        value={searchValue}
        placeholder="Input your search parameters"
      />
      <button onClick={handleSubmitSearch}> SEARCH </button>
    </div>
  );
};

export default RepoSearchBar;
