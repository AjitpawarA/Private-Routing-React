import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./Config";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const [email, setemail] = useState("");
  const [passward, setpassward] = useState("");

  const navigate = useNavigate();

  async function handlesubmit(e) {
    e.preventDefault();
    try {
      const usercredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        passward
      );
      const user = usercredentials.user;
      navigate("/login");
    } catch {}
  }
  return (
    <div>
      <p style={{ textAlign: "center", fontSize: "20px" }}>
        This is Private Routing Form
      </p>
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
       <h1>SignUP</h1>
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter your email here"
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            padding: "10px",
          }}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <input
          type="passward"
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
          onClick={handlesubmit}
          style={{
             border: "1px solid black",
          borderRadius: "10px",
          padding: "10px",
          color :"black",
          backgroundColor:"gray"
          }}
        >
          Submit
        </button>
        <p>
          Alreday have an account ...{" "}
          <Link to={"/login"} style={{ color: "red" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
