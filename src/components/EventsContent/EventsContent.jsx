import { HoursLine, Eventslist } from "@/components";
import styles from "./EventsContent.module.css";

export const EventsContent = () => {
  return (
    <section className={styles.eventsContent}>
      <HoursLine />
      <Eventslist />
    </section>
  );
};
