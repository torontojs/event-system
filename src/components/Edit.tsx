import React from "react";
import styles from "./Edit.module.css";
import { Link } from "react-router-dom";

interface EditProps {
  eventchange: string;
  eventUpdate: string;
}

const Edit: React.FC<EditProps> = ({ eventchange, eventUpdate }) => {
  return (
    <div>
      <div className={styles["edit_container"]}>
        <div className={styles["info_container"]}>
          <div className={styles["h3"]}>
            <h3>Please Complete your RSVP</h3>
          </div>
          <p>Your current response: I am going!</p>
          <Link to="/eventPage">
            <button className={styles["not"]}>Not Going{eventchange}</button>
          </Link>
          <Link to="/eventLink">
            <button className={styles["update"]}>Update{eventUpdate}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Edit;
