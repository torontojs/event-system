import React from "react";
import styles from "./Schedule.module.css";
import { useResource } from "react-ketting";

interface ScheduleProps {
  eventSchedule: string;
}

type Schedule = {
  start: string;
  codeAlong: string;
  questionA: string;
  end: string;
};

const Schedule: React.FC<ScheduleProps> = ({}) => {
  const { loading, error, data } = useResource<Schedule>("/schedule/1");
  if (loading) return <p>Loading...</p>;
  if (error) return <div className="error">{error.message}</div>;

  return (
    <div className={styles["eventSchedule_contaner"]}>
      <h2>Schedule</h2>
      <div className={styles["des"]}>{data.start}</div>
      <div className={styles["des"]}>{data.codeAlong}</div>
      <div className={styles["des"]}>{data.questionA}</div>
      <div className={styles["des"]}>{data.end}</div>
    </div>
  );
};

export default Schedule;
