import React from "react";
import styles from "./Register.module.css";

export default class Register extends React.Component<{}, Istate> {
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
    });
  }

  render() {
    console.log(this.state);
    return (
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
          <button className={styles["submit"]}>RSVP{}</button>
        </form>
      </div>
    );
  }
}

interface Istate {
  currentFullName: string;
  fullName: Array<string>;
  currentEmailAddress: string;
  emailAddress: Array<string>;
}
