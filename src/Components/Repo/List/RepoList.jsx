import React from "react";
import { useParams } from "react-router-dom";
import Section from "../../Shared/Section/Section";
import SectionList from "../../Shared/Section/List/SectionList";
import SectionItem from "../../Shared/Section/Item/SectionItem";
import { getRepoList } from "../../../API/repoAPI";

const RepoList = () => (
  <Section
    name="Repos"
    href={`https://www.github.com/${useParams().login}?tab=repositories`}
    get={getRepoList}
    view={(repos) => (
      <SectionList
        items={repos}
        view={(repo) => <SectionItem item={repo} />}
      />
    )}
  />
);

export default RepoList;
