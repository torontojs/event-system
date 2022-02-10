// import React from "react";
// import styles from "./EventList.module.css";
// import { Link } from "react-router-dom";
// import { useCollection } from "react-ketting";
// import EventListItem from "./EventListItem";
// import { useState } from "react";
// import { jsonApiStateFactory } from "ketting/dist/state";

// interface IEventProps {
//   eventTitle: string;
//   eventDescription: string;
//   eventStartDate: number;
//   eventEndDate: number;
//   eventShow?: boolean;
// }

// const EventList: React.FC<IEventProps> = ({
//   eventTitle,
//   eventDescription,
//   eventStartDate,
//   eventEndDate,
//   eventShow,
// }) => {
//   const { loading, error, items } = useCollection<EventListItem>("/event");
//   if (loading) return <p>Loading...</p>;
//   if (error) return <div className="error">{error.message}</div>;
//   console.log(items);

//   return (
//     // add event Id to enable load more feature
//     <div>
//       <div className={styles["header"]}>UPCOMING EVENTS</div>

//       <div className={styles["event_container"]}>
//         {items.map((item, i) => (
//           <EventListItem key={i} resource={item} />
//         ))}
//       </div>
//       <div className={styles["loadMore"]}>
//       <button className={styles["more"]}>Load More</button>
//     </div>
//     </div>
//   );
// };

// export default EventList;






