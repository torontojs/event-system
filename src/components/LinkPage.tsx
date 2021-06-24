import React from "react";
import styles from "./Register.module.css";

interface LinkPageProps {}

const LinkPage: React.FC<LinkPageProps> = ({}) => {
  return (
    <div className={styles["form_container"]}>
      <form>
        <div>
          <h3>Online Event</h3>
        </div>
        <br />
        <button className={styles["going"]}>I'm Going!{}</button>
        <br />
        <button className={styles["change"]}>Change your RSVP{}</button>
      </form>
    </div>
  );
};

export default LinkPage;
