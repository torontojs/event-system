import React from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import GitHubLogin from "react-github-login";

interface RegisterProps {
  rsvpGit: string;
}

const onSuccess = (response: any) => console.log(response);
const onFailure = (response: any) => console.error(response);

const Register: React.FC<RegisterProps> = ({}) => {
  return (
    <div className={styles["form_container"]}>
      <form>
        <div className={styles["dates_container"]}>
          <h3>Attend Online</h3>
          {/* <Link to="/eventLink"> */}
          <GitHubLogin
            className={styles["submit"]}
            clientId="d5ec0c7b2f9fe82ff33d"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            redirectUri={"http://localhost:9000/eventlink"}
          >
            RSVP with GitHub{}
          </GitHubLogin>
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
};

export default Register;
