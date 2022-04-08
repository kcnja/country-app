import { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import classes from "./Countries.module.css";
import CountryFull from "./CountryFull/CountryFull";

const ModalOverlay = (props) => {
  defineLordIconElement(loadAnimation);
  return (
    <CountryFull
      countryInfo={props.countryInfo}
      onClose={() => props.onClose()}
    />
  );
};

const Countries = (props) => {
  const [viewCountryFullInfo, setViewCountryFullInfo] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [fav, setFav] = useState(props.isFavorite);
console.log(fav)
  useEffect(()=> {
    setFav(fav)
  },[fav])

console.log(props);
  const closeModal = () => {
    setViewCountryFullInfo(false);
  };

  const viewCountryInfo = () => {
    setViewCountryFullInfo(true);
    setSelectedCountry(props.country);
  };

  const addToFav = (event) => {
    event.stopPropagation();
    if (fav) {
      props.onRemoveFromFav(props.country.ccn3);
      setFav((prevValue) => !prevValue);
      if(props.type === 'favorite'){
        props.onRefreshFav();
      }
    } else {
      props.onAddToFav(props.country.ccn3);
      setFav((prevValue) => !prevValue);
    }
  };

  return (
    <Fragment>
      {viewCountryFullInfo &&
        ReactDOM.createPortal(
          <ModalOverlay countryInfo={selectedCountry} onClose={closeModal} />,
          document.getElementById("overlay-root")
        )}
      <div className={classes.card} onClick={viewCountryInfo}>
        <h3>{props.country.name.common}</h3>
        <div className={classes.country_min_details}>
          <div className={classes.flag}>
            <img src={props.country.flags.png} alt="flag" />
          </div>
          <div className={classes.country_info}>
            <div>
              <h5>Official Name: </h5>
              <span>{props.country.name.official}</span>
            </div>
            <div>
              <h5>Capital: </h5>
              <span>{props.country.capital}</span>
            </div>
          </div>
        </div>
        <div>
          <button type="button" onClick={addToFav} className={classes.fav_button}>
            {fav ? (
              <div>
                <div>
                  <lord-icon
                    src="https://cdn.lordicon.com/iwaotjbp.json"
                    trigger="hover"
                    style={{ width: "25px", height: "25px" }}
                  ></lord-icon>
                </div>
                <div>Remove from Favorites</div>
              </div>
            ) : (
              <div>
                <div>
                  <lord-icon
                    src="https://cdn.lordicon.com/rjzlnunf.json"
                    colors="primary:#121331,secondary:#08a88a"
                    trigger="hover"
                    style={{ width: "25px", height: "25px" }}
                  ></lord-icon>
                </div>
                <div>Add To Favorites</div>
              </div>
            )}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Countries;
