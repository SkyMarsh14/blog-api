import styles from "../styles/NavLink.module.css";
const NavLink = ({ path, content }) => {
  return (
    <a href={path} className={styles.nav_link}>
      {content}
    </a>
  );
};
export default NavLink;
