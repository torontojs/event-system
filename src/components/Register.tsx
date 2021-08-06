import React from "react";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";

interface RegisterProps {
  rsvpGit: string;
}

const Register: React.FC<RegisterProps> = ({ rsvpGit }) => {
  return (
    <div className={styles["form_container"]}>
      <form>
        <div className={styles["dates_container"]}>
          <h3>Attend Online</h3>
          <Link to="/eventLink">
            <button className={styles["submit"]}>
              RSVP with GitHub{}
              <a href="https://github.com/oauth/authorize?client id=d5ec0c7b2f9fe82ff33d" />
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
