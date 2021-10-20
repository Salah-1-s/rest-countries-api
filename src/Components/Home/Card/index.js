import { Link } from "react-router-dom";

const Card = (props) => {
  const country = props.country;
  return (
    <Link
      to={{
        pathname: `/${country.name}`,
        state: { data: country, themeDark: props.themeDark },
      }}
    >
      <div className={`card ${!props.themeDark && "light"}`}>
        <img className="card-img" src={country.flag} alt={country.name} />
        <div className="wrapper">
          <div className="name">{country.name}</div>
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
            Capital: <span className="value">{country.capital}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
