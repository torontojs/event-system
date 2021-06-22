import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EventList from "../EventList";
import EventPage from "../EventPage";
import Confirmation from "../Confirmation";
import Share from "../Share";

const App: React.FC = () => {
  return (
    <div>
      {/* <Router>
        <div>
          <Switch>
            <Route path="/eventPage">
              <EventPage
                eventTitle="Event2"
                eventStartDate={new Date().getTime()}
                eventDescription={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                }
                eventEndDate={new Date().getTime()}
                eventRsvp={undefined}
                shareEvent=""
                eventSchedule="Event start date: 6:30
              Workshop code-along: 7:00
              Q&A or extended chit chat:8:30
              Event ends:9:00"
                eventHost="Host name: Elon Musk, Host image"
              />
            </Route>
            <Route path="/confirmation">
              <Confirmation
                eventConfirmation="Confirmation message of RSVP received
              "
                eventOk=""
              />
            </Route>
            <Route path="/eventList">
              <EventList
                eventTitle="Event1"
                eventStartDate={new Date().getTime()}
                eventDescription={
                  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                }
                eventEndDate={new Date().getTime()}
                eventRsvp={undefined}
              />
            </Route>
          </Switch>
        </div>
      </Router> */}

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
        eventTitle="Event2"
        eventStartDate={new Date().getTime()}
        eventDescription={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }
        eventEndDate={new Date().getTime()}
        eventRsvp={undefined}
        shareEvent=""
        eventSchedule="Event start date: 6:30
        Workshop code-along: 7:00
        Q&A or extended chit chat:8:30
        Event ends:9:00"
        eventHost="Host name: Elon Musk, Host image"
      />

      <Confirmation
        eventConfirmation="Confirmation message of RSVP received
      "
        eventOk=""
      />

      <Share
        facebook="string"
        twitter="http://www.twitter.com"
        linkedIn="string"
        copy="string"
      />
    </div>
  );
};

export default App;
