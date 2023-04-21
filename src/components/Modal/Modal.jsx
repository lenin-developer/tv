import styles from "./Modal.module.css";

export const Modal = ({ childre, showModal }) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.modal}>
        <div className={styles.contenido}></div>
      </section>
    </div>
  );
};
