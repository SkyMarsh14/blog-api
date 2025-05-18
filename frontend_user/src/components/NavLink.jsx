import styles from "../styles/NavLink.module.css";
import { NavLink } from "react-router-dom";
const Link = ({ path, content }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => {
        return isActive ? styles.active : styles.inactive;
      }}
    >
      {content}
    </NavLink>
  );
};
export default Link;
