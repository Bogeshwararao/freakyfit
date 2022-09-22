import styles from "./Dashboard.module.scss";
// import Spline from "./Charts/Spline";
import Columns from "./Charts/Columns";
import Pie from "./Charts/Pie";
import Activity from "./Charts/Activity";
import Income from "./Charts/Income";
import Cards from "../Cards";

import donar1 from "../../pics/donar1.jpg";
import donar2 from "../../pics/donar2.jpg";
import blockchain from "../../pics/blockchain.jpg";
// import People4 from "../../pics/people4.jpg";

// import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineWavingHand } from "react-icons/md";
// import { GoPlus } from "react-icons/go";
const Dashboard = () => {
  const BlogData = [
    { img: donar1, title: "Lack Of Organ Donation In India", link: "asdf" },
    {
      img: donar2,
      title: "Organ Donation: Things to Consider",
      link: "https://aperioncare.com/blog/organ-donation-things-to-consider/#:~:text=There%20are%20many%20factors%20considered,and%20the%20patient's%20waiting%20time",
    },
    {
      img: donar2,
      title: "Organ Donation: Things to Consider",
      link: "https://aperioncare.com/blog/organ-donation-things-to-consider/#:~:text=There%20are%20many%20factors%20considered,and%20the%20patient's%20waiting%20time",
    },
    {
      img: blockchain,
      title: "Blockchain Technology",
      link: "https://www.upgrad.com/blog/blockchain-technology-use-cases/",
    },
  ];
  return (
    <main className={styles.container}>
      <div className={styles.welcome}>
        <h1>
          Hola Folks.
          <MdOutlineWavingHand />
        </h1>
        <p>
          Here we propose a secure platform to monitor and facilitate the
          process of organ donation by deploying it on a decentralized platform
          with the help of blockchain, thus in this process, ensuring security,
          integrity, and transparency and also eliminating the need for third
          third-party moderators moderators.
        </p>
      </div>
      <h2>Articles</h2>
      <div className={styles.charts}>
        {BlogData.map((item) => {
          return <Cards title={item.title} imgsrc={item.img} />;
        })}
      </div>
      <div className={styles.charts}>
        <div className={styles.columns}>
          <Columns />
        </div>

        <div className={styles.pie}>
          <Pie />
        </div>

        <div className={styles.activity}>
          <Activity />
        </div>

        <div className={styles.income}>
          <Income />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
