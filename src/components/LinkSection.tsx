import React from "react";
import styles from "./LinkSection.module.css";
import { Link } from "react-router-dom";
import { useResource } from "react-ketting";

interface LinkSectionProps {
  eventStartDate?: number;
  eventEndDate?: number;
  eventLink?: string;
  eventChange: string;
}

type LinkSection = {
  start_time: number;
  end_time?: boolean;
  eventLink: string;
};

const LinkSection: React.FC<LinkSectionProps> = ({
  eventStartDate,
  eventEndDate,
  eventLink,
  eventChange,
}) => {
  const { loading, error, data } = useResource<LinkSection>("/linkSection/1");
  if (loading) return <p>Loading...</p>;
  if (error) return <div className="error">{error.message}</div>;

  return (
    <div className={styles["form_container"]}>
      <form>
        <div className={styles["dates_container"]}>
          {/* event start date and time  */}
          <h4>{data.start_time}</h4>
          <h4>{data.end_time}</h4>
        </div>
        <h5>Online Event</h5>
        <div className={styles["elink"]}>{data.eventLink}</div>
        <button className={styles["going"]}>I'm Going!</button>
        <br />
        <Link to="/Edit">
          <button className={styles["change"]}>
            Change your RSVP{eventChange}
          </button>
        </Link>
      </form>
    </div>
  );
};

export default LinkSection;
