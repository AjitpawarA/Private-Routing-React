import React from 'react'
import "./notloggedin.css";

function NotLoggedin() {
  return (
    <div className="container">
  <h1>Oops! You're not logged in.</h1>
  <p>Please log in to access this page.</p>
  <a href="#" className="btn">
    Log In
  </a>
</div>

  )
}

export default NotLoggedin