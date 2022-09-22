import styles from "./Income.module.scss";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Act = ({ content, income }) => {
  const ArrowRight = () => {
    return (
      <div className={styles.icon} style={{ background: `rgb(42, 170, 85)` }}>
        <FaArrowRight />
      </div>
    );
  };

  const ArrowLeft = () => {
    return (
      <div className={styles.icon} style={{ background: `rgb(232,79,79)` }}>
        <FaArrowLeft />
      </div>
    );
  };

  return (
    <div className={styles.activity}>
      {income >= 0 ? <ArrowRight /> : <ArrowLeft />}
      <div className={styles.content}>
        <span>{content}</span>
        <span
          className={`${styles.income} ${
            income >= 0 ? styles.income_green : undefined
          }`}
        >{`$${income}`}</span>
      </div>
    </div>
  );
};

Act.defaultProps = {
  content: "Lorem ipsum dolor.",
  income: "0.00",
};

const Income = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Recent Income/Expense</h2>
      </div>
      <div className={styles.today}>
        <h3 className={styles.activity_day}>Today</h3>
        <div className={styles.activities}>
          <Act income={3300.34} content="Organ Costed" />
          <Act income={-942.74} content="Amount saved by using this Platform" />
          <Act income={402.35} content="Profit For the Platform" />
        </div>
      </div>
      <div className={styles.yesterday}>
        <h3 className={styles.activity_day}>Yesterday</h3>
        <div className={styles.activities}>
          <Act income={249.88} />
          <Act income={-49.88} />
          <Act income={1200.88} />
        </div>
      </div>
    </div>
  );
};

export default Income;
