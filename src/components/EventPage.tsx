import React from "react";
import styles from "./EventPage.module.css";

interface EventPageProps {
  eventTitle: string;
  eventDescription: string;
  eventStartDate: number;
  eventEndDate: number;
  eventRsvp?: boolean;
  shareEvent: string;
  eventSchedule: string;
  eventHost: string;
}
export default class EventPage extends React.Component<{}, Istate> {
  constructor(props: {}) {
    super(props);
    this.state = {
      currentFullName: "",
      currentEmailAddress: "",
      fullName: [],
      emailAddress: [],
    };
  }
  handleSubmit(e: any) {
    e.preventDefault();
    this.setState({
      currentFullName: "",
      currentEmailAddress: "",
      fullName: [...this.state.fullName, this.state.currentFullName],

      emailAddress: [
        ...this.state.emailAddress,
        this.state.currentEmailAddress,
      ],
    });
  }
  EventPage: React.FC<EventPageProps> = ({
    eventTitle,
    eventDescription,
    eventStartDate,
    eventEndDate,
    eventRsvp,
    shareEvent,
    eventSchedule,
    eventHost,
  }) => {
    return (
      <div>
        <div className={styles["navWrapper"]}>
          <div className={styles["time_container"]}>
            <h2>{eventTitle}</h2>
            <h3>{eventStartDate}</h3>
            <h3>{eventEndDate}</h3>
          </div>
          {/* <Link href="/description">Description</Link>
        <Link href="/schedule">Schedule</Link>
        <Link href="/host">Host</Link> */}
          <div className={styles["form_content_container"]}>
            <div className={styles["form_container"]}>
              <form onSubmit={(e) => this.handleSubmit(e)}>
                <div>
                  <h3>Attend Online</h3>
                  <label htmlFor="fullName">Full Name</label>
                  <br />
                  <input
                    id="fullName"
                    type="text"
                    value={this.state.currentFullName}
                    onChange={(e) =>
                      this.setState({ currentFullName: e.target.value })
                    }
                  />
                </div>
                <br />
                <div>
                  <label htmlFor="emailAddress">Email Address</label>
                  <br />
                  <input
                    id="emailAddress"
                    type="text"
                    value={this.state.currentEmailAddress}
                    onChange={(e) =>
                      this.setState({ currentEmailAddress: e.target.value })
                    }
                  />
                </div>
                <br />
                <button className={styles["submit"]}>RSVP{eventRsvp}</button>
              </form>
            </div>
            <div className={styles["btn_share"]}>
              <button className={styles["sharevent"]}>
                Share Event{shareEvent}
              </button>
            </div>
          </div>
        </div>

        <div className={styles["eventDescription"]}>
          <h2>Description</h2>
          <p>{eventDescription}</p>
        </div>

        <div className={styles["eventSchedule_contaner"]}>
          <h2>Schedule</h2>
          <p>{eventSchedule}</p>
        </div>

        <div className={styles["eventHost_container"]}>
          <h2>Host</h2>
          <h2>{eventHost}</h2>
        </div>
      </div>
    );
  };
}

interface Istate {
  currentFullName: string;
  fullName: Array<string>;
  currentEmailAddress: string;
  emailAddress: Array<string>;
}
