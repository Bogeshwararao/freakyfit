import { MdSearch } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { BsArrowRepeat } from "react-icons/bs";
import styles from "./Search.module.scss";

import { useState } from "react";
import useClickOutside from "../../../CustomHooks/ClickOutside";

const RecentSearch = ({ children }) => {
  return (
    <li>
      <div className={styles.recent_search}>
        <BsArrowRepeat /> {children}
      </div>
    </li>
  );
};

RecentSearch.defaultProps = {
  children: "Lorem",
};

const Search = () => {
  const [isSearchOpen, setisSearchOpen] = useState(false);
  const [input, setinput] = useState("");
  let domNode = useClickOutside(() => {
    setisSearchOpen(false);
  });

  return (
    <div
      onClick={() => setisSearchOpen(true)}
      className={`${styles.icon_container} ${styles.search} `}
    >
      <MdSearch />

      {/* SUBMENU */}
      <div
        className={`${styles.submenu_container} ${
          isSearchOpen ? styles.submenu_container_active : ""
        }`}
      >
        <div
          ref={domNode}
          className={`${styles.submenu} ${
            isSearchOpen ? styles.submenu_active : ""
          }`}
        >
          <div className={styles.input}>
            <IoSearch />
            <input
              onChange={(e) => setinput(e.target.value)}
              type="text"
              placeholder="Search Anything..."
              value={input}
            />
          </div>
          <div className={styles.recent}>
            <h3>Recent Searches</h3>
            <ul>
              <RecentSearch>Lorem, ipsum dolor.</RecentSearch>
              <RecentSearch>Lorem, ipsum dolor.</RecentSearch>
              <RecentSearch>Lorem, ipsum dolor.</RecentSearch>
              <RecentSearch>Lorem, ipsum dolor.</RecentSearch>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
