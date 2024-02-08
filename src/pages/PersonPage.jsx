import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import NewPerson from "../components/CreatePerson/NewPerson";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || `http://localhost:5005`;

function PersonPage() {
  const [personArray, setPersonArray] = useState([]);

  const [createPerson, setCreatePerson] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    {
      user && getPerson();
    }
  }, [user]);

  const getPerson = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/person`);
      if (response.data) {
        const filter = response.data.filter((one) => one.user === user._id);
        setPersonArray(filter);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addNewPerson = () => {
    setCreatePerson(true);
  };

  const addPerson = async (person) => {
    try {
      const response = await axios.post(`${API_URL}/api/person`, person);
      const response1 = await axios.get(`${API_URL}/api/user/${user._id}`);
      const response2 = await axios.put(`${API_URL}/api/user/${user._id}`, {
        person: [...response1.data.person, response.data._id],
      });
      setCreatePerson(false);
      const res = await getPerson();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
        borderRadius: "10px",
        padding: "120px 80px",
        width: "fit-content",
        margin: "auto",
        marginTop: "200px",
        marginBottom: "200px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <>
        {personArray &&
          personArray.map((one) => {
            return (
              <>
                <div key={one._id}>
                  <button
                    className="btn1"
                    onClick={() => {
                      navigate(`/person/CV/${one._id}`);
                    }}
                  >
                    {one.name}
                  </button>
                </div>
              </>
            );
          })}

        {createPerson ? (
          <NewPerson addPerson={addPerson} getPerson={getPerson} />
        ) : (
          <button onClick={addNewPerson} className="button btn-person">
            Create a New Person
          </button>
        )}
      </>
      <div className="gradient-border"></div>
    </div>
  );
}

export default PersonPage;
