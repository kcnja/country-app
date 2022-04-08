import { useState } from "react";
import classes from "./MainContent.module.css";
import MyCountry from "./Settings/MyCountry/MyCountry";
import DeleteAccount from "./Settings/DeleteAccount/DeleteAccount";
import PasswordChange from "./Settings/PasswordChange/PasswordChange";
import UsernameChange from "./Settings/UsernameChange/UsernameChange";

const MainContent = (props) => {
  return (
    <section className={classes.main_content}>
      {props.type === 'passwordChange' && (<PasswordChange />)}
      {props.type === 'usernameChange' && (<UsernameChange />)}
      {props.type === 'my-country' && (<MyCountry myCountry={props.country} />)}
      {props.type === 'deleteAccount' && (<DeleteAccount />)}
      
    </section>
  );
};

export default MainContent;
