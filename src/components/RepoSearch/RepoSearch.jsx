import React, {useState} from 'react';

import RepoSearchBar from './RepoSearchBar/RepoSearchBar';
import RepoSearchBody from "./RepoSearchBody/RepoSearchBody";

import { Octokit } from "@octokit/core"

const RepoSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchError, setSearchError] = useState(null);
  const [sortOption, setSortOption] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchValue);

  const getSearchResults = async () => {
    if (searchValue.length) {
      const octokit = new Octokit();
      try {
        const resp = await octokit.request('GET /search/repositories',
  {q: searchValue, sort: sortOption});
        console.log(resp.data);
        setSearchResults(resp.data.items);
        setSearchError(null);
      } catch (error) {
        setSearchError('something went wrong with retrieving your search results');
      }
    } else {
      setSearchError('must enter a valid search value');
    }
  };

  return (
    <div className="repo-search-page">
      <RepoSearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setSortOption={setSortOption}
        getSearchResults={getSearchResults}
        searchError={searchError}
      />
      <RepoSearchBody searchResults={searchResults}/>
    </div>
  );
};

export default RepoSearch;
