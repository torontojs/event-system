import React from "react";
import styles from "./LinkSection.module.css";
import { Link, useParams } from "react-router-dom";
import { useResource } from "react-ketting";

interface LinkSectionProps {
  eventStartDate?: number;
  eventEndDate?: number;
  eventLink?: string;
  eventChange: string;
 }

type LinkSection = {
  date: number;
  info: string;
  eventLink: string;
 
};

const LinkSection: React.FC<LinkSectionProps> = ({
  eventStartDate,
  eventEndDate,
  eventLink,
  eventChange,
  
}) => {
  const {id}: { id: any} = useParams(); 
  const { loading, error, data } = useResource<LinkSection>(`/linkSection/${id}`);
  if (loading) return <p>Loading...</p>;
  if (error) return <div className="error">{error.message}</div>;

  return (
    <div className={styles["form_container"]}>
      <form>
        <div className={styles["dates_container"]}>
          {/* event start date and time  */}
          <h4>{data.date}</h4>
          <h4>{data.info}</h4>
        </div>
        <h5>Online Event </h5>
        <div className={styles["elink"]}>{data.eventLink}</div>
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
