import React from "react";
import styles from "./Confirmation.module.css";

interface IConfirmation {
  eventConfirmation: string;
  eventOk: string;
}

const Confirmation: React.FC<IConfirmation> = ({
  eventConfirmation,
  eventOk,
}) => {
  return (
    <div className={styles["confirmation_container"]}>
      <div className={styles["message_container"]}>
        <p>{eventConfirmation}</p>
        <div className="btn">
          <button className={styles["ok"]}>Got It!{eventOk}</button>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
