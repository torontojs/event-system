import React from "react";
import styles from "./EventList.module.css";
import { Link } from "react-router-dom";

interface IEventProps {
  eventTitle: string;
  eventDescription: string;
  eventStartDate: number;
  eventEndDate: number;
  eventRsvp?: boolean;
}

const EventList: React.FC<IEventProps> = ({
  eventTitle,
  eventDescription,
  eventStartDate,
  eventEndDate,
  eventRsvp,
}) => {
  return (
    <div>
      <div className={styles["event_container"]}>
        <h2>{eventTitle}</h2>
        <div className={styles["details_container"]}>
          <h3>{eventStartDate}</h3>
          <h3>{eventEndDate}</h3>
        </div>
        <div className={styles["block"]}>{eventDescription}</div>
        <div className="btn">
          <Link to="/eventPage">
            <button className={styles["rsvp"]}>RSVP{eventRsvp}</button>
          </Link>
        </div>
      </div>
      <button className={styles["more"]}>Load More</button>
    </div>
  );
};

export default EventList;
