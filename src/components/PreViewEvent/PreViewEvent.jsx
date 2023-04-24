import { useSelector, useDispatch } from "react-redux";
import { showModal } from "@/store/slices/modal/modal";
import styles from "./PreViewEvent.module.css";
export const PreViewEvent = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state?.preview);

  const close = () => {
    dispatch(showModal());
  };

  return (
    <section
      className={styles.preView}
      style={{
        backgroundImage: ` linear-gradient(to right, #000, #00000075 ),  url(${data?.img})`,
      }}
    >
      <div className={styles.preView__close}>
        <button className={styles.close__btn} onClick={close}>
          X
        </button>
      </div>
      <h1>{data?.title}</h1>
      <div className={styles.preView__contenDesc}>
        <p>{data?.hr}</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque harum
          minima sapiente repellat saepe exercitationem. Eius dolore voluptate
          ea, accusamus vitae, blanditiis corrupti dicta ab omnis velit
          temporibus ratione atque?
        </p>
      </div>
    </section>
  );
};
