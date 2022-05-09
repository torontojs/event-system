import React from "react";
import styles from "./EventPage.module.css";
import Register from "./Register";
import Schedule from "./Schedule";
// import Attendee from "./Attendee";
import Host from "./Host";
import { Link, useLocation, useParams } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useResource } from "react-ketting";
import LinkSection from "./LinkSection";

interface EventPageProps {
  eventTitle: string;
  eventDescription: string;
  eventStartDate: number;
  eventEndDate: number;
  eventRsvp?: boolean;
  shareEvent: string;
  eventSchedule: string;
  eventHost: string;
  attendees: string;
}

type Event = {
  name: string;
  type: string;
  address: number;
  start_time: number;
  end_time?: boolean;
  description: string;
  schedule: string;
  host_name: string;
  host_picture: string;
  start: string;
  codeAlong: string;
  questionA: string;
  end: string;
  attendees: string;
  host:string;
  linkSection: string;
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
  const {id}: { id: any} = useParams(); 
  
  const { loading, error, data } = useResource<Event>(`/event/${id}`);
  if (loading) return <p>Loading...</p>;
  if (error) return <div className="error">{error.message}</div>;

  const params = new URLSearchParams(useLocation().search); 
  const code =  params.get("code");
  let githubButton;
  if (code) {
    githubButton =  <LinkSection link={data.linkSection} />;
  }
  else {
    githubButton = <Register rsvpGit="" />;
  }

  return (
    <div>
      <div className={styles["navWrapper_container"]}>
        <div className={styles["left_container"]}>
          <div className={styles["time_container"]}>
            <h2>{data.name}</h2>
            <h5>{data.attendees ? data.attendees.length: 0} are attending.</h5>
            <h4>{data.type}</h4>
            <h4>{data.address}</h4>
            <h4>{data.start_time}</h4>
            <h4>{data.end_time}</h4>
          </div>
        </div>
        
            <div className={styles["form_content_container"]}>
              {githubButton}
            </div>
          </div>
        <hr className={styles["hr"]} />
        <div className={styles["eventDetails_container"]}>
          <div className={styles["eventDescription_container"]}>
            <h2>Description</h2>
            <div className={styles["des"]}>{data.description}</div>
          </div>
        </div>
        <div className={styles["form_content_container"]}>
          <Schedule eventSchedule={data.schedule} />
        </div>
        <div className={styles["form_content_container"]}>
          <Host eventHost={data.host} />
        </div>
        <div> 
          <Link to="/eventList">
            <ArrowBackIcon
              style={{ color: "rgb(238, 49, 36)", fontSize: "35px" }}
            />
          </Link>
        </div>
     </div>
  );
};
export default EventPage;
