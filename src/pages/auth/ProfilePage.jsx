import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth.context";
import axios from "axios";
import ModalPassword from "../../components/Modal/ModalPassword";
import ModalName from "../../components/Modal/ModalName";
import ModalEmail from "../../components/Modal/ModalEmail";

const API_URL = import.meta.env.VITE_API_URL || `http://localhost:5005`;

const ProfilePage = () => {
  const { user, setUser, authenticateUser, removeToken, storeToken } =
    useContext(AuthContext);

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState();

  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [editedEmail, setEditedEmail] = useState();

  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [editedPassword, setEditedPassword] = useState("");

  const [password, setPassword] = useState();

  const [errorMessage, setErrorMessage] = useState();

  const [modalName, setModalName] = useState(false);
  const [modalEmail, setModalEmail] = useState(false);
  const [modalPassword, setModalPassword] = useState(false);

  useEffect(() => {
    if (user) {
      setEditedName(user.name);
      setEditedEmail(user.email);
    }
  }, [user]);

  const handleChangeSubmit = async (e) => {
    const requestBody = { email: editedEmail, password: password };
    const response = await axios.post(`${API_URL}/auth/login`, requestBody);
    storeToken(response.data.authToken);
    authenticateUser();
    setPassword();
  };

  const changeUser = async (chan) => {
    try {
      const newUser = {
        name: chan.name,
        email: chan.email,
      };
      const response1 = await axios.put(
        `${API_URL}/api/user/${user._id}`,
        newUser
      );
      setUser(newUser);
      removeToken();
      const change = await handleChangeSubmit();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditNameClick = () => {
    setIsEditing(true);
  };

  const handleReturnNameClick = () => {
    setIsEditing(false);
  };

  const handleSaveNameClick = async () => {
    try {
      const requestBody = { email: user.email, password: password };
      const response = await axios.post(`${API_URL}/auth/login`, requestBody);
      if (response.status === 200) {
        setUser({ ...user, name: editedName });
        setIsEditing(false);
        changeUser({ ...user, name: editedName });
        toggleModalName();
      }
    } catch (error) {
      setErrorMessage("Wrong Password!");
    }
  };

  const handleEditEmailClick = () => {
    setIsEditingEmail(true);
  };

  const handleReturnEmailClick = () => {
    setIsEditingEmail(false);
  };

  const handleSaveEmailClick = async () => {
    try {
      const requestBody = { email: user.email, password: password };
      const response = await axios.post(`${API_URL}/auth/login`, requestBody);
      if (response.status === 200) {
        setUser({ ...user, email: editedEmail });
        setIsEditingEmail(false);
        changeUser({ ...user, email: editedEmail });
        toggleModalEmail();
      }
    } catch (error) {
      setErrorMessage("Wrong Password!");
    }
  };

  const handleEditPasswordClick = () => {
    setIsEditingPassword(true);
  };

  const handleReturnPasswordClick = () => {
    setIsEditingPassword(false);
  };

  const handleSavePasswordClick = async () => {
    try {
      const requestBody = { email: user.email, password: password };
      const response = await axios.post(`${API_URL}/auth/login`, requestBody);
      if (response.status === 200) {
        setIsEditingPassword(false);
        changePassword();
        toggleModalPassword();
      }
    } catch (error) {
      setErrorMessage("Wrong Password!");
    }
  };

  const changePassword = async () => {
    try {
      const requestBody = {
        email: editedEmail,
        password: editedPassword,
      };
      const response1 = await axios.post(
        `${API_URL}/auth/changePassword`,
        requestBody
      );
      removeToken();
      const change = await handleChangeSubmitPassword();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeSubmitPassword = async (e) => {
    const requestBody = { email: editedEmail, password: editedPassword };
    const response = await axios.post(`${API_URL}/auth/login`, requestBody);
    storeToken(response.data.authToken);
    authenticateUser();
    setPassword();
    setEditedPassword();
  };

  const toggleModalName = () => {
    setModalName(!modalName);
  };

  const toggleModalEmail = () => {
    setModalEmail(!modalEmail);
  };

  const toggleModalPassword = () => {
    setModalPassword(!modalPassword);
  };

  return (
    <div
      className="signupPageContainer"
      style={{
        backgroundImage: `url(/images/image2.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="signupPage"
        style={{
          border: "8px solid black",
          paddingRight: "90px",
          paddingLeft: "90px",
          paddingTop: "110px",
          paddingBottom: "110px",
          backdropFilter: "blur(3px)",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
        }}
      >
        <h1 className="profilepageh1">Profile Page</h1>
        <div id="buttonId">
          {isEditing ? (
            <>
              <label htmlFor="name" className="profile-p">
                Name:
              </label>
              <input
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
                value={editedName}
                onChange={(e) => {
                  setEditedName(e.target.value);
                }}
              />
              <label htmlFor="password" className="profile-p">
                Write your password:
              </label>
              <input
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {errorMessage && <p>{errorMessage}</p>}
              <button onClick={handleReturnNameClick} className="button3">
                Return
              </button>
              <button onClick={handleSaveNameClick} className="button3">
                Save
              </button>
            </>
          ) : (
            <>
              <p className="profile-p">
                Name <i className="arrow1 right1"></i> {user ? user.name : ""}
              </p>
              <button onClick={handleEditNameClick} className="button3">
                Edit Name
              </button>
            </>
          )}

          {isEditingEmail ? (
            <>
              <label htmlFor="email" className="profile-p">
                Name:
              </label>
              <input
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
                value={editedEmail}
                onChange={(e) => {
                  setEditedEmail(e.target.value);
                }}
              />
              <label htmlFor="password" className="profile-p">
                Write your password:
              </label>
              <input
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {errorMessage && <p>{errorMessage}</p>}
              <button onClick={handleReturnEmailClick} className="button3">
                Return
              </button>
              <button onClick={handleSaveEmailClick} className="button3">
                Save
              </button>
            </>
          ) : (
            <>
              <p className="profile-p">
                Email <i className="arrow1 right1"></i> {user ? user.email : ""}{" "}
              </p>
              <button
                onClick={handleEditEmailClick}
                className="button3 classbutton"
              >
                Edit Email
              </button>
            </>
          )}

          {isEditingPassword ? (
            <>
              <label htmlFor="newPassword" className="profile-p">
                New Password:
              </label>
              <input
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
                name="newPassword"
                onChange={(e) => {
                  setEditedPassword(e.target.value);
                }}
              />
              <label htmlFor="oldPassword" className="profile-p">
                Write your old password:
              </label>
              <input
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
                name="oldPassword"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {errorMessage && <p>{errorMessage}</p>}
              <button onClick={handleReturnPasswordClick} className="button3">
                Return
              </button>
              <button onClick={handleSavePasswordClick} className="button3">
                Save
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleEditPasswordClick}
                className="button3 classbutton"
              >
                Change Password
              </button>
            </>
          )}

          {modalName && <ModalName toggleModal={toggleModalName} />}
          {modalEmail && <ModalEmail toggleModal={toggleModalEmail} />}
          {modalPassword && <ModalPassword toggleModal={toggleModalPassword} />}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
