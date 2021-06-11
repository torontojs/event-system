import React from "react";

interface EventProps {
  eventTitle: string;
  eventDescription: string;
  eventDate: number;
  eventTime: number;
  eventRsvp?: boolean;
}

const EventList: React.FC<EventProps> = ({
  eventTitle,
  eventDescription,
  eventTime,
  eventDate,
  eventRsvp,
}) => {
  return (
    <aside>
      <h2>{eventTitle}</h2>
      <h3>{eventTime}</h3>
      <h3>{eventDate}</h3>
      <p>{eventDescription}</p>
      <button className="rsvp">RSVP{eventRsvp}</button>
    </aside>
  );
};

export default EventList;
