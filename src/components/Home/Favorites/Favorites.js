import { Fragment, useState } from "react";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import classes from "./Favorites.module.css";
import Pagination from "../Countries/Pagination/Pagination";

const Favorites = (props) => {
  defineLordIconElement(loadAnimation);
  // const selectRegion = (event) => {
  //   let countryList = props.countryList.filter(
  //     (country) => country.region === event.target.value
  //   );
  //   setRegionWiseList(countryList);
  //   setRegion(true);
  // };
  let maxPage = Math.ceil(props.countryList.length / 10);
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.countrygrid}>
          {props.countryList.length === 0 ? (
            <div className={classes.empty}>
              <lord-icon
                src="https://cdn.lordicon.com/bhcvxmsz.json"
                trigger="loop"
                colors="primary:#00FFC5,secondary:#0B0033"
                style={{ width: "250px", height: "250px" }}
              ></lord-icon>
              <h3>Nothing Here!</h3>
            </div>
          ) : (
            <Pagination
              type="favorite"
              countryList={props.countryList}
              maxPage={maxPage}
              pageLimit={maxPage}
              dataLimit={10}
            />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Favorites;
