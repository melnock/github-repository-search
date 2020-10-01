import React, {useState, createContext} from 'react';
import App from "../App";
export const RepoSearchContext = createContext({
  searchValue: '',
  sortOption: '',
  searchResults: [],
  searchResultLanguages: {},
  selectedSearchResultLanguage: null
});

// Using a context provider to keep track of the search value and results
export const RepoSearchContextWrapper = () => {

  const [searchValue, setSearchValue] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchResultLanguages, setSearchResultLanguages] = useState({});
  const [selectedSearchResultLanguage, setSelectedSearchResultLanguage] = useState(null);

  return (
    <RepoSearchContext.Provider
      value={{
        searchValue, setSearchValue,
        sortOption, setSortOption,
        searchResults, setSearchResults,
        searchResultLanguages, setSearchResultLanguages,
        selectedSearchResultLanguage, setSelectedSearchResultLanguage
      }}
    >
      <App/>
    </RepoSearchContext.Provider>
  );

};
