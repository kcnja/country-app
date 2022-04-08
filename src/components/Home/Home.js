import { Fragment, useState } from "react";
import Favorites from "./Favorites/Favorites";
import classes from "./Home.module.css";
import Regions from "./Regions/Regions";

const Home = (props) => {
  const [viewFlag, setViewFlag] = useState("regions");

  const getFavoriteCountryList = () => {
    if (
      localStorage.getItem("userFavCountry") === null ||
      localStorage.getItem("userFavCountry").length === 0
    ) {
      return [];
    }
    let favCountryList = localStorage
      .getItem("userFavCountry")
      .replace(/"/g, "");
    let favCountryFullDetails = props.fullCountryList.filter((item) => {
      return favCountryList.includes(item.ccn3);
    });
    return favCountryFullDetails;
  };

  return (
    <Fragment>
      <main>
        <header>
          <h1>Welcome!</h1>
          <nav>
            <button
              className={classes.nav_button}
              onClick={() => setViewFlag("regions")}
            >
              Regions
            </button>
            <button
              className={classes.nav_button}
              onClick={() => setViewFlag("favorites")}
            >
              Favorites
            </button>
          </nav>
        </header>
      </main>
      <div>
        {viewFlag === "regions" ? (
          <Regions
            regionList={props.regionList}
            countryList={props.fullCountryList}
          />
        ) : (
          <Favorites countryList={getFavoriteCountryList()} />
        )}
      </div>
    </Fragment>
  );
};

export default Home;
