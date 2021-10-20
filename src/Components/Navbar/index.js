import NightsStayIcon from "@material-ui/icons/NightsStay";
import WbSunnyIcon from "@material-ui/icons/WbSunny";

const Navbar = (props) => (
  <nav className={props.themeDark ? "" : "light"}>
    <h1>Where in the world?</h1>
    <button onClick={props.toggleTheme}>
      {props.themeDark ? <NightsStayIcon /> : <WbSunnyIcon />}{" "}
      <span>{props.themeDark ? "Dark" : "Light"} Mode</span>
    </button>
  </nav>
);

export default Navbar;
