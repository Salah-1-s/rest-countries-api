import { useState } from "react";
import Card from "./Card";
import * as countryAPI from "../../utils/api";
import SearchFilter from "./SearchFilter";

const Home = (props) => {
  let countriesArr = props.countries;
  const [countries, setCountries] = useState(countriesArr);

  const searchedCountries = (query) => {
    if (query === "") {
      setCountries(countriesArr);
    } else {
      countryAPI.getSearchedCountries(query).then((data) => {
        if (data.length > 0) {
          setCountries(data)
        } else {
          setCountries([])
        }
      });
    }
  };

  const filteredCountries = (filterValue) => {
    let filteredCountriesArr = countriesArr.filter(country => country.region === filterValue)
    setCountries(filteredCountriesArr)
  }

  return (
    <>
      <SearchFilter filter={filteredCountries} search={searchedCountries} reset={() => setCountries(countriesArr)} themeDark={props.themeDark} />
      <div className="container">
        {countries.length === 0 ? (
          <div className={`search-empty ${props.themeDark ? "dark" : "light"}`}>No countries to display</div>
        ) : (
          countries.map((country) => (
            <Card themeDark={props.themeDark} countries={countries} country={country} key={country.name} />
          ))
        )}
      </div>
    </>
  );
};

export default Home;
