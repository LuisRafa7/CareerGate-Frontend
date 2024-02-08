import { useContext, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";

const API_URL = import.meta.env.VITE_API_URL || `http://localhost:5005`;

function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    axios
      .post(`${API_URL}/auth/login`, requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
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
        <h1 className="title-signup">Login</h1>

        <form
          onSubmit={handleLoginSubmit}
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
            type="email"
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

          <button className="button button-signup" type="submit">
            Login
          </button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <p className="p-signup">Don't have an account yet?</p>
        <Link to={"/signup"} className="nav-link">
          {" "}
          <button className="button button-login">Sign up</button>{" "}
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
