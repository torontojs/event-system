import React from "react";
import styles from "./LinkSection.module.css";
import { Link } from "react-router-dom";
import { useResource } from "react-ketting";

interface LinkSectionProps {
  link: any;
  eventId: any;
 }

type LinkSection = {
  date: number;
  info: string;
  eventLink: string;
  eventChange?:string;
  id: string;
};

const LinkSection: React.FC<LinkSectionProps> = ({link, eventId}) => {
  const {id}: any = link; 
  const { loading, error, data } = useResource<LinkSection>(`/linkSection/${link}`);
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
        <Link to={`/edit/${eventId}`}>
          <button className={styles["change"]}>
            Change your RSVP 
          </button>
        </Link>
      </form>
    </div>
  );
};

export default LinkSection;
