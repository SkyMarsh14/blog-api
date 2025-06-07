import styles from "../styles/header.module.css";
import PageLink from "./PageLink";
const Header = () => {
  return (
    <header>
      <nav className={styles.header_nav}>
        <div className={styles.header_title}>Blog App Admin</div>
        <ul className={styles.nav_right}>
          <li>
            <PageLink path="/user" content="User" />
          </li>
          <li>
            <PageLink path="/posts" content="Posts" />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
