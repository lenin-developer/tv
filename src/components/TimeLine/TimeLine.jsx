import { ChannelsContent, EventsContent } from "@/components";
import styles from "./TimeLine.module.css";

export const TimeLine = () => {
  return (
    <div className={styles.timeLine}>
      <section className={styles.timeLine__sectionChannel}>
        <ChannelsContent />
      </section>

      <section className={styles.timeLine__sectionEvent}>
        <EventsContent />
      </section>
    </div>
  );
};
