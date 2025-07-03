import styles from "../styles/fetchError.module.css";
const FetchError = () => {
  function handleClick() {
    window.location.reload();
  }
  return (
    <div>
      <div>
        <div className={styles.title}>Server Connection Error</div>
        <div>
          We are experiencing issues connecting to our server. Some data may not
          be available or up to date.
        </div>
      </div>
      <button className={styles.btn} onClick={handleClick}>
        Refresh the page
      </button>
    </div>
  );
};
export default FetchError;
