import styles from "../Campaigns/Campaings.module.scss";
// import { WiStars } from "react-icons/wi";
// import { HiOutlineDocumentRemove } from "react-icons/hi";
// import { CgArrowsExchangeAlt } from "react-icons/cg";
// import { IoChatboxOutline } from "react-icons/io5";
// import { BsArrowRight } from "react-icons/bs";
// import { GoPlus } from "react-icons/go";
// import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
// import regpi from '..'


function regpi(){
  return(
    <div className="regpi">
       <h1 style={{color:"#000",
            fontFamily: "Arial",
            margin: "2rem",
          }}>Enter Patient Details</h1>
      <form>
      <h2 style={{color:"#fff"}}>Enter medical ID</h2>
       <input type="text" placeholder="Medical ID" />
       <h2 style={{color:"#fff"}}>Enter patient Name</h2>

        <input type="text" placeholder="Patient Name" />
        <h2 style={{color:"#fff"}}>Enter medical ID</h2>

        <input type="number" placeholder="Age" />
        <h2 style={{color:"#fff"}}>Enter Age</h2>

        <input type="text" placeholder="Organ" />
        <h2 style={{color:"#fff"}}>Enter Organ Type</h2>

        <input type="text" placeholder="Blood Group" />

         <button><strong>Submit</strong></button>

      </form>
    </div>
  )
}



export default regpi;
