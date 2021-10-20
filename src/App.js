import { useState, useEffect } from "react";
import * as countryAPI from "./utils/api";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import DetailedCountry from "./Components/DetailedCountry";
import Spinner from "./Components/Navbar/Spinner";
import { Route } from "react-router-dom";

import "./App.scss";

function App() {
  const [countriesData, setData] = useState([]);
  const [themeDark, setThemeDark] = useState(true);

  useEffect(() => {
    countryAPI.getAllCountries().then((data) => setData(data));
  }, []);

  const toggleThemeHandler = () => {
    setThemeDark(!themeDark);
  };

  return (
    <div className={themeDark ? "" : "body-light"}>
      <Navbar themeDark={themeDark} toggleTheme={toggleThemeHandler} />
      {countriesData.length === 0 ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : (
        <>
          <Route
            exact
            path="/:id"
            render={(props) => (
              <DetailedCountry themeDark={themeDark} {...props} />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <Home countries={countriesData} themeDark={themeDark} />
            )}
          />
        </>
      )}
    </div>
  );
}

export default App;
