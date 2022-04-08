import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Loader.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const Loader = () => {
  defineLordIconElement(loadAnimation);
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      <div className={classes.modal}>
        <lord-icon
          src="https://cdn.lordicon.com/ulhdumaq.json"
          trigger="loop"
          colors="primary:#481620,secondary:#00FFC5"
          style={{ width: "100px", height: "100px" }}
        ></lord-icon>
      </div>
    </Fragment>
  );
};

export default Loader;
