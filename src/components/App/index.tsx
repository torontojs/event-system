import React from "react";
import EventList from "../EventList";

export type EventList = {
  eventTitle: string;
  eventDescription: string;
  eventStartDate: number;
  eventEndDate: number;
  eventRsvp: boolean;
};

const App: React.FC = () => {
  return (
    <div>
      <EventList
        eventTitle="Event1"
        eventStartDate={new Date().getTime()}
        eventDescription={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }
        eventEndDate={new Date().getTime()}
        eventRsvp={undefined}
      />
      <EventList
        eventTitle="Event2"
        eventStartDate={new Date().getTime()}
        eventDescription={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }
        eventEndDate={new Date().getTime()}
        eventRsvp={undefined}
      />
      <EventList
        eventTitle="Event3"
        eventStartDate={new Date().getTime()}
        eventDescription={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }
        eventEndDate={new Date().getTime()}
        eventRsvp={undefined}
      />
    </div>
  );
};

export default App;
