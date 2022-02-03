import React from "react";
import styles from "./Register.module.css";
import GitHubLogin from "react-github-login";
import GitHubIcon from "@material-ui/icons/GitHub";

interface RegisterProps {
  rsvpGit: string;
}

const Register: React.FC<RegisterProps> = ({}) => {

  const onSuccessGithub = (response:any) => {
    console.log(response.code);
  } 

  return (
    <div className={styles["form_container"]}>
      <form>
        <div className={styles["dates_container"]}>
          <h3>Attend Online</h3>
          <GitHubLogin clientId="d5ec0c7b2f9fe82ff33d"
            icon={<GitHubIcon style={{ fontSize: "20px", marginRight: "5px" }} />}
            onSuccess={onSuccessGithub}
            buttonText="RSVP with GitHub"
            className={styles["submit"]}
            valid={true}
            redirectUri="http://localhost:9000/eventLink">
            <GitHubIcon style={{ fontSize: "20px", marginRight: "5px" }} /> 
            RSVP with GitHub
            </GitHubLogin>
        </div>
      </form>
    </div>
  );
};

export default Register;
