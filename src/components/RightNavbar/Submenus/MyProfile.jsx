//REACT ROUTER
import { Link } from "react-router-dom";
// import { wallet } from "./wallet.jsx";

//HOOKS
import useClickOutside from "../../../CustomHooks/ClickOutside";
import { useState } from "react";

//ICONS , PICS , STYLES
import styles from "./MyProfile.module.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ReactComponent as Avatar } from "../../../pics/avatar.svg";
import App from "../../walletbtn/wallet.jsx";




const MyProfile = () => {
  const [isProfileOpen, setisProfileOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setisProfileOpen(false);
  });

  async function requestAccount(){
    console.log("requesting account");

    if(window.ethereum){
      console.log("detected");
      
      try{
         const accounts = await window.ethereum.request[{
          method: "eth_requestAccounts",
         }];
         console.log(accounts);
      }catch (error){
        console.log("error connecting")
      }

    }
    else{
      console.log("metamask not detected");
    }

  }

  return (
    <div
      ref={domNode}
      className={styles.avatar_container}
      onClick={() => {
        setisProfileOpen(!isProfileOpen);
      }}
    >

      <div className={styles.name}>
        <App/>
        {/* <button
         onClick={requestAccount}
        
        style={{width:"8rem",
      height:"3rem", fontSize:"1.4rem",
      border: "2rem",
      color:"#FA9494"}}>Sign in</button> */}

      </div>

    </div>

  );
};


export default MyProfile;
