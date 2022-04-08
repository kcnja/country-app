import classes from "./PasswordChange.module.css";
import { useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/fontawesome-free-solid";

const PasswordChange = (props) => {
  const [userNewPassword, setUserNewPassword] = useState(" ");
  const [userPassword, setUserPassword] = useState(" ");
  const [errorFlag, setErrorFlag] = useState(false);

  let navigate = useNavigate();
  console.log(userNewPassword, userPassword);
  const loginHandler = (event) => {
    console.log("login handler");
    event.preventDefault();
    let userOldPassword = localStorage
      .getItem("userPassword")
      .replace(/"/g, "");
    if (
      !(userOldPassword === userPassword) ||
      !(userNewPassword.trim().length > 6)
    ) {
      setErrorFlag(true);
    } else if (
      userPassword === userOldPassword &&
      userNewPassword.trim().length > 6
    ) {
      setErrorFlag(false);

      localStorage.setItem("userPassword", JSON.stringify(userNewPassword));

      localStorage.removeItem("auth");
      return navigate("/");
    }
  };
  return (
    <Fragment>
      <section className={classes.auth}>
        <h2>Change Password</h2>
        <FontAwesomeIcon className={classes.icon} icon={faKey} />
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="oldPassword">Your Old Password</label>
            <input
              type="password"
              id="old-password"
              required
              onChange={(event) => {
                setUserPassword(event.target.value);
              }}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="newPassword">Your New Password</label>
            <input
              type="password"
              id="new-password"
              required
              onChange={(event) => {
                setUserNewPassword(event.target.value);
              }}
            />
          </div>
          <div className={classes.actions}>
            <button type="submit">Change Password</button>
          </div>
        </form>
        {errorFlag && <alert> Uh-Oh!</alert>}
      </section>
    </Fragment>
  );
};

export default PasswordChange;
