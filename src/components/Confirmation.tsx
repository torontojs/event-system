import React from "react";
import styles from "./Confirmation.module.css";
import { Link } from "react-router-dom";

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
          <Link to="/eventPage">
            <button className={styles["ok"]}>Got It!{eventOk}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
