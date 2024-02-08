// src/pages/SignupPage.jsx

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || `http://localhost:5005`;

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password, name };
    axios
      .post(`${API_URL}/auth/signup`, requestBody)
      .then((response) => {
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div
      className="signupPageContainer"
      style={{
        backgroundImage: `url(/images/image.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="signupPage">
        <h1 className="title-signup">Sign Up</h1>

        <form
          onSubmit={handleSignupSubmit}
          style={{ display: "flex", flexDirection: "row", gap: "30px" }}
        >
          <label className="label-signup">
            Email<i className="arrow right"></i>
          </label>
          <input
            className="inputsignup"
            style={{
              fontSize: "30px",
              fontFamily: '"Gill Sans", sans-serif',
              boxSizing: "border-box",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3px)",
              opacity: 1,
            }}
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <label className="label-signup">
            Password<i className="arrow right"></i>
          </label>
          <input
            className="inputsignup"
            style={{
              fontSize: "30px",
              fontFamily: '"Gill Sans", sans-serif',
              boxSizing: "border-box",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3px)",
              opacity: 1,
            }}
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <label className="label-signup">
            Name<i className="arrow right"></i>
          </label>
          <input
            className="inputsignup"
            style={{
              fontSize: "30px",
              fontFamily: '"Gill Sans", sans-serif',
              boxSizing: "border-box",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3px)",
              opacity: 1,
            }}
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <button className="button button-signup" type="submit">
            Sign Up
          </button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p className="p-signup">Already have account?</p>
        <Link to="/login" className="nav-link">
          {" "}
          <button className="button button-login">Login</button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default SignupPage;
