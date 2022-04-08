import { Fragment } from "react";
import { Link } from "react-router-dom";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link to="/">
          <div className={classes.logo}>Home</div>
        </Link>
        <nav>
          <ul>
            {(!props.isProfile && props.isAuth) && (
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            )}
            {(props.isAuth && !props.isProfile) && (
              <li>
                <button onClick={props.onLogout}>Logout</button>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
