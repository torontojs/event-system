import React from "react";
import { Waypoint } from "react-waypoint";

interface ILoadMore {
  children: React.ReactElement;
  callBack(args: Waypoint.CallbackArgs): void;
}

const LoadMore = (props: ILoadMore) => {
  return (
    <>
      {props.children}
      <Waypoint bottomOffset="-15px" onEnter={props.callBack}></Waypoint>
    </>
  );
};

export default LoadMore;
