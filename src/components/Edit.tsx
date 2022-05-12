import React from "react";
import styles from "./Edit.module.css";
import { Link,  useLocation, useParams } from "react-router-dom";
import { useResource } from "react-ketting";

interface EditProps {
  eventchange: string;
  eventUpdate: string;
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

const Edit: React.FC<EditProps> = ({
  eventchange, 
  eventUpdate 
}) => {
  const {id}: { id: any} = useParams(); 
  let eventId = id;

  const { loading, error, data } = useResource<Event>("/event/");
  if (loading) return <p>Loading...</p>;
  if (error) return <div className="error">{error.message}</div>;
  
  const params = new URLSearchParams(useLocation().search); 
  const code =  params.get("code");
  console.log(code);

  return (
    <div>
      <div className={styles["edit_container"]}>
        <div className={styles["info_container"]}>
          <div className={styles["h3"]}>
            <h3>Please Complete your RSVP</h3>
          </div>
          <p>Your current response: I am going!</p>
          <Link to={`/event/${eventId}`}>
            <button className={styles["not"]}>Not Going{eventchange}</button>
          </Link>
          <Link to={`/event/${eventId}?code=${code}`}>
            <button className={styles["update"]}>Update{eventUpdate}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Edit;
