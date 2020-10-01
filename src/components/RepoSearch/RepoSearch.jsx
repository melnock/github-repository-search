import React, {useState} from 'react';

import RepoSearchBar from './RepoSearchBar/RepoSearchBar';
import RepoSearchBody from "./RepoSearchBody/RepoSearchBody";
import RepoFilter from "./RepoFilter/RepoFilter";

import { Octokit } from "@octokit/core"

const RepoSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchError, setSearchError] = useState(null);
  const [sortOption, setSortOption] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultLanguages, setSearchResultLanguages] = useState({});
  const [selectedSearchResultLanguage, setSelectedSearchResultLanguage] = useState(null);

  // when we get a new batch of results, we should determine which languages are available to us to filter by
  const extractLanguagesFromResults = (resultItems) => {
    const languagesObj = {};
    resultItems.forEach(result => {
      // verify that we don't input duplicates and that we don't input nulls
      if (!languagesObj[result.language] && result.language) {
        languagesObj[result.language] = result.language
      }
    });
    setSearchResultLanguages(languagesObj);
  };

  const filterSearchResultsByLanguage = () => {
    return searchResults.filter(result => result.language === selectedSearchResultLanguage);
  };

  const getSearchResults = async () => {
    if (searchValue.length) {
      const octokit = new Octokit();
      try {
        const resp = await octokit.request('GET /search/repositories',
  {q: searchValue, sort: sortOption});

        setSearchResults(resp.data.items);
        // below: reset the error and selectedSearchResultLanguage on a new search
        setSearchError(null);
        setSelectedSearchResultLanguage(null);
        extractLanguagesFromResults(resp.data.items);
      } catch (error) {
        console.error(error);
        setSearchError('Something went wrong with retrieving your search results. Please try again.');
      }
    } else {
      // verify that the user has input search criteria
      setSearchError('Please enter a valid search value');
    }
  };

  const filteredSearchResults = selectedSearchResultLanguage ?
    filterSearchResultsByLanguage() :
    searchResults;

  return (
    <div className="repo-search-page">
      <RepoSearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setSortOption={setSortOption}
        getSearchResults={getSearchResults}
        searchError={searchError}
      />
      {Boolean(searchResults.length) && <RepoFilter
        searchResultLanguages={searchResultLanguages}
        setSelectedSearchResultLanguage={setSelectedSearchResultLanguage}
        />
      }
      <RepoSearchBody searchResults={filteredSearchResults}/>
    </div>
  );
};

export default RepoSearch;
