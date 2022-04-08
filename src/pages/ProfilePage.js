import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Loader from "../components/Loader/Loader";
import Profile from "../components/Profile/Profile";

const ProfilePage = () => {
  let country = localStorage.getItem("userCountry").replace(/"/g, "");
  const [userCountryDetails, setUserCountryDetails] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/name/" + country.toLocaleLowerCase())
      .then((res) => res.json())
      .then((data) => {
        setUserCountryDetails(data);
        setLoader(true);
      });
  }, []);

  return (
    <Layout isProfile={true} isAuth={true}>
        {loader ? <Profile countryDetails={userCountryDetails[0]} /> : <Loader />}
      
    </Layout>
  );
};

export default ProfilePage;
