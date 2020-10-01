import React, {useContext, useState} from 'react';

import RepoSearchBar from './RepoSearchBar/RepoSearchBar';
import RepoSearchBody from "./RepoSearchBody/RepoSearchBody";
import RepoFilter from "./RepoFilter/RepoFilter";

import { Octokit } from "@octokit/core"
import {RepoSearchContext} from "../../contextProviders/RepoSearchContextProvider";

const RepoSearch = () => {
  const [searchError, setSearchError] = useState(null);
  const {searchValue, sortOption,
    searchResults, setSearchResults,
    setSearchResultLanguages, selectedSearchResultLanguage,
    setSelectedSearchResultLanguage, setIsLoadingRepos
  } = useContext(RepoSearchContext);
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
    if (selectedSearchResultLanguage) {
      return searchResults.filter(result => result.language === selectedSearchResultLanguage);
    } else {
      return searchResults;
    }
  };

  const getSearchResults = async () => {
    if (searchValue.length) {
      const octokit = new Octokit();
      try {
        setIsLoadingRepos(true);
        const resp = await octokit.request('GET /search/repositories',
  {q: searchValue, sort: sortOption});

        setSearchResults(resp.data.items);
        setIsLoadingRepos(false);
        // below: reset the error and selectedSearchResultLanguage on a new search
        setSearchError(null);
        setSelectedSearchResultLanguage(null);
        extractLanguagesFromResults(resp.data.items);
      } catch (error) {
        console.error(error);
        setIsLoadingRepos(false);
        setSearchError('Something went wrong with retrieving your search results. Please try again.');
      }
    } else {
      // verify that the user has input search criteria
      setSearchError('Please enter a valid search value');
    }
  };

  return (
    <div className="repo-search-page">
      <RepoSearchBar
        getSearchResults={getSearchResults}
        searchError={searchError}
      />
      {Boolean(searchResults.length) && <RepoFilter/>
      }
      <RepoSearchBody searchResults={filterSearchResultsByLanguage()}/>
    </div>
  );
};

export default RepoSearch;
