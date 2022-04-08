import classes from "./Sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Sidebar = (props) => {
  return (
    <div className={classes.sidebar}>
      <h3>Settings</h3>
      <nav className={classes.sidebar_nav}>
        <ul>
          <li>
            <button onClick={() => props.onChangeProfile("passwordChange")}>
              Change Pasword
            </button>
          </li>
          <li>
            <button onClick={() => props.onChangeProfile("usernameChange")}>
              Change Username
            </button>
          </li>
          <li>
            <button onClick={() => props.onChangeProfile("deleteAccount")}>
              Delete Account
            </button>
          </li>
          <li>
            <button onClick={() => props.onChangeProfile("my-country")}>
              My Country
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
