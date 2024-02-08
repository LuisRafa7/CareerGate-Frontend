import React, { useState } from "react";
import axios from "axios";
import Confirm from "../components/CreateCV/Confirm";
import EditPerson from "../components/EditCV/EditPerson";
import EditExperience from "../components/EditCV/EditExperience";
import EditEducation from "../components/EditCV/EditEducation";
import EditLanguages from "../components/EditCV/EditLanguages";
import EditSkills from "../components/EditCV/EditSkills";
import EditConfirm from "../components/EditCV/EditConfirm";
import { useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL || `http://localhost:5005`;

function EditCV({ getPerson, person123, SetChosePage }) {
  const [number, setNumber] = useState(0);
  const [person, setPerson] = useState({
    name: "",
    adress: "",
    city: "",
    postCode: "",
    email: "",
    phoneNumber: "",
    informations: "",
    image: "",
  });
  const [curriculumVitae, setCurriculumVitae] = useState({});

  let { personId } = useParams();

  const submit = async () => {
    const response = await axios.get(`${API_URL}/api/person/${personId}`);
    const response1 = await axios.put(
      `${API_URL}/api/curriculumVitae/${response.data.curriculumVitae._id}`,
      curriculumVitae
    );
    const response2 = await axios.put(
      `${API_URL}/api/person/${person123._id}`,
      {
        name: person.name,
        adress: person.adress,
        city: person.city,
        postCode: person.postCode,
        email: person.email,
        phoneNumber: person.phoneNumber,
        informations: person.informations,
        image: person.image,
        curriculumVitae: response1.data._id,
      }
    );
    getPerson();
    SetChosePage(1);
  };

  return (
    <div>
      <h1 className="createcvh1" style={{ paddingBottom: "20px" }}>
        Edit your CV
      </h1>
      {number === 0 && (
        <EditPerson
          setNumber={setNumber}
          person={person}
          setPerson={setPerson}
        />
      )}
      {number === 1 && (
        <EditExperience
          setNumber={setNumber}
          curriculumVitae={curriculumVitae}
          setCurriculumVitae={setCurriculumVitae}
        />
      )}
      {number === 2 && (
        <EditEducation
          setNumber={setNumber}
          curriculumVitae={curriculumVitae}
          setCurriculumVitae={setCurriculumVitae}
        />
      )}
      {number === 3 && (
        <EditLanguages
          setNumber={setNumber}
          curriculumVitae={curriculumVitae}
          setCurriculumVitae={setCurriculumVitae}
        />
      )}
      {number === 4 && (
        <EditSkills
          setNumber={setNumber}
          curriculumVitae={curriculumVitae}
          setCurriculumVitae={setCurriculumVitae}
        />
      )}
      {number === 5 && (
        <EditConfirm
          setNumber={setNumber}
          curriculumVitae={curriculumVitae}
          setCurriculumVitae={setCurriculumVitae}
          submit={submit}
        />
      )}
    </div>
  );
}

export default EditCV;
