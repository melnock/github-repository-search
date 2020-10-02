import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import {RepoSearchContextWrapper} from "./contextProviders/RepoSearchContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RepoSearchContextWrapper/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
