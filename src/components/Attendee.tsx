// import React from "react";
// import styles from "./Attendee.module.css";
// import { useParams } from "react-router-dom";
// import { useResource } from "react-ketting";

// interface AttendeeProps {
//   attendees: string;
// }

// type Attendee = {
//   attendees: string;
//   id: string;
//   eventId: string;
// };

// const Attendee: React.FC<AttendeeProps> = ({}) => {
//   const {id}: { id: any} = useParams(); 
//   const { loading, error, data } = useResource<Attendee>(`/attendee/${id}`);
//   if (loading) return <p>Loading...</p>;
//   if (error) return <div className="error">{error.message}</div>;

//   return (
//     <div className={styles["eventAttendee_container"]}>
//       <h3 className={styles["total"]}>{`${data.attendees}`}{`${data.id}`}</h3>
//       {console.log(data)}
//     </div>
//   );
// };

// export default Attendee;
