import { useSelector } from "react-redux";
import { Event } from "@/components";
import styles from "./Eventslist.module.css";

export const Eventslist = () => {
  const { channels } = useSelector((state) => state?.channels);

  return (
    <div className={styles.eventslist}>
      {channels?.map(({ events, key }) => {
        return (
          <div key={key} className={styles.eventslist__channel}>
            <Event events={events} />
          </div>
        );
      })}
    </div>
  );
};
