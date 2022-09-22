//STYLES
import styles from "./RightNavbar.module.scss";
import App from "../walletbtn/wallet";

//HOOKS
import { useContext } from "react";

//CONTEXT
import NavContext from "../../Context/NavContext";

//ICONS , IMAGES
import { MdOutlineMenu } from "react-icons/md";

//Components
import MyProfile from "./Submenus/MyProfile";
import Support from "./Submenus/Support";
import Notifications from "./Submenus/Notifications";
import Search from "./Submenus/Search";

const RightNavbar = () => {
  const { nav, setNav } = useContext(NavContext);

  return (
    <div className={styles.container}>
      {/* BURGER */}
      <div
        className={styles.burger_container}
        onClick={() => {
          setNav(!nav);
        }}
      >
        <MdOutlineMenu />
      </div>

      {/* ACTIONS */}
      <div className={styles.actions}>
        <Search />
        <Notifications />
        <Support />
      </div>

      {/* My Profile */}
      <MyProfile />
    </div>
  );
};

export default RightNavbar;
