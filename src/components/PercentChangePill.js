import styles from "./PercentChangePill.module.css";

const PercentChangePill = ({ percent }) => {
  return (
    <span className={`${styles.percent} ${percent >= 0 ? styles.green : styles.red}`}>
      {Number(percent).toFixed(2)}%
    </span>
  );
};

export default PercentChangePill;
