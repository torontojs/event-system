import React from "react";
import EventList from "../EventList";

export type EventList = {
  eventTitle: string;
  eventDescription: string;
  eventDate: number;
  eventTime: number;
  eventRsvp: boolean;
};

const App: React.FC = () => {
  return (
    <div>
      <EventList
        eventTitle="Event1"
        eventDate={2021 - 6 - 12}
        eventDescription={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }
        eventTime={6.0}
        eventRsvp={undefined}
      />
      <EventList
        eventTitle="Event2"
        eventDate={2021 - 6 - 12}
        eventDescription={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }
        eventTime={6.0}
        eventRsvp={undefined}
      />
      <EventList
        eventTitle="Event3"
        eventDate={2021 - 6 - 12}
        eventDescription={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }
        eventTime={6.0}
        eventRsvp={undefined}
      />
    </div>
  );
};

export default App;
