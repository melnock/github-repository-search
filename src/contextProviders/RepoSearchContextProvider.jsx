import React, {useState, createContext} from 'react';
import App from "../App";
export const RepoSearchContext = createContext({
  searchValue: '',
  sortOption: '',
  searchResults: [],
  searchResultLanguages: {},
  selectedSearchResultLanguage: null,
  isLoadingRepos: false
});

// Using a context provider to keep track of the search value and results
// through page changes, without the overhead of redux
export const RepoSearchContextWrapper = () => {

  const [searchValue, setSearchValue] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultLanguages, setSearchResultLanguages] = useState({});
  const [selectedSearchResultLanguage, setSelectedSearchResultLanguage] = useState(null);
  const [sortByPushedAt, setSortByPushedAt] = useState('None');
  const [isLoadingRepos, setIsLoadingRepos] = useState(false);

  return (
    <RepoSearchContext.Provider
      value={{
        searchValue, setSearchValue,
        sortOption, setSortOption,
        searchResults, setSearchResults,
        sortByPushedAt, setSortByPushedAt,
        searchResultLanguages, setSearchResultLanguages,
        selectedSearchResultLanguage, setSelectedSearchResultLanguage,
        isLoadingRepos, setIsLoadingRepos
      }}
    >
      <App/>
    </RepoSearchContext.Provider>
  );

};
