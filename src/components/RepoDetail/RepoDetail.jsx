import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {object} from 'prop-types';
import './RepoDetail.scss';

const RepoDetail = ({location}) => {
  const {searchItem} = location.state;
  return (
    <div className="repo-detail-page">
      <div className="repo-detail-header">
        <Link className="back-button" to={'/'}> {'<-- Back'} </Link>
        <h3>{searchItem.name}</h3>
      </div>
      <div className="search-result-details">
        <img alt={searchItem.owner.login + 'avatar'} src={searchItem.owner.avatar_url}/>
        <p className="repo-detail">
          Owner: {searchItem.owner ? searchItem.owner.login : 'unknown'}
        </p>
        <p className="repo-detail"> Description: {searchItem.description} </p>
        <p className="repo-detail"> Stars: {searchItem.stargazers_count} </p>
        <p className="repo-detail"> Language: {searchItem.language} </p>
      </div>
    </div>
  );
};

RepoDetail.propTypes = {
  location: object.isRequired
};

export default withRouter(RepoDetail);
