import { Fragment, useEffect, useState } from "react";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import classes from "./RegisterForm.module.css";

const RegisterForm = (props) => {
  defineLordIconElement(loadAnimation);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userCountry, setUserCountry] = useState("");

  const [registerIsValid, setRegisterIsValid] = useState(false);

  function registerHandler(e) {
    e.preventDefault();

    if (!userName || !userEmail || !userPassword || !userCountry) {
      setRegisterIsValid(true);
    } else {
      setRegisterIsValid(false);
      localStorage.setItem("userEmail", JSON.stringify(userEmail));
      localStorage.setItem("userPassword", JSON.stringify(userPassword));
      localStorage.setItem("userName", JSON.stringify(userName));
      localStorage.setItem("userCountry", JSON.stringify(userCountry));
      localStorage.setItem("userFavCountry", JSON.stringify([]));
      props.onRegister(userName);
    }
  }

  return (
    <Fragment>
      <h1>Welcome</h1>
      <section className={classes.auth}>
        <h2>Sign Up</h2>
        <lord-icon
          src="https://cdn.lordicon.com/dxjqoygy.json"
          trigger="hover"
          colors="primary:#5faccb,secondary:#5faccb"
          style={{ width: "250px", height: "250px" }}
        ></lord-icon>
        <i className="fa fa-lock" aria-hidden="true"></i>
        <form onSubmit={registerHandler}>
          <div className={classes.control}>
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Full Name"
              name="name"
              onChange={(event) => setUserName(event.target.value)}
            />
          </div>

          <div className={classes.control}>
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setUserEmail(event.target.value)}
            />
          </div>

          <div className={classes.control}>
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setUserPassword(event.target.value)}
            />
          </div>

          <div className={classes.control}>
            <label>Choose Your Country</label>
            <select
              name="country"
              onChange={(event) => setUserCountry(event.target.value)}
            >
              <option>Select</option>
              {props.countryNames.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <div className={classes.actions}>
            <button type="submit">Register</button>
            <button
              type="button"
              className={classes.toggle}
              onClick={() => {
                props.onSwitch();
              }}
            >
              Login with existing account
            </button>
          </div>
          {registerIsValid && (
            <div color="primary" variant="danger">
              I got it you are in hurry! But every Field is important!
            </div>
          )}
        </form>
      </section>
    </Fragment>
  );
};

export default RegisterForm;
