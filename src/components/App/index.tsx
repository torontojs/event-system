import React from "react";
import EventList from "../EventList";
import EventPage from "../EventPage";

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
      <EventPage
        eventTitle="Event3"
        eventStartDate={new Date().getTime()}
        eventDescription={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }
        eventEndDate={new Date().getTime()}
        eventRsvp={undefined}
        shareEvent=""
        eventSchedule="Event start date: 6:30
        Workshop code-along: 7:00
        Q&A or exeended chit chat:8:30
        Event ends:9:00"
        eventHost="Host name: Elon Musk, Host image"
      />
    </div>
  );
};

export default App;
