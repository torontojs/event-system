import React from "react";
import styles from "./EventPage.module.css";
import LinkSection from "./LinkSection";
import { Link } from "react-router-dom";

interface EventLinkProps {
  eventTitle: string;
  eventDescription: string;
  eventStartDate: number;
  eventEndDate: number;
  eventRsvp?: boolean;
  shareEvent: string;
  eventSchedule: string;
  eventHost: string;
  eventChange: string;
}

const EventLink: React.FC<EventLinkProps> = ({
  eventTitle,
  eventDescription,
  eventStartDate,
  eventEndDate,
  shareEvent,
  eventSchedule,
  eventHost,
  eventChange,
}) => {
  return (
    <div>
      <div className={styles["navWrapper"]}>
        <div className={styles["left_container"]}>
          <div className={styles["time_container"]}>
            <h2>{eventTitle}</h2>
            <h3>{eventStartDate}</h3>
            <h3>{eventEndDate}</h3>
          </div>
        </div>

        <div className={styles["form_content_container"]}>
          <div className={styles["form_container"]}>
            <LinkSection eventChange="" />
          </div>
          <div className={styles["btn_share"]}>
            <Link to="/share">
              <button className={styles["sharevent"]}>
                Share Event{shareEvent}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles["eventDescription"]}>
        <h2>Description</h2>
        <div>{eventDescription}</div>
      </div>

      <div className={styles["eventSchedule_contaner"]}>
        <h2>Schedule</h2>
        <div>{eventSchedule}</div>
      </div>

      <div className={styles["eventHost_container"]}>
        <h2>Host</h2>
        <h2>{eventHost}</h2>
      </div>
    </div>
  );
};
export default EventLink;
