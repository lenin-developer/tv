import styles from "./ChannelItem.module.css";
export const ChannelItem = ({ channel }) => {
  return (
    <li className={styles.channel}>
      <div className={styles.channel__contentText}>
        <p className={styles.channel__number}>{channel?.number}</p>
      </div>
      <figure className={styles.channel__figure}>
        <img
          className={styles.figure__img}
          src={channel?.image}
          alt={channel?.name}
        />
      </figure>
    </li>
  );
};
