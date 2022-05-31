import React from "react";
import styles from "./Register.module.css";
import GitHubLogin from "react-github-login";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useResource } from "react-ketting";
import { Resource } from "ketting";
import { useParams } from "react-router-dom";

interface RegisterProps {
  rsvpGit: string;
}

type Register = {
  id: string;
}

// function Register({ resource }: { resource: Resource<Register> }) {
//   const { loading, error, data } = useResource(resource);
//   if (loading) return <p>Loading...</p>;
//   if (error) return <div className="error">{error.message}</div>;
//   const onSuccessGithub = (response:any) => {

const Register: React.FC<RegisterProps> = ({}) => {
  const {id}: { id: any} = useParams(); 
  const onSuccessGithub = (response:any) => {
    console.log(response.code);
  } 
 
  const { loading, error, data } = useResource<Register>(`/event/${id}`);
  if (loading) return <p>Loading...</p>;
  if (error) return <div className="error">{error.message}</div>;

  const GITHUB_CLIENT_ID = "d5ec0c7b2f9fe82ff33d";
  const gitHubRedirectURL= "http://localhost:9000/events";
  // const path = `http://localhost:9000/event/${id}`;
  const path = "/";

  return (
    <div className={styles["form_container"]}>
      <form>
        <div className={styles["dates_container"]}>
          <h3>Attend Online</h3>
            <a href= {`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${gitHubRedirectURL}?path=${path}&scope=user:email`}>
             <div className={styles["submit"]}>
               <GitHubIcon style={{ fontSize: "20px", marginRight: "5px", color: "white" }} /> 
                RSVP with GitHub
             </div>
            </a>
            
          {/* <GitHubLogin clientId="d5ec0c7b2f9fe82ff33d"
            icon={<GitHubIcon style={{ fontSize: "20px", marginRight: "5px" }} />}
            onSuccess={onSuccessGithub}
            buttonText="RSVP with GitHub"
            className={styles["submit"]}
            valid={true}
            redirectUri= {`http://localhost:9000/event/${id}`}> 
            <GitHubIcon style={{ fontSize: "20px", marginRight: "5px" }} /> 
            RSVP with GitHub
          </GitHubLogin> */}
        </div>
      </form>
    </div>
  );
};


export default Register;
