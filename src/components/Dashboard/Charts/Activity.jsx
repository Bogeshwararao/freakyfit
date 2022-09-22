import styles from "./Activity.module.scss";
import { IoChatboxOutline } from "react-icons/io5";
import { HiOutlineDocumentRemove } from "react-icons/hi";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { BsArrowRight } from "react-icons/bs";

const Act = ({ icon, icon_background, content }) => {
  return (
    <div className={styles.activity}>
      <div className={styles.icon} style={{ background: `${icon_background}` }}>
        {icon}
      </div>
      <div className={styles.content}>
        <span>{content}</span>
        <div className={styles.view}>
          <span>
            View
            <BsArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

Act.defaultProps = {
  icon: <IoChatboxOutline />,
  icon_background: "rgb(85, 79, 232)",
  content: "raj procured cadaver kidney blood type : a+",
};

const Activity = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Recent Activity</h2>
      </div>
      <div className={styles.today}>
        <h3 className={styles.activity_day}>Today</h3>
        <div className={styles.activities}>
          <Act />
          <Act
            icon={<HiOutlineDocumentRemove />}
            icon_background="rgb(232,79,79)"
            content="karthik donated cornea blood type : B+"
          />
          <Act
            icon={<CgArrowsExchangeAlt />}
            content="Sathyabama donated cornea blood type : B+"
            icon_background="rgb(42, 170, 85)"
          />
        </div>
      </div>
      <div className={styles.yesterday}>
        <h3 className={styles.activity_day}>Yesterday</h3>
        <div className={styles.activities}>
          <Act />
          <Act
            icon={<HiOutlineDocumentRemove />}
            content="Robert donated cornea blood type : B+"
            icon_background="rgb(232,79,79)"
          />
          <Act
            content="Roshan donated cornea blood type : B+"
            icon={<CgArrowsExchangeAlt />}
            icon_background="rgb(42, 170, 85)"
          />
        </div>
      </div>
    </div>
  );
};

export default Activity;
