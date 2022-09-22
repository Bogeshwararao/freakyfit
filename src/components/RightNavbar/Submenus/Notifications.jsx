//ICONS , STYLES
import { FiMessageCircle } from "react-icons/fi";
import styles from "./Notifications.module.scss";

//HOOKS
import { useState } from "react";
import useClickOutside from "../../../CustomHooks/ClickOutside";

const Notification = ({ title, content, date }) => {
  return (
    <div className={styles.notification}>
      <h3 className={styles.notification_title}>&#128227; {title}</h3>
      <p>{content}</p>
      <h4 className={styles.notification_date}>{date}</h4>
    </div>
  );
};

Notification.defaultProps = {
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, nesciunt voluptatum minima aut numquam saepe",
  title: "Lorem ipsum dolor sit.",
  date: "11/12/21",
};

const Notifications = () => {
  const [isNotificationsOpen, setisNotificationsOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setisNotificationsOpen(false);
  });
  return (
    <div
      ref={domNode}
      className={`${styles.icon_container} ${styles.notifications_container} ${
        isNotificationsOpen ? styles.icon_active : undefined
      }`}
      onClick={() => {
        setisNotificationsOpen(!isNotificationsOpen);
      }}
    >
      <FiMessageCircle />

      {/* INBOX SUBMENU */}
      <div
        className={`${styles.submenu} ${
          isNotificationsOpen ? styles.submenu_active : ""
        }`}
      >
        <h3 className={styles.title}>Notifications</h3>
        <div className={styles.notifications}>
          <Notification />
          <Notification />
          <Notification />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
