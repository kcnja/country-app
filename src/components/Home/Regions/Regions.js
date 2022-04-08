import { Fragment, useState } from "react";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
import Countries from "../Countries/Countries";
import Pagination from "../Countries/Pagination/Pagination";
import classes from "./Regions.module.css";

const Regions = (props) => {
  const [region, setRegion] = useState(false);
  const [regionWiseList, setRegionWiseList] = useState([]);

  defineLordIconElement(loadAnimation);

  const selectRegion = (event) => {
    let countryList = props.countryList.filter(
      (country) => country.region === event.target.value
    );
    setRegionWiseList(countryList);
    setRegion(true);
  };
  let maxPage = Math.ceil(regionWiseList.length / 10);
  return (
    <Fragment>
      <div className={classes.grid_container}>
        <div className={classes.item1}>
          <div className={classes.regionlist}>
            {props.regionList.map((item) => (
              <button key={item} value={item} onClick={selectRegion}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className={classes.item2}>
          <div className={classes.countrygrid}>
            {region ? (
              // ? regionWiseList.map((country) => (
              <Pagination
                type="region"
                countryList={regionWiseList}
                maxPage={maxPage}
                pageLimit={maxPage}
                dataLimit={10}
              />
            ) : (
              <div className={classes.empty}>
                <lord-icon
                  src="https://cdn.lordicon.com/bhcvxmsz.json"
                  trigger="loop"
                  colors="primary:#00FFC5,secondary:#0B0033"
                  style={{ width: "250px", height: "250px" }}
                ></lord-icon>
                <h3>Nothing Here!</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Regions;
