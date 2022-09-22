import styles from "./Container.module.scss";

const Container = ({ stickyNav, content }) => {
  return (
    <div className={styles.container}>
      {stickyNav}
      {content}
    </div>
  );
};

export default Container;
