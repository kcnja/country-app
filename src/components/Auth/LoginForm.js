import { Fragment, useState } from "react";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import ErrorModal from "./ErrorModal/ErrorModal";
import classes from "./LoginForm.module.css";

const LoginForm = (props) => {
  defineLordIconElement(loadAnimation);
  const [userEmail, setUserEmail] = useState(" ");
  const [userPassword, setUserPassword] = useState(" ");
  const [loginIsValid, setLoginIsValid] = useState(false);

  const loginHandler = (event) => {
    event.preventDefault();
    let password = localStorage.getItem("userPassword").replace(/"/g, "");
    let mail = localStorage.getItem("userEmail").replace(/"/g, "");
    let name = localStorage.getItem("userName").replace(/"/g, "");
    if (!userEmail || !userPassword) {
      setLoginIsValid(true);
    } else if (
      (userEmail.includes("@") || userPassword.trim().length > 6) &&
      userPassword === password &&
      userEmail === mail
    ) {
      setLoginIsValid(false);
      props.onLogin(name);
    } else {
      // setHome(!home);
      setLoginIsValid(true);
    }
  };
  const closeModal = () => {
    setLoginIsValid(false);
  }

  return (
    <Fragment>
      <h1>Welcome Back!</h1>
      <section className={classes.auth}>
        <h2>Login</h2>
        <lord-icon
          src="https://cdn.lordicon.com/rqqkvjqf.json"
          trigger="hover"
          colors="primary:#5faccb,secondary:#5faccb"
          style={{ width: "250px", height: "250px" }}
        ></lord-icon>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              onChange={(event) => {
                setUserEmail(event.target.value);
              }}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              onChange={(event) => {
                setUserPassword(event.target.value);
              }}
            />
          </div>
          <div className={classes.actions}>
            <button type="submit">Login</button>

            <button
              type="button"
              className={classes.toggle}
              onClick={() => {
                props.onSwitch();
              }}
            >
              Create A New Account
            </button>
          </div>
          {loginIsValid && <ErrorModal onClose={closeModal} />}
        </form>
      </section>
    </Fragment>
  );
};

export default LoginForm;
