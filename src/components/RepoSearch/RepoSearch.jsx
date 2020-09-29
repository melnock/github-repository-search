import React, {useState} from 'react';

const RepoSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="repo-search-page">
      <RepoSearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
      <RepoSearchBody searchResults={searchResults}/>
    </div>
  );
};

export default RepoSearch;
