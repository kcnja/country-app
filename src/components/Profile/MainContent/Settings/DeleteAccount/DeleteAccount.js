import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/fontawesome-free-solid";
import classes from "./DeleteAccount.module.css";

const DeleteAccount = (props) => {
  const [loggedOut, setLoggedOut] = useState(false);

  let navigate = useNavigate();
  useEffect(() => {
    if (loggedOut) {
      return navigate("/");
    }
  }, [loggedOut]);

  const deleteAccount = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    localStorage.removeItem("userName");
    localStorage.removeItem("userCountry");
    localStorage.removeItem("userFavCountry");
    localStorage.removeItem("auth");
    setLoggedOut(true);
  };
  return (
    <div className={classes.deleteForm}>
      <h2>Delete My Account!</h2>
      <FontAwesomeIcon className={classes.icon} icon={faTrash} />
      <div className={classes.actions}>
        <button onClick={deleteAccount}>Delete this account</button>
      </div>
    </div>
  );
};

export default DeleteAccount;
