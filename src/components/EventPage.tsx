import React from "react";
import styles from "./EventPage.module.css";

interface EventPageProps {
  eventTitle: string;
  eventDescription: string;
  eventStartDate: number;
  eventEndDate: number;
  eventRsvp?: boolean;
  shareEvent: string;
  eventSchedule: string;
  eventHost: string;
}

const EventPage: React.FC<EventPageProps> = ({
  eventTitle,
  eventDescription,
  eventStartDate,
  eventEndDate,
  eventRsvp,
  shareEvent,
  eventSchedule,
  eventHost,
}) => {
  return (
    <div>
      <div className={styles["navWrapper"]}>
        <h2>{eventTitle}</h2>
        <h3>{eventStartDate}</h3>
        <h3>{eventEndDate}</h3>

        {/* <Link href="/description">Description</Link>
        <Link href="/schedule">Schedule</Link>
        <Link href="/host">Host</Link> */}
        <div className={styles["form_container"]}>
          <form>
            <div>
              <label htmlFor="fullName">Full Name</label>
              <input id="fullName" name="fullName" type="text" />
            </div>
            <div>
              <label htmlFor="emailAddress">Email Address</label>
              <input id="emailAddress" name="emailAddress" type="text" />
            </div>
            <button className={styles["rsvp"]}>RSVP{eventRsvp}</button>
          </form>
        </div>
      </div>
      <div className={styles["btn_share"]}>
        <button className={styles["sharevent"]}>Share Event{shareEvent}</button>
      </div>

      <div className={styles["eventDescription"]}>
        <p>{eventDescription}</p>
      </div>

      <div className={styles["eventSchedule"]}>
        <p>{eventSchedule}</p>
      </div>

      <div className={styles["eventHost"]}>
        <h2>{eventHost}</h2>
      </div>
    </div>
  );
};
export default EventPage;
