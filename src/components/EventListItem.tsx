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
};

interface RouteParams {
  id: string;
}

function EventListItem({ resource }: { resource: Resource<EventListItem> }) {
  const { loading, error, data } = useResource(resource);
  //const props: any = {};
  if (loading) return <p>Loading...</p>;
  if (error) return <div className="error">{error.message}</div>;
  const {id}: { id: any} = useParams(); 
    //let { id } = useParams<{id:string}>(); 
  //const params = useParams()
  const params = useParams<RouteParams>();
  // console.log(params);
    //let index = this.props.events.findIndex((event: { id: string; }) => event.id == id);
    //let event = this.props.events[index];
    // React.useEffect(()=>{
    //   fetch(`/event/${id}`)
    //   .then(setId)
    // }, id)
    
  return (
    <div data-event="cube">
      <div className={styles["event_container"]} >

        <h2>{data.name}{id}</h2>
        <div className={styles["dates"]}>
          <h2>
            {data.start_time}
            {data.end_time}
          </h2>
          <h3>{data.type}</h3>
        </div>

        <div className={styles["block"]}>{data.description}</div>
        <div className={styles["link"]}>
         <Link to={`/event/${id}`}>   
            Event Details
            {console.log(id)}
        </Link>
        </div>
        <hr className={styles["hr"]} />
      </div>
    </div>
  );
}

export default EventListItem;


