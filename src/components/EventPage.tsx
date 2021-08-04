import React from "react";
import styles from "./EventPage.module.css";
import Register from "./Register";
import Schedule from "./Schedule";
import Attendee from "./Attendee";
import Host from "./Host";
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
  eventAttendees: string;
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
  start: string;
  codeAlong: string;
  questionA: string;
  end: string;
  eventAttendees: string;
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
            <Attendee eventAttendees="" />
            <h4>{data.type}</h4>
            <h4>{data.address}</h4>
            <h4>{data.start_date}</h4>
            <h4>{data.end_date}</h4>
          </div>
        </div>

        <div className={styles["form_content_container"]}>
          <div className={styles["form_container"]}>
            <Register 
            rsvpGit= "" />
          </div>
        </div>
      </div>

      <div className={styles["eventDescription"]}>
        <h2>Description</h2>
        <div>{data.description}</div>
      </div>
      <Schedule eventSchedule="" />
      <Host eventHost="" />
    </div>
  );
};
export default EventPage;
