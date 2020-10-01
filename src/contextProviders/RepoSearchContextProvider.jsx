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
export const RepoSearchContextWrapper = () => {

  const [searchValue, setSearchValue] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultLanguages, setSearchResultLanguages] = useState({});
  const [selectedSearchResultLanguage, setSelectedSearchResultLanguage] = useState(null);
  const [isLoadingRepos, setIsLoadingRepos] = useState(false);

  return (
    <RepoSearchContext.Provider
      value={{
        searchValue, setSearchValue,
        sortOption, setSortOption,
        searchResults, setSearchResults,
        searchResultLanguages, setSearchResultLanguages,
        selectedSearchResultLanguage, setSelectedSearchResultLanguage,
        isLoadingRepos, setIsLoadingRepos
      }}
    >
      <App/>
    </RepoSearchContext.Provider>
  );

};
