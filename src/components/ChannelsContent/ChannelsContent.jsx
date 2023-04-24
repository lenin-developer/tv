import { useSelector } from "react-redux";
import { ChannelItem } from "./components/ChannelItem/ChannelItem";
import styles from "./ChannelsContent.module.css";

export const ChannelsContent = () => {
  const { channels } = useSelector((state) => state?.channels);

  return (
    <section className={styles.panelChannels}>
      <div className={styles.panelChannels__title}>
        <div>
          <p className={styles.panelChannels__title__p}>HOY</p>
        </div>
      </div>
      <ul className={styles.panelChannels__list}>
        {channels?.map((channel) => (
          <ChannelItem key={channel?.key} channel={channel} />
        ))}
      </ul>
    </section>
  );
};
