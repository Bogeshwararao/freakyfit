//ICONS , STYLES
import styles from "./Support.module.scss";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoDocument, IoNavigate } from "react-icons/io5";
import { CgSupport } from "react-icons/cg";

//HOOKS
import useClickOutside from "../../../CustomHooks/ClickOutside";
import { useState } from "react";

//REACT-ROUTER
import { Link } from "react-router-dom";

const Support = () => {
  const [isSupportOpen, setisSupportOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setisSupportOpen(false);
  });
  return (
    <div
      ref={domNode}
      className={`${styles.icon_container} ${styles.support} ${
        isSupportOpen ? styles.icon_active : undefined
      }`}
      onClick={() => {
        setisSupportOpen(!isSupportOpen);
      }}
    >
      <RiErrorWarningLine />
      {/*  SUPPORT SUBMENU */}
      <div
        className={`${styles.submenu} ${
          isSupportOpen ? styles.submenu_active : ""
        }`}
      >
        <span className={styles.title}>NEED HELP?</span>
        <Link to="/">
          <IoDocument />
          <span>Documentation</span>
        </Link>
        <Link to="/analytics">
          <CgSupport />
          <span>Support Site</span>
        </Link>
        <Link to="/campaings">
          <IoNavigate />
          <span>Contact us</span>
        </Link>
      </div>
    </div>
  );
};

export default Support;
