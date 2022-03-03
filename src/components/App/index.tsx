import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EventList from "../EventList";
import EventPage from "../EventPage";
import Edit from "../Edit";
import EventLink from "../EventLink";
import { KettingProvider } from "react-ketting";
import { Client } from "ketting";

const client = new Client("http://localhost:8500");



const App: React.FC = () => {
  return (
    <KettingProvider client={client}>
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <EventList
                  eventTitle="Event1"
                  eventStartDate={new Date().getTime()}
                  eventDescription={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                  }
                  eventEndDate={new Date().getTime()}
                  eventShow={undefined}
                />
              </Route>
              <Route exact path="/events">
                <EventList
                  eventTitle="Event1"
                  eventStartDate={new Date().getTime()}
                  eventDescription={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                  }
                  eventEndDate={new Date().getTime()}
                  eventShow={undefined}
                />
              </Route>
              <Route path="/event/:id">
                <EventPage
                  eventTitle="Event2"
                  eventAttendees=""
                  eventStartDate={new Date().getTime()}
                  eventDescription={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
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
              <Route exact path="/eventList">
                <EventList
                  eventTitle="Event1"
                  eventStartDate={new Date().getTime()}
                  eventDescription={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
                  }
                  eventEndDate={new Date().getTime()}
                  eventShow={undefined}
                />
              </Route>
              <Route exact path="/eventLink">
                <EventLink
                  eventTitle="Event2"
                  eventAttendees=""
                  eventStartDate={new Date().getTime()}
                  eventDescription={
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
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
              <Route path="/edit">
                <Edit eventchange="" eventUpdate="" />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </KettingProvider>
  );
};

export default App;
