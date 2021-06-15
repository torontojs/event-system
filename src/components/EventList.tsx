import React from "react";
import styles from "./EventList.module.css";

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
    <div className={styles["event_container"]}>
      <div className={styles["details_container"]}>
        <h2>{eventTitle}</h2>
        <h3>{eventStartDate}</h3>
        <h3>{eventEndDate}</h3>
        <p>{eventDescription}</p>
        <div className="btn">
          <button className={styles["rsvp"]}>RSVP{eventRsvp}</button>
        </div>
      </div>
    </div>
  );
};

export default EventList;
