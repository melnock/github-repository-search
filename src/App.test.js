import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import RepoSearch from "./components/RepoSearch/RepoSearch";

test('renders a search button on load', () => {
  const { getByPlaceholderText } = render(<RepoSearch />);
  const searchInput = getByPlaceholderText(/Input your search parameters/i);
  expect(searchInput).toBeInTheDocument();
});

test('displays an error when no input value on search', () => {
  const { getByText } = render(<RepoSearch />);
  fireEvent.click(getByText('SEARCH'));
  const errorMessage = getByText(/Please enter a valid search value/i)
  expect(errorMessage).toBeInTheDocument();
});
