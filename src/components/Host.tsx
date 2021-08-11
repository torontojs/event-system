import React from "react";
import styles from "./Host.module.css";
import spongebob from "../Images/spongebob.jpeg";
import { useResource } from "react-ketting";

interface HostProps {
  eventHost: string;
}

type Host = {
  host_name: string;
  host_picture: string;
};

const Host: React.FC<HostProps> = ({}) => {
  const { loading, error, data } = useResource<Host>("/Host/1");
  if (loading) return <p>Loading...</p>;
  if (error) return <div className="error">{error.message}</div>;

  return (
    <div className={styles["eventHost_container"]}>
      <h2>Host</h2>
      <h3>{data.host_name}</h3>
      <div className={styles["pic"]}>
        {data.host_picture}
        {/* <img src={require("../Images/spongebob.jpeg").default} alt="" /> */}
        <img src={spongebob} alt="" />
      </div>
    </div>
  );
};

export default Host;
