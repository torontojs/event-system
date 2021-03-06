import React from "react";
import styles from "./Schedule.module.css";
import { useResource } from "react-ketting";

interface ScheduleProps {
  eventSchedule: any;
}

type Schedule = {
  start: string;
  activity: string;
  closing: string;
  end: string;
};


const Schedule: React.FC<ScheduleProps> = ({eventSchedule}) => { 
  const {id}: any = eventSchedule; 
  const { loading, error, data } = useResource<Schedule>(`/schedule/${eventSchedule}`);
  if (loading) return <p>Loading...</p>;
  if (error) return <div className="error">{error.message}</div>;
 
  return (
    <div className={styles["eventSchedule_contaner"]}>
      <h2>Schedule</h2>
      <div className={styles["des"]}>{data.start}</div>
      <div className={styles["des"]}>{data.activity}</div>
      <div className={styles["des"]}>{data.closing}</div>
      <div className={styles["des"]}>{data.end}</div>
    </div>
  );
};

export default Schedule;