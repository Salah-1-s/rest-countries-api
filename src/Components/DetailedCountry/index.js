import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const DetailedCountry = (props) => {
  const country = props.location.state.data;

  return (
    <div
      className={`detailed-country ${
        props.themeDark ? "dark-detailed-country" : "light-detailed-country"
      }`}
    >
      <Link to="/">
        <button className={`back ${!props.themeDark && "light"}`}>
          <KeyboardBackspaceIcon /> Back
        </button>
      </Link>
      <div className="detail-container">
        <img src={country.flag} alt={country.name} />
        <div className="desctiption">
          <h2>{country.name}</h2>
          <div className="section-1">
            <div className="details">
              <div className="info">
                Native Name: <span className="value">{country.nativeName}</span>
              </div>
              <div className="info">
                Population:{" "}
                <span className="value">
                  {country.population
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
              </div>
              <div className="info">
                Region: <span className="value">{country.region}</span>
              </div>
              <div className="info">
                Sub Region: <span className="value">{country.subregion}</span>
              </div>
              <div className="info">
                Capital: <span className="value">{country.capital}</span>
              </div>
            </div>
          </div>
          <div className="section-2">
            <div className="details">
              <div className="info">
                Top Level Domain:{" "}
                <span className="value">{country.topLevelDomain}</span>
              </div>
              <div className="info">
                Currencies:{" "}
                {country.currencies.map((curr) => (
                  <span key={curr.name} className="value">
                    {curr.name}
                  </span>
                ))}
              </div>
              <div className="info">
                Languages:
                {country.languages.map((lang) => (
                  <span key={lang.name} className="value">
                    {" "}
                    {lang.name}{" "}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="section-3">
            <div className="details">
              <h3>Border Countries</h3>
              <div className="border-country">
                {country.borders.map((border) => (
                  <span key={border}>{border}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedCountry;
