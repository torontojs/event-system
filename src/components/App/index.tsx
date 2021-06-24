import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EventList from "../EventList";
import EventPage from "../EventPage";
import Confirmation from "../Confirmation";
import Share from "../Share";
import EventLink from "../EventLink";

const App: React.FC = () => {
  return (
    <div>
      <Router>
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
            <Route path="/share">
              <Share facebook="" twitter="" linkedIn="" copy="" />
            </Route>
            <Route path="/eventLink">
              <EventLink
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
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
