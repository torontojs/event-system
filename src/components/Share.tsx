import React from "react";
import styles from "./Share.module.css";
import ClearIcon from "@material-ui/icons/Clear";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FileCopyIcon from "@material-ui/icons/FileCopy";

import { Link } from "react-router-dom";

interface IShare {
  facebook: string;
  twitter: string;
  linkedIn: string;
  copy: string;
}

const Share: React.FC<IShare> = ({ facebook, twitter, linkedIn, copy }) => {
  return (
    <div className={styles["share_container"]}>
      <Link to="/eventPage">
        <ClearIcon className={styles["cross"]}>
          <span className={styles["cancel"]}></span>
        </ClearIcon>
      </Link>

      <h3>Share this event!</h3>
      <div className={styles["social_container"]}>
        <div className={styles["facebook_container"]}>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=http://localhost:9000/eventPage"
            className={styles["facebook"]}
            target="blank"
          >
            <FacebookIcon />
            <h4 className={styles["h4"]}>FaceBook{facebook}</h4>
          </a>
        </div>

        <div className={styles["twitter_container"]}>
          <a
            href="https://twitter.com/intent/tweet?url=http://localhost:9000/eventPage&text=facebook"
            target="blank"
            className={styles["twitter"]}
          >
            <TwitterIcon />
            <h4 className={styles["h4"]}>Twitter{twitter}</h4>
          </a>
        </div>

        <div className={styles["linkedIn_container"]}>
          <a
            href="https://www.linkedin.com/shareArticle?mini=true&url=http://localhost:9000/eventPage"
            target="blank"
            className={styles["linkedIn"]}
          >
            <LinkedInIcon />
            <h4 className={styles["h4"]}>LinkedIn{linkedIn}</h4>
          </a>
        </div>
        <div className={styles["cop_container"]}>
          <a href="" className={styles["copy"]}>
            <FileCopyIcon />
            <h4 className={styles["h4"]}>Copy Link{copy}</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Share;
