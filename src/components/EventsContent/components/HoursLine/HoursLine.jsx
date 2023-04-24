import { hrs } from "@/constants/hrs";
import styles from "./HoursLine.module.css";
import { formatHr, formatHr30 } from "@/utils/utils";

export const HoursLine = () => {
  return (
    <div className={styles.hoursLine}>
      {hrs?.map((hr) => {
        return (
          <div key={hr} className={styles.hoursLine__unoHour}>
            <div className={styles.unoHour__format}>
              <p className={styles.format__text}>{formatHr(hr)}</p>
            </div>
            <div className={styles.unoHour__format}>
              <p className={styles.format__text}>{formatHr30(hr)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
