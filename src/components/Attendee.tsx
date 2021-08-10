import React from "react";
import styles from "./Attendee.module.css";
import { useResource } from "react-ketting";

interface AttendeeProps {
  eventAttendees: string;
}

type Attendee = {
  eventAttendees: string;
};

const Attendee: React.FC<AttendeeProps> = ({}) => {
  const { loading, error, data } = useResource<Attendee>("/Attendee/1");
  if (loading) return <p>Loading...</p>;
  if (error) return <div className="error">{error.message}</div>;

  return (
    <div className={styles["eventAttendee_container"]}>
      <h3 className={styles["total"]}>{data.eventAttendees}</h3>
    </div>
  );
};

export default Attendee;
