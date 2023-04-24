import { TimeLine, PreViewEvent } from "@/components";
import styles from "./Modal.module.css";

export const Modal = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <PreViewEvent />

        <TimeLine />
      </div>
    </div>
  );
};
