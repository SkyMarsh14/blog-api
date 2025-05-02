import styles from "../styles/Header.module.css";
const Header = () => {
  return (
    <header>
      <nav>
        <div className={styles.header_title}>Blog App</div>
        <ul className={styles.nav_right}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/logout">Logout</a>
          </li>
          <li>
            <a href="/posts">My Posts</a>
          </li>
          <li>
            <a href="/admin">Admin</a>
          </li>
          <li>
            <a href="/create-post">Write blog</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
