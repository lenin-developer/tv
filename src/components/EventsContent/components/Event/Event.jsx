import { useDispatch } from "react-redux";
import { previewEvent } from "@/store/slices/preview/preview";
import { formatFront } from "@/utils/utils";
import styles from "./Event.module.css";

export const Event = ({ events }) => {
  const dispatch = useDispatch();
  const setData = (data) => {
    const payload = {
      title: data?.title,
      img: data?.img,
      hr: `${formatFront(data?.date_begin, data?.date_end)} ${data?.duration}`,
    };
    dispatch(previewEvent(payload));
  };

  return (
    <>
      {events?.map((event) => {
        return (
          <div
            key={event?.unix_begin}
            className={styles.event}
            onMouseOver={() => setData(event)}
          >
            <p className={styles.text}>{event?.name}</p>
            <div className={styles.event__contenhrs}>
              <p className={`${styles.text} ${styles.text__min}`}>
                {formatFront(event?.date_begin, event?.date_end)}
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
};
