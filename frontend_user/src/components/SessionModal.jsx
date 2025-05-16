import styles from "../styles/SessionModal.module.css";
import { X, ClockAlert } from "lucide-react";
const SessionModal = ({ auth }) => {
  return (
    <dialog className={styles.modal_container} open={auth}>
      <div className={styles.banner}>
        <div>Session Expired</div>
        <X />
      </div>
      <div className={styles.content}>
        <ClockAlert />
        <div className={styles.session_detail}>
          <div>Your session has been expired.</div>
          <div>You will be redirected to the Login Page.</div>
          <a href="/login" className={styles.link}>
            <button type="button" className={styles.ok_btn}>
              OK
            </button>
          </a>
        </div>
      </div>
    </dialog>
  );
};
export default SessionModal;
