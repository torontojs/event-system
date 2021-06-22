import React from "react";
import styles from "./Share.module.css";
import ClearIcon from "@material-ui/icons/Clear";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FileCopyIcon from "@material-ui/icons/FileCopy";

interface IShare {
  facebook: string;
  twitter: string;
  linkedIn: string;
  copy: string;
}

const Share: React.FC<IShare> = ({ facebook, twitter, linkedIn, copy }) => {
  return (
    <div className={styles["share_container"]}>
      <ClearIcon className="cross">
        <span className={styles["cancel"]}></span>
      </ClearIcon>
      <h3>Share this event!</h3>
      <div className={styles["social_container"]}>
        <FacebookIcon>
          <h3>FaceBook</h3>
          {facebook}
        </FacebookIcon>

        <TwitterIcon>
          <a href={`http://www.twitter.com/`}>
            <h3>Twitter</h3>
          </a>
          {twitter}
        </TwitterIcon>
        <LinkedInIcon>
          <h3>LinkedIn</h3>
          {linkedIn}
        </LinkedInIcon>

        <FileCopyIcon>
          <h3>Copy Link</h3>
          {copy}
        </FileCopyIcon>
      </div>
    </div>
  );
};

export default Share;
