import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { auth } from "./Config";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "./Context/AuthContext";

function Login() {
  const [email, setemail] = useState("");
  const [passward, setpassward] = useState("");
  const authcontext= useContext(AuthContext)
  const navigate = useNavigate();

  async function handlesubmit(e) {
    e.preventDefault();
    try {
      const usercredentials = await signInWithEmailAndPassword(
        auth,
        email,
        passward
      );
      const user = usercredentials.user;
      console.log(user.email);
      authcontext.setusername(user.email);
      authcontext.setvstate(true);
      navigate("/privatelogin/profile")
    } catch {
      alert("wrong passward")
      authcontext.setvstate(false);
    }
    
  }

  return (
    <div><p style={{textAlign:"center", fontSize:"20px"}}>This is Private Routing Form</p>
    <div
      style={{
        border: "1px solid black",
        borderRadius:"30px",
        padding: "30px",
        width: "400px",
        margin: "50px",
        gap: "20px",
        display: "flex",
        flexDirection: "column",
        textAlign:"center"
      }}
    >
      <h1>Login</h1>
      <input
        type="email"
        name=""
        id=""
        placeholder="Enter your email here"
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          padding: "10px"
        }}
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />
      <input
        type="password"
        name=""
        id=""
        placeholder="enter your passward"
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          padding: "10px",
        }}
        onChange={(e) => {
          setpassward(e.target.value);
        }}
      />
      <button
        style={{
          border: "1px solid black",
          borderRadius: "10px",
          padding: "10px",
          color :"black",
          backgroundColor:"gray"
        }}
        onClick={handlesubmit}
      >
        Submit
      </button>
      <p>
        Don not have account ...{" "}
        <Link to={"/"} style={{ color: "red" }}>
          Signup
        </Link>
      </p>
    </div></div>
  );
}

export default Login;
