import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/auth/SingupPage";
import LoginPage from "./pages/auth/LoginPage";
import ProfilePage from "./pages/auth/ProfilePage";
import Homepage from "./pages/Homepage";
import PersonPage from "./pages/PersonPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowCV from "./pages/ShowCV";
import ErrorPage from "./pages/ErrorPage";
import IsPrivate from "./components/IsPrivate";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />
        <Route
          path="/person"
          element={
            <IsPrivate>
              <PersonPage />
            </IsPrivate>
          }
        />
        <Route
          path="/person/CV/:personId"
          element={
            <IsPrivate>
              <ShowCV />
            </IsPrivate>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
