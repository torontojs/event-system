import React from "react";
import styles from "./Register.module.css";
import GitHubLogin from "react-github-login";
import GitHubIcon from "@material-ui/icons/GitHub";

interface RegisterProps {
  rsvpGit: string;
}

const onSuccess = (response: any) => console.log(response);
const onFailure = (response: any) => console.error(response);
const GITHUB_CLIENT_ID = "d5ec0c7b2f9fe82ff33d";
const gitHubRedirectURL = "http://localhost:8500/api/auth/github";
const path = "/eventLink";

const Register: React.FC<RegisterProps> = ({}) => {
  return (
    <div className={styles["form_container"]}>
      <form>
        <div className={styles["dates_container"]}>
          <h3>Attend Online</h3>

          <a
            href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${gitHubRedirectURL}?path=${path}&scope=user:email`}
            className={styles["submit"]}
            // clientId="d5ec0c7b2f9fe82ff33d"
            // onSuccess={onSuccess}
            // onFailure={onFailure}
            // cookiePolicy={"single_host_origin"}
            // redirectUri={"http://localhost:9000/eventlink"}
          >
            <GitHubIcon style={{ fontSize: "20px", marginRight: "5px" }} />
            RSVP with GitHub
          </a>
        </div>
      </form>
    </div>
  );
};

export default Register;
