import React, { Fragment, useState } from "react";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import Sidebar from "./Sidebar/Sidebar";
import MainContent from "./MainContent/MainContent";
import classes from './Profile.module.css'

const Profile = (props) => {
  defineLordIconElement(loadAnimation);

  const [profileType, setProfileType] = useState('passwordChange');

  const profileChangeHandler = (type) => {
    setProfileType(type);
  }
  return (
    <div className={classes.profile}>
      <Sidebar
      onChangeProfile = {profileChangeHandler}
      />
      <MainContent type={profileType} country={props.countryDetails} />
    </div>
  );
};

export default Profile;
