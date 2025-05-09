import styles from "../styles/Header.module.css";
import { useContext } from "react";
import UserContext from "../helper/UserContext";
import LogoutBtn from "./LogoutBtn";
const Header = () => {
  return (
    <header>
      <nav>
        <div className={styles.header_title}>Blog App</div>
        <ul className={styles.nav_right}>
          <li>
            <a href="/">Home</a>
          </li>
          <Links />
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

const Links = () => {
  const [auth, setAuth] = useContext(UserContext);
  if (auth) {
    return (
      <>
        <li>
          <LogoutBtn />
        </li>
        <li>
          <a href="/posts">My Posts</a>
        </li>
      </>
    );
  } else {
    <>
      <li>
        <a href="/sign-up">Sign Up</a>
      </li>
      <li>
        <a href="/login">Login</a>
      </li>
    </>;
  }
};
export default Header;
