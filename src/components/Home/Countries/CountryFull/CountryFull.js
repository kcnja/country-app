import { Fragment, useEffect, useState } from "react";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import ReactDOM from "react-dom";
import classes from "./CountryFull.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} />;
};

const CountryFull = (props) => {
  console.log(props);
  defineLordIconElement(loadAnimation);
  let languageArray = Object.values(props.countryInfo.languages);
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.countryInfo.name.common}</h2>
        </header>

      <table className={classes.table}>
        <tbody>
          <tr>
            <td>Region</td>
            <td>{props.countryInfo.region}</td>
          </tr>
          <tr>
            <td>Population</td>
            <td>{props.countryInfo.population}</td>
          </tr>
          <tr>
            <td>SubRegion</td>
            <td>{props.countryInfo.subregion}</td>
          </tr>
          <tr>
            <td>Languages</td>
            <td>
              <span>
                <ul>
                  {languageArray.map((language) => (
                    <li key={language}>{language}</li>
                  ))}
                </ul>
              </span>
            </td>
          </tr>
          <tr>
            <td>Capital</td>
            <td>{props.countryInfo.capital[0]}</td>
          </tr>
          <tr>
            <td>Coat Of Arms</td>
            <td><img src={props.countryInfo.coatOfArms.png} alt="coatOfArms" /></td>
          </tr>
        </tbody>
        <tr>
          <td>Currencies</td>
          <td>
            <span>
              <ul>
                {Object.values(props.countryInfo.currencies).map((currency) => (
                  <li key={currency.name}>{currency.name}</li>
                ))}
              </ul>
            </span></td>
        </tr>
      </table>
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

export default CountryFull;
