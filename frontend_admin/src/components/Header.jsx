import styles from "../styles/header.module.css";
import PageLink from "./PageLink";
const Header = () => {
  return (
    <header className={styles.header_nav}>
      <nav>
        <div className={styles.header_title}>Blog App Admin</div>
        <ul className={styles.nav_right}>
          <li>
            <PageLink path="/users" content="Users" />
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
