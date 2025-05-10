import errorImg from "../public/404error.svg";
import styles from "../styles/NotFound.module.css";
const NotFound = () => {
  const location = window.location.href;
  return (
    <main className={styles.wrapper}>
      <div className={styles.main_container}>
        <img
          src={errorImg}
          alt="404 error with a tired person Isometric Illustrations"
          className={styles.error_logo}
        />
        <div className={styles.message}>
          <div>
            The requsted URL, <span className={styles.url}>{location}</span> was
            not found on this server.
          </div>
          <div>
            You can go back to home by clicking <a href="/">here.</a>
          </div>
        </div>
      </div>
    </main>
  );
};
export default NotFound;
