import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div
      className="error-page"
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="notFound404">
        <h1 style={{ paddingBottom: "80px" }}>404</h1>
        <h2 style={{ paddingBottom: "90px" }}>Page not found</h2>
      </div>
      <Link to="/">
        <button className="done">Home Page</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
