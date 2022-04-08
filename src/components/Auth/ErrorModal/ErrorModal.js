import { Fragment } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import classes from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      <div className={classes.modal}>
        <div className={classes.title}>Uh Oh!</div>
        <span className={classes.alert}>
          <FontAwesomeIcon icon={faTriangleExclamation} />
        </span>
        <p>Something's Wrong, Please Check Your Input.</p>
        <footer className={classes.actions}>
          <button
            onClick={() => {
              props.onClose();
            }}
          >
            <lord-icon
              src="https://cdn.lordicon.com/vfzqittk.json"
              trigger="hover"
              colors="primary:#c71f16"
              state="hover-2"
              style={{ width: "20px", height: "20px" }}
            ></lord-icon>
          </button>
        </footer>
      </div>
    </Fragment>
  );
};

export default ErrorModal;
