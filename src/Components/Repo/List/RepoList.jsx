import React from 'react';
import { useParams } from 'react-router-dom';
import Section from '../../Shared/Section/Section';
import SectionList from '../../Shared/Section/List/SectionList';
import SectionItem from '../../Shared/Section/Item/SectionItem';
import getReposList from '../../../API/repos/getRepoList';

const RepoList = () => (
  <Section
    name="Repos"
    href={`https://www.github.com/${useParams().login}?tab=repositories`}
    get={getReposList}
    view={(repos) => (
      <SectionList
        items={repos}
        view={(repo) => <SectionItem item={repo} />}
      />
    )}
    hasHeader
  />
);

export default RepoList;
