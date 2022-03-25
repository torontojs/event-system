import React from "react";
import styles from "./Host.module.css";
import spongebob from "../Images/spongebob.jpeg";
import { useParams } from "react-router-dom";
import { useResource } from "react-ketting";

interface HostProps {
  eventHost: string;
}

type Host = {
  host_name: string;
  host_picture: string;
};


const Host: React.FC<HostProps> = ({eventHost}) => {
  const {id}: any = eventHost; 
  const { loading, error, data } = useResource<Host>(`/host/${eventHost}`);
  if (loading) return <p>Loading...</p>;
  if (error) return <div className="error">{error.message}</div>;

  return (
    <div className={styles["eventHost_container"]}>
      <h2>Host</h2>
      <h3>{data.host_name}</h3>
      {data.host_picture && <img className={styles["pic"]} src={data.host_picture[0]} />}
        {/* {data.host_picture} */}
        {/* <img src={spongebob} alt="" /> */}
      {/* </img> */}
      {console.log(data.host_picture)}
    </div>
  );
};

export default Host;
