import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || `http://localhost:5005`;

function Person({ setNumber, person, setPerson }) {
  const [person123, setPerson123] = useState();
  const [name, setName] = useState();
  const [job, setJob] = useState();
  const [adress, setAdress] = useState();
  const [city, setCity] = useState();
  const [postCode, setPostCode] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [informations, setInformations] = useState();
  const [image, setImage] = useState();
  const [imageSelected, setImageSelected] = useState();

  let { personId } = useParams();

  useEffect(() => {
    getPerson();
  }, []);

  const getPerson = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/person/${personId}`);
      setPerson123(response.data);
      setName(response.data.name ? response.data.name : "");
      setJob(response.data.job ? response.data.job : "");
      setAdress(response.data.adress ? response.data.adress : "");
      setCity(response.data.city ? response.data.city : "");
      setPostCode(response.data.postCode ? response.data.postCode : "");
      setEmail(response.data.email ? response.data.email : "");
      setPhoneNumber(
        response.data.phoneNumber ? response.data.phoneNumber : ""
      );
      setInformations(
        response.data.informations ? response.data.informations : ""
      );
      setImage(response.data.image ? response.data.image : "");
    } catch (error) {
      console.error("Error fetching person:", error);
    }
  };

  const uploadImage = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("file", imageSelected);
      formData.append("upload_preset", "iyjtj16g");
      formData.append("cloud_name", "dnr0j82bs");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dnr0j82bs/image/upload",
        {
          method: "post",
          body: formData,
        }
      );
      if (response) {
        const imgData = await response.json();
        setImage(imgData.url.toString());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNumber(1);
    console.log(image);
    setPerson({
      name: name,
      job: job,
      adress: adress,
      city: city,
      postCode: postCode,
      email: email,
      phoneNumber: phoneNumber,
      informations: informations,
      image: image,
    });
  };

  return (
    <>
      {person123 && (
        <form
          onSubmit={handleSubmit}
          className="container-person1"
          style={{ gap: "20px" }}
        >
          {image && (
            <img src={image} alt="profile" style={{ maxWidth: "300px" }} />
          )}
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg"
            onChange={(e) => {
              setImageSelected(e.target.files[0]);
            }}
          />
          <button onClick={uploadImage} className="button4 buttonfirst">
            Upload Image
          </button>
          <label htmlFor="name" className="person-p">
            Name:
          </label>
          <input
            className="inputcv"
            style={{
              fontSize: "25px",
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
          <label htmlFor="job" className="person-p">
            Job:
          </label>
          <input
            className="inputcv"
            style={{
              fontSize: "25px",
              fontFamily: '"Gill Sans", sans-serif',
              boxSizing: "border-box",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3px)",
              opacity: 1,
            }}
            type="text"
            name="job"
            value={job}
            onChange={(e) => {
              setJob(e.target.value);
            }}
          />
          <label htmlFor="adress" className="person-p">
            Adress:
          </label>
          <input
            className="inputcv"
            style={{
              fontSize: "25px",
              fontFamily: '"Gill Sans", sans-serif',
              boxSizing: "border-box",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3px)",
              opacity: 1,
            }}
            type="text"
            name="adress"
            value={adress}
            onChange={(e) => {
              setAdress(e.target.value);
            }}
          />
          <label htmlFor="city" className="person-p">
            City:
          </label>
          <input
            className="inputcv"
            style={{
              fontSize: "25px",
              fontFamily: '"Gill Sans", sans-serif',
              boxSizing: "border-box",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3px)",
              opacity: 1,
            }}
            type="text"
            name="city"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <label htmlFor="postcode" className="person-p">
            Post Code:
          </label>
          <input
            className="inputcv"
            style={{
              fontSize: "25px",
              fontFamily: '"Gill Sans", sans-serif',
              boxSizing: "border-box",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3px)",
              opacity: 1,
            }}
            type="text"
            name="postcode"
            value={postCode}
            onChange={(e) => {
              setPostCode(e.target.value);
            }}
          />
          <label htmlFor="email" className="person-p">
            Email:
          </label>
          <input
            className="inputcv"
            style={{
              fontSize: "25px",
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
          <label htmlFor="phoneNumber" className="person-p">
            Phone Number:
          </label>
          <input
            className="inputcv"
            style={{
              fontSize: "25px",
              fontFamily: '"Gill Sans", sans-serif',
              boxSizing: "border-box",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3px)",
              opacity: 1,
            }}
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <label htmlFor="informations" className="person-p">
            About me:
          </label>
          <input
            className="inputcv"
            style={{
              fontSize: "25px",
              fontFamily: '"Gill Sans", sans-serif',
              boxSizing: "border-box",
              color: "black",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              backdropFilter: "blur(3px)",
              opacity: 1,
            }}
            type="text"
            name="informations"
            value={informations}
            onChange={(e) => {
              setInformations(e.target.value);
            }}
          />
          <button type="submit" className="button4 buttonsecond">
            Next
          </button>
        </form>
      )}
    </>
  );
}

export default Person;
