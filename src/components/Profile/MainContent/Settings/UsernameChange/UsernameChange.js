import { Fragment, useState } from "react";
import classes from "./UsernameChange.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/fontawesome-free-solid";
import ErrorModal from "../../../../Auth/ErrorModal/ErrorModal";

const UsernameChange = () => {
  const [userNewName, setUserNewName] = useState(" ");
  const [userName, setUserName] = useState(" ");
  const [errorFlag, setErrorFlag] = useState(false);

  console.log(errorFlag);
  console.log(userNewName, userName);

  const loginHandler = (event) => {
    event.preventDefault();
    let userOldName = localStorage.getItem("userName").replace(/"/g, "");

    if (!(userOldName === userName)) {
      setErrorFlag(true);
    } else if (userName === userOldName && userNewName.includes("@")) {
      setErrorFlag(false);
      localStorage.setItem("userName", JSON.stringify(userNewName));
    }
  };

  const closeModal = () => {
    setErrorFlag(false);
  }
  return (
    <Fragment>
      <section className={classes.auth}>
        <h2>Change Username</h2>
        <FontAwesomeIcon className={classes.icon} icon={faUser} />
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="oldName">Your Old Username</label>
            <input
              type="text"
              id="old-name"
              required
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="newName">Your New Username</label>
            <input
              type="text"
              id="new-name"
              required
              onChange={(event) => {
                setUserNewName(event.target.value);
              }}
            />
          </div>
          <div className={classes.actions}>
            <button type="submit">Change Username</button>
          </div>
        </form>
        {errorFlag && <ErrorModal onClose={closeModal} />}
      </section>
    </Fragment>
  );
};

export default UsernameChange;
