import classes from './MyCountry.module.css';

const MyCountry = (props) => {
  let languageArray = Object.values(props.myCountry.languages);
  console.log(props);
  return (
    <div className={classes.my_country}>
      <h2>{props.myCountry.name.common}</h2>
      <table className={classes.table}>
        <tbody>
          <tr>
            <td>Region</td>
            <td>{props.myCountry.region}</td>
          </tr>
          <tr>
            <td>Population</td>
            <td>{props.myCountry.population}</td>
          </tr>
          <tr>
            <td>SubRegion</td>
            <td>{props.myCountry.subregion}</td>
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
            <td>{props.myCountry.capital[0]}</td>
          </tr>
          <tr>
            <td>Coat Of Arms</td>
            <td><img src={props.myCountry.coatOfArms.png} alt="coatOfArms" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyCountry;
