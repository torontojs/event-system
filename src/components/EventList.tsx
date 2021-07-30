import React from "react";
import styles from "./EventList.module.css";
import { Link } from "react-router-dom";
import { useResource } from "react-ketting";

interface IEventProps {
  eventTitle: string;
  eventDescription: string;
  eventStartDate: number;
  eventEndDate: number;
  eventRsvp?: boolean;
}
type EventList = {
  name: string;
  type: string;
  address: number;
  start_date: number;
  end_date?: boolean;
  description: string;
};

const EventList: React.FC<IEventProps> = ({
  eventTitle,
  eventDescription,
  eventStartDate,
  eventEndDate,
  eventRsvp,
}) => {
  const { loading, error, data } = useResource<EventList>("/Eventlist");
  if (loading) return <p>Loading...</p>;
  if (error) return <div className="error">{error.message}</div>;

  return (
    <div>
      <div className={styles["event_container"]}>
        <h2>{data.name}</h2>
        <h4>{data.type}</h4>
        <div className={styles["details_container"]}>
          <h4>
            {data.start_date}
            {data.end_date}
          </h4>
        </div>
        <div className={styles["block"]}>{data.description}</div>
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
