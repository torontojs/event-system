import React from "react";
import styles from "./EventList.module.css";
import { Link, useParams } from "react-router-dom";
import { useResource } from "react-ketting";
import { Resource } from "ketting";
import { Record } from "airtable";

interface IEventProps {
  eventTitle: string;
  eventDescription: string;
  eventStartDate: number;
  eventEndDate: number;
  eventShow?: boolean;
}
type EventListItem = {
  name: string;
  type: string;
  start_time: number;
  end_time: number;
  description: string;
  id: string;
};

function EventListItem({ resource }: { resource: Resource<EventListItem> }) {
  const { loading, error, data } = useResource(resource);
  if (loading) return <p>Loading...</p>;
  if (error) return <div className="error">{error.message}</div>;
  const {id}: { id: any} = useParams(); 
  
  return (
    <div data-event="cube">
      <div className={styles["event_container"]} >
        <h2>{data.name}</h2>
        <div className={styles["dates"]}>
          <h2>
            {data.start_time}
            {data.end_time}
          </h2>
          <h3>{data.type}</h3>
        </div>

        <div className={styles["block"]}>{data.description}</div>
        <div className={styles["link"]}>
         <Link to={`/event/${data.id}`}>   
            Event Details
        </Link>
        </div>
        <hr className={styles["hr"]} />
      </div>
    </div>
  );
}

export default EventListItem;


