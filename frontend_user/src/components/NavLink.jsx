import styles from "../styles/NavLink.module.css";
const NavLink = ({ path, content }) => {
  const active = window.location.pathname === path;
  if (active) {
    return (
      <a href={path} className={styles.active}>
        {content}
      </a>
    );
  } else {
    return (
      <a href={path} className={styles.inactive}>
        {content}
      </a>
    );
  }
};
export default NavLink;
