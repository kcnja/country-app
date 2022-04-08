import { useState } from "react";
import Countries from "../Countries";
import classes from "./Pagination.module.css";

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [favList, setFavList] = useState([]);
  const pages = props.maxPage;

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };

  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = currentPage * props.dataLimit - props.dataLimit;
    const endIndex = startIndex + props.dataLimit;
    return Object.keys(props.countryList)
      .slice(startIndex, endIndex)
      .reduce((result, key) => {
        result[key] = props.countryList[key];
        let resultArray = Object.values(result);

        return resultArray;
      }, {});
  };

  const getPaginationGroup = () => {
    let start =
      Math.floor((currentPage - 1) / props.pageLimit) * props.pageLimit;
    return new Array(props.pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  const addToFavListHandler = (ccn3) => {
    let currentFavList = localStorage.getItem("userFavCountry");
    console.log("currentfavlist", currentFavList);
    let newFavList = [...JSON.parse(currentFavList), ccn3];
    newFavList = [...new Set(newFavList)];
    localStorage.setItem("userFavCountry", JSON.stringify(newFavList));
    console.log("newfavlist", newFavList);
    return newFavList;
  };

  const removeFromFavListHandler = (ccn3) => {
    let currentFavList = localStorage.getItem("userFavCountry");
    console.log("currentfavlist", currentFavList);
    let newFavList = JSON.parse(currentFavList).filter((item) => item !== ccn3);

    localStorage.setItem("userFavCountry", JSON.stringify(newFavList));
    return newFavList;
  };

  const checkFavorite = (ccn3) => {
    let currentFavList = localStorage.getItem("userFavCountry");
    console.log("currentfavlist", currentFavList);
    if (JSON.parse(currentFavList).includes(ccn3)) {
      return true;
    }
    return false;
  };

  const refreshFavHandler = () => {
    console.log("navigate");
    window.location.reload(false);
  };

  return (
    <div className={classes.wrapper}>
      {/* show the posts, 10 posts at a time */}
      <div className={classes.dataContainer}>
        {getPaginatedData().map((d, idx) => (
          <Countries
            isFavorite={checkFavorite(d.ccn3)}
            onAddToFav={addToFavListHandler}
            onRemoveFromFav={removeFromFavListHandler}
            onRefreshFav={refreshFavHandler}
            type={props.type}
            key={idx}
            country={d}
          />
        ))}
      </div>

      {/* show the pagiantion
    it consists of next and previous buttons
    along with page numbers, in our case, 5 page
    numbers at a time
*/}
      <div className={classes.pagination}>
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={`${classes.prev} ${
            currentPage === 1 ? classes.disabled : ""
          }`}
        >
          prev
        </button>

        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`${classes.paginationItem} ${
              currentPage === item ? classes.active : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`${classes.next} ${
            currentPage === pages ? classes.disabled : ""
          }`}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
