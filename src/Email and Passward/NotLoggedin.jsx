import React from "react";
import "./notloggedin.css";
import {Link} from "react-router-dom"


function NotLoggedin() {
  return (
    <div className="container">
      <h1>Oops! You're not logged in.</h1>
      <p>Please log in to access this page.</p>
      <Link to={"/login"} style={{ color: "red" }}>
            <a href="">Login</a>
          </Link>
    </div>
  );
}

export default NotLoggedin;
