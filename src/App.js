import React from 'react';
import './App.scss';
import {Route, withRouter} from 'react-router-dom';
import RepoSearch from "./components/RepoSearch/RepoSearch";
import RepoDetail from "./components/RepoDetail/RepoDetail";

function App() {
  return (
    <div className="App">
      <Route path="/" component={RepoSearch}/>
      <Route path="/repo/:id" component={RepoDetail}/>
    </div>
  );
}

export default withRouter(App);
