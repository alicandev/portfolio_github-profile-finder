import React from "react";
import { useParams } from "react-router-dom";
import Section from "../Shared/Section/Section";
import ProfileBody from "./Body/ProfileBody";
import { getUser } from "../../API/userAPI";

const Profile = () => {
  const { login } = useParams();
  return (
    <Section
      name={`@${login}`}
      href={`https://www.github.com/${login}`}
      get={getUser(login)}
      view={(user) => <ProfileBody user={user} />}
      hasRoundTop
      hasInSiteLink
    />
  );
};

export default Profile;
