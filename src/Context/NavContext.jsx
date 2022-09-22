import { createContext } from "react";

const NavContext = createContext({
  nav: false,
  setNav: () => {},
});
export default NavContext;
