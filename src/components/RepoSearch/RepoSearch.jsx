import React, {useContext, useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import RepoSearchBar from './RepoSearchBar/RepoSearchBar';
import RepoSearchBody from "./RepoSearchBody/RepoSearchBody";
import RepoFilter from "./RepoFilter/RepoFilter";

import { Octokit } from "@octokit/core"
import {RepoSearchContext} from "../../contextProviders/RepoSearchContextProvider";

const RepoSearch = () => {
  const [searchError, setSearchError] = useState(null);
  const {searchValue, sortOption, setSearchValue,
    searchResults, setSearchResults, sortByPushedAt,
    setSearchResultLanguages, selectedSearchResultLanguage,
    setSelectedSearchResultLanguage, setIsLoadingRepos
  } = useContext(RepoSearchContext);
  const history = useHistory();
  const {sentSearchValue} = useParams();

  const setSearchValueOnMount = () => {
    setSearchValue(sentSearchValue);
    getSearchResults(sentSearchValue);
  };

  // if a user inputs a route with a searchValue, set it on mount and get results
  useEffect(() => {
    if (sentSearchValue) {
      setSearchValueOnMount()
    }
  }, []);

  //when we get a new batch of results, we should determine which languages are available
  // to us to filter by
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
  let searchResultsFiltered = searchResults
    if (selectedSearchResultLanguage) {
      searchResultsFiltered =  searchResults.filter(result => result.language === selectedSearchResultLanguage);
    }

    if (sortByPushedAt !== 'None') {
      searchResultsFiltered.sort((a, b) => {
        const dateA = new Date(a.pushed_at)
        const dateB = new Date(b.pushed_at)
        if (sortByPushedAt === 'Most Recent') {
          return dateB - dateA
        }
        if (sortByPushedAt === 'Longest Without Love') {
          return dateA - dateB
        }
      })
    }

    return searchResultsFiltered;
  };

  const getSearchResults = async (searchValueOverride = null) => {
    if (searchValue.length || (searchValueOverride && searchValueOverride.length)) {
      const octokit = new Octokit();
      try {
        const searchValueForApiRequest = searchValueOverride ? searchValueOverride : searchValue;
        setIsLoadingRepos(true);
        const resp = await octokit.request('GET /search/repositories',
  {q: searchValueForApiRequest, sort: sortOption});

        setSearchResults(resp.data.items);
        setIsLoadingRepos(false);
        // below: reset the error and selectedSearchResultLanguage on a new search
        setSearchError(null);
        setSelectedSearchResultLanguage(null);
        extractLanguagesFromResults(resp.data.items);
        if (!searchValueOverride) {
          history.push('/searchResult/' + searchValue);
        }
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
      {Boolean(searchResults.length) && <RepoFilter/>}
      <RepoSearchBody searchResults={filterSearchResultsByLanguage()}/>
    </div>
  );
};

export default RepoSearch;
