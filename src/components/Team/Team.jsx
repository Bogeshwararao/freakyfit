// 
import styles from "./Team.module.scss";
import { WiStars } from "react-icons/wi";
import { FiMessageCircle } from "react-icons/fi";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import People1 from "../../pics/people1.jpg";
import People2 from "../../pics/people2.jpg";
import People3 from "../../pics/people3.jpg";
import People4 from "../../pics/people4.jpg";

const Card = ({ person_image }) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.info}>
        {/* <div className={styles.photo_container}>
          <img src={person_image} alt="person" />
        </div> */}
        <ul>
          <li>Patient Name : Rahul</li>
          <li>Age          : 18</li>
          <li>Oragan       : Heart</li>
          <li>Blood Group  : O+</li>
        </ul>
      </div>
      <div className={styles.message}>
        <span>
          <FiMessageCircle /> Send Message
        </span>
      </div>
    </div>
  );
};

const Team = () => {
  const profiles = [
    People1,
    People2,
    People3,
    People4,
    People4,
    People3,
    People2,
    People1,
    People1,
    People2,
    People3,
    People4,
  ];

  return (
    <main>
      <div className={styles.title}>
        <div className={styles.title_icon}>
          <h1>Patients</h1>
          <WiStars />
        </div>
      </div>
      <div className={styles.content}>
        {profiles.map((profile, index) => (
          <Card person_image={profile} key={index} />
        ))}
      </div>
      <div className={styles.page_number}>
        <ul>
          <li className={styles.back}>
            <MdArrowBackIosNew />
          </li>
          <li className={styles.page}>
            <span className={styles.active_page}>1</span>
          </li>
          <li className={styles.page}>
            <span>2</span>
          </li>
          <li className={styles.page}>
            <span>3</span>
          </li>
          <li>
            <span>...</span>
          </li>
          <li className={styles.page}>
            <span>9</span>
          </li>
          <li className={styles.fw}>
            <MdArrowForwardIos />
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Team;
