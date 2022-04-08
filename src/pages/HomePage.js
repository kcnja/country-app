import Home from "../components/Home/Home";
import { useState, useEffect, Fragment } from "react";
import AuthPage from "./AuthPage";
import Layout from "../components/Layout/Layout";
import Loader from "../components/Loader/Loader";

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountryList(data);
        setLoader(true);
      });
  }, []);

  let countryName = countryList.map((country) => country.name.common);
  let regions = countryList.map((country) => country.region);
  let regionList = [...new Set(regions)];

  const authSuccess = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
    localStorage.setItem("auth", "1");
  };

  useEffect(() => {
    let auth = localStorage.getItem("auth");

    if (auth === "1") {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("auth");
  };

  return (
    <Fragment>
      <Layout isAuth={isLoggedIn} isProfile={false} onLogout={logoutHandler} />
      <main>
        {loader ? (
          isLoggedIn ? (
            <Home
              regionList={regionList}
              userName={userName}
              fullCountryList={countryList}
            />
          ) : (
            <AuthPage countryNames={countryName} onAuthSuccess={authSuccess} />
          )
        ) : (
          <Loader />
        )}
      </main>
    </Fragment>
  );
};

export default HomePage;
