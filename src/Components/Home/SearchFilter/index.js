import { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const Search_Filter = (props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    searchQueryHandler(query);
  }, [query]);

  const toggleFilterMenuHandler = () => {
    document.getElementById("toggle-filter").classList.toggle("hidden");
  };

  const searchQueryHandler = (searchValue) => {
    setQuery(searchValue);
    props.search(query);
  };

  const filterHandler = (filterValue) => {
    setQuery("");
    props.filter(filterValue);
  };

  const resetHandler = () => {
    props.reset();
    setQuery("")
  };

  return (
    <div className="search-filter">
      <div
        className={`input ${props.themeDark ? "input-dark" : "input-light"}`}
      >
        <SearchIcon />
        <input
          className={!props.themeDark && "light"}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
          id="search"
          placeholder="Search for a country ..."
        />
      </div>
      <div
        className="dropdown"
        onMouseEnter={toggleFilterMenuHandler}
        onMouseLeave={toggleFilterMenuHandler}
      >
        <div className={`dropdown-select ${props.themeDark ? "dark" : "light"}`}>
          <span>Filter by Region</span>
          <KeyboardArrowDownIcon />
        </div>
        <div id="toggle-filter" className="option-list hidden">
          <div
            className={`dropdown-option ${props.themeDark ? "dark" : "light"}`}
            onClick={(e) => filterHandler(e.target.innerText)}
          >
            Africa
          </div>
          <div
            className={`dropdown-option ${props.themeDark ? "dark" : "light"}`}
            onClick={(e) => filterHandler(e.target.innerText)}
          >
            Americas
          </div>
          <div
            className={`dropdown-option ${props.themeDark ? "dark" : "light"}`}
            onClick={(e) => filterHandler(e.target.innerText)}
          >
            Asia
          </div>
          <div
            className={`dropdown-option ${props.themeDark ? "dark" : "light"}`}
            onClick={(e) => filterHandler(e.target.innerText)}
          >
            Europe
          </div>
          <div
            className={`dropdown-option ${props.themeDark ? "dark" : "light"}`}
            onClick={(e) => filterHandler(e.target.innerText)}
          >
            Oceania
          </div>
        </div>
      </div>
      <button className={!props.themeDark && "light"} onClick={resetHandler} id="clear-filter">
        Clear Filter
      </button>
    </div>
  );
};

export default Search_Filter;
