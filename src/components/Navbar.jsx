
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    <nav style={{backgroundColor: "#f0f0f0", display: "flex", justifyContent: "space-between", alignItems: "center", padding:"10px", maxHeight: "150px"}}>
      <h1 className="careergate">CAREERGATE</h1>
      <div style={{ display: "flex", gap: "70px" }}>
      <Link to="/" className="nav-link">
        <button id="my-button" className="button">Home</button>
      </Link>

      {isLoggedIn && (
        <>
          <Link to="/profile" className="nav-link">
            <button id="my-button" className="button">Profile</button>
          </Link>
          <button onClick={logOutUser} id="my-button" className="button">Logout</button>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup" className="nav-link">
            {" "}
            <button id="my-button" className="button">Sign Up</button>{" "}
          </Link>
          <Link to="/login" className="nav-link">
            {" "}
            <button id="my-button" className="button">Login</button>{" "}
          </Link>
        </>
      )}
      </div>
    </nav>
  );
}

export default Navbar;
