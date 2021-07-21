import React from "react";
import styles from "./EventPage.module.css";
import Register from "./Register";
import { Link } from "react-router-dom";
import { useResource } from "react-ketting";

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

type Event = {
  name: string;
  type: string;
  address: number;
  start_date: number;
  end_date?: boolean;
  description: string;
  schedule: string;
  host_name: string;
  host_picture: string;
};

const EventPage: React.FC<EventPageProps> = ({
  eventTitle,
  eventDescription,
  eventStartDate,
  eventEndDate,
  shareEvent,
  eventSchedule,
  eventHost,
}) => {
  const { loading, error, data } = useResource<Event>("/event/1");
  if (loading) return <p>Loading...</p>;
  if (error) return <div className="error">{error.message}</div>;

  return (
    <div>
      <div className={styles["navWrapper"]}>
        <div className={styles["left_container"]}>
          <div className={styles["time_container"]}>
            <h2>{data.name}</h2>
            <h3>{data.start_date}</h3>
            <h3>{data.end_date}</h3>
          </div>
        </div>

        <div className={styles["form_content_container"]}>
          <div className={styles["form_container"]}>
            <Register />
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
        <div>{data.description}</div>
      </div>

      <div className={styles["eventSchedule_contaner"]}>
        <h2>Schedule</h2>
        <div>{data.schedule}</div>
      </div>

      <div className={styles["eventHost_container"]}>
        <h2>Host</h2>
        <h2>{data.host_name}</h2>
        <div>{data.host_picture}</div>
      </div>
    </div>
  );
};
export default EventPage;
