import styles from "./Button.module.css";

export const Button = ({ label, ...res }) => (
  <button className={styles.btn} {...res}>
    {label}
  </button>
);
