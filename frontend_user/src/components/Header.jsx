import styles from "../styles/Header.module.css";
import { useContext } from "react";
import UserContext from "../helper/UserContext";
import LogoutBtn from "./LogoutBtn";
import NavLink from "./NavLink";
const Header = () => {
  return (
    <header>
      <nav className={styles.header_nav}>
        <div className={styles.header_title}>Blog App</div>
        <ul className={styles.nav_right}>
          <li>
            <NavLink path="/" content="Home" />
          </li>
          <li>
            <NavLink path="/admin" content="Admin" />
          </li>
          <li>
            <NavLink path="/create-post" content="Write blog" />
          </li>
          <Links />
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
          <NavLink path="/posts" content="My Posts" />
        </li>
        <li>
          <LogoutBtn />
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
