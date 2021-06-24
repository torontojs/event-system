import React from "react";
import styles from "./LinkSection.module.css";
import { Link } from "react-router-dom";

interface LinkSectionProps {
  eventStartDate?: number;
  eventEndDate?: number;
  eventLink?: string;
  eventChange: string;
}

const LinkSection: React.FC<LinkSectionProps> = ({
  eventStartDate,
  eventEndDate,
  eventLink,
  eventChange,
}) => {
  return (
    <div className={styles["form_container"]}>
      <form>
        <div className={styles["dates_container"]}>
          {/* event start date and time  */}
          <h6>eventStartDate</h6>
          <h6>eventEndDate</h6>
        </div>
        <h5>Online Event</h5>
        <div className={styles["elink"]}>
          https://www.google.com/video/=event+1&location=online&dates=20210602T192600Z%2F
          {eventLink}
        </div>
        <button className={styles["going"]}>I'm Going!</button>
        <br />
        <Link to="/Edit">
          <button className={styles["change"]}>
            Change your RSVP{eventChange}
          </button>
        </Link>
      </form>
    </div>
  );
};

export default LinkSection;
