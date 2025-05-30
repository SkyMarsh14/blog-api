import { NavLink } from "react-router-dom";
import styles from "../styles/pageLink.module.css";
const PageLink = ({ path, content }) => {
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
export default PageLink;
