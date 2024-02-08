import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Education({ setNumber, curriculumVitae, setCurriculumVitae }) {
  const [educationArray, setEducationArray] = useState(
    curriculumVitae.education ? curriculumVitae.education : []
  );
  const [school, setSchool] = useState();
  const [startDateMonth, setStartDateMonth] = useState();
  const [startDateYear, setStartDateYear] = useState();
  const [endDateMonth, setEndDateMonth] = useState();
  const [endDateYear, setEndDateYear] = useState();
  const [degree, setDegree] = useState();
  const [city, setCity] = useState();
  const [country, setCountry] = useState();

  const [addEducation, setAddEducation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEducation = {
      school: school,
      startDateMonth: startDateMonth,
      startDateYear: startDateYear,
      endDateMonth: endDateMonth,
      endDateYear: endDateYear,
      degree: degree,
      city: city,
      country: country,
    };
    setEducationArray([...educationArray, newEducation]);
    setAddEducation(false);
  };

  const addNewEducation = () => {
    setAddEducation(true);
  };

  const handleRemove = (id) => {
    const newEd = educationArray.filter((one) => one._id !== id);

    setEducationArray(newEd);
  };

  const handleReturn = () => {
    setNumber(1);
    setCurriculumVitae({ ...curriculumVitae, education: educationArray });
  };

  const handleNext = () => {
    setNumber(3);
    setCurriculumVitae({ ...curriculumVitae, education: educationArray });
  };

  const educationArraySorted = educationArray.sort((a, b) => {
    return b.startDateYear - a.startDateYear;
  });

  return (
    <>
      {educationArray &&
        educationArraySorted.map((one) => {
          return (
            <>
              <div
                key={one._id}
                style={{
                  fontSize: "25px",
                  fontFamily: '"Gill Sans", sans-serif',
                }}
              >
                {one.school && <h3>{one.school}</h3>}
                {one.degree && <h4>{one.degree}</h4>}
                {one.startDateMonth && (
                  <h5>
                    {one.startDateMonth}
                    {one.startDateYear && (
                      <h5 style={{ display: "inline" }}>
                        {" "}
                        {one.startDateYear}
                      </h5>
                    )}
                    {one.endDateMonth && (
                      <h5 style={{ display: "inline" }}>
                        {" "}
                        - {one.endDateMonth}
                      </h5>
                    )}
                    {one.endDateYear && one.endDateMonth !== "Present" && (
                      <h5 style={{ display: "inline" }}> {one.endDateYear}</h5>
                    )}
                  </h5>
                )}
                {one.city && (
                  <div>
                    <h6>
                      {one.city}{" "}
                      {one.country && (
                        <h6 style={{ display: "inline" }}> - {one.country}</h6>
                      )}
                    </h6>
                  </div>
                )}
                <button
                  className="button4 btn-third"
                  onClick={() => {
                    handleRemove(one._id);
                  }}
                >
                  Remove Experience
                </button>
                <hr />
              </div>
            </>
          );
        })}

      {addEducation ? (
        <form
          onSubmit={handleSubmit}
          className="container-exp"
          style={{ gap: "20px" }}
        >
          <label htmlFor="school" className="exp-p">
            School:
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
            name="school"
            onChange={(e) => {
              setSchool(e.target.value);
            }}
          />
          <label htmlFor="startDate" className="exp-p">
            Start Date:
          </label>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <select
              name="startDateMonth"
              className="inputcv"
              style={{
                fontSize: "25px",
                fontFamily: '"Gill Sans", sans-serif',
                boxSizing: "border-box",
                color: "black",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(3px)",
                opacity: 1,
                textAlign: "center",
              }}
              onChange={(e) => {
                setStartDateMonth(e.target.value);
              }}
            >
              <option value=""></option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            <select
              name="startDateYear"
              className="inputcv"
              style={{
                fontSize: "25px",
                fontFamily: '"Gill Sans", sans-serif',
                boxSizing: "border-box",
                color: "black",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(3px)",
                opacity: 1,
                textAlign: "center",
              }}
              onChange={(e) => {
                setStartDateYear(e.target.value);
              }}
            >
              <option value=""></option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
              <option value="2004">2004</option>
              <option value="2003">2003</option>
              <option value="2002">2002</option>
              <option value="2001">2001</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
              <option value="1995">1995</option>
              <option value="1994">1994</option>
              <option value="1993">1993</option>
              <option value="1992">1992</option>
              <option value="1991">1991</option>
              <option value="1990">1990</option>
              <option value="1989">1989</option>
              <option value="1988">1988</option>
              <option value="1987">1987</option>
              <option value="1986">1986</option>
              <option value="1985">1985</option>
              <option value="1984">1984</option>
              <option value="1983">1983</option>
              <option value="1982">1982</option>
              <option value="1981">1981</option>
              <option value="1980">1980</option>
              <option value="1979">1979</option>
              <option value="1978">1978</option>
              <option value="1977">1977</option>
              <option value="1976">1976</option>
              <option value="1975">1975</option>
              <option value="1974">1974</option>
              <option value="1973">1973</option>
              <option value="1972">1972</option>
              <option value="1971">1971</option>
              <option value="1970">1970</option>
              <option value="1969">1969</option>
              <option value="1968">1968</option>
              <option value="1967">1967</option>
              <option value="1966">1966</option>
              <option value="1965">1965</option>
              <option value="1964">1964</option>
              <option value="1963">1963</option>
              <option value="1962">1962</option>
              <option value="1961">1961</option>
              <option value="1960">1960</option>
              <option value="1959">1959</option>
              <option value="1958">1958</option>
              <option value="1957">1957</option>
              <option value="1956">1956</option>
              <option value="1955">1955</option>
              <option value="1954">1954</option>
              <option value="1953">1953</option>
              <option value="1952">1952</option>
              <option value="1951">1951</option>
              <option value="1950">1950</option>
            </select>
          </div>
          <label htmlFor="endDate" className="exp-p">
            End Date:
          </label>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <select
              name="endDateMonth"
              className="inputcv"
              style={{
                fontSize: "25px",
                fontFamily: '"Gill Sans", sans-serif',
                boxSizing: "border-box",
                color: "black",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(3px)",
                opacity: 1,
                textAlign: "center",
              }}
              onChange={(e) => {
                setEndDateMonth(e.target.value);
              }}
            >
              <option value=""></option>
              <option value="Present">Present</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            <select
              name="endDateYear"
              className="inputcv"
              style={{
                fontSize: "25px",
                fontFamily: '"Gill Sans", sans-serif',
                boxSizing: "border-box",
                color: "black",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(3px)",
                opacity: 1,
                textAlign: "center",
              }}
              onChange={(e) => {
                setEndDateYear(e.target.value);
              }}
            >
              <option value=""></option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
              <option value="2011">2011</option>
              <option value="2010">2010</option>
              <option value="2009">2009</option>
              <option value="2008">2008</option>
              <option value="2007">2007</option>
              <option value="2006">2006</option>
              <option value="2005">2005</option>
              <option value="2004">2004</option>
              <option value="2003">2003</option>
              <option value="2002">2002</option>
              <option value="2001">2001</option>
              <option value="2000">2000</option>
              <option value="1999">1999</option>
              <option value="1998">1998</option>
              <option value="1997">1997</option>
              <option value="1996">1996</option>
              <option value="1995">1995</option>
              <option value="1994">1994</option>
              <option value="1993">1993</option>
              <option value="1992">1992</option>
              <option value="1991">1991</option>
              <option value="1990">1990</option>
              <option value="1989">1989</option>
              <option value="1988">1988</option>
              <option value="1987">1987</option>
              <option value="1986">1986</option>
              <option value="1985">1985</option>
              <option value="1984">1984</option>
              <option value="1983">1983</option>
              <option value="1982">1982</option>
              <option value="1981">1981</option>
              <option value="1980">1980</option>
              <option value="1979">1979</option>
              <option value="1978">1978</option>
              <option value="1977">1977</option>
              <option value="1976">1976</option>
              <option value="1975">1975</option>
              <option value="1974">1974</option>
              <option value="1973">1973</option>
              <option value="1972">1972</option>
              <option value="1971">1971</option>
              <option value="1970">1970</option>
              <option value="1969">1969</option>
              <option value="1968">1968</option>
              <option value="1967">1967</option>
              <option value="1966">1966</option>
              <option value="1965">1965</option>
              <option value="1964">1964</option>
              <option value="1963">1963</option>
              <option value="1962">1962</option>
              <option value="1961">1961</option>
              <option value="1960">1960</option>
              <option value="1959">1959</option>
              <option value="1958">1958</option>
              <option value="1957">1957</option>
              <option value="1956">1956</option>
              <option value="1955">1955</option>
              <option value="1954">1954</option>
              <option value="1953">1953</option>
              <option value="1952">1952</option>
              <option value="1951">1951</option>
              <option value="1950">1950</option>
            </select>
          </div>
          <label htmlFor="degree" className="exp-p">
            Degree:
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
            name="degree"
            onChange={(e) => {
              setDegree(e.target.value);
            }}
          />
          <label htmlFor="city" className="exp-p">
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
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
          <label htmlFor="country" className="exp-p">
            Country:
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
            name="country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          <button className="button4 btn-third" type="submit">
            Add Education
          </button>
        </form>
      ) : (
        <>
          <button onClick={addNewEducation} className="button4 btn-third">
            Add New Education
          </button>
        </>
      )}
      <div className="col" style={{ gap: "30px", paddingTop: "20px" }}>
        <button onClick={handleReturn} className="button4 btn-exp">
          Return
        </button>
        <button onClick={handleNext} className="button4 btn-exp">
          Next
        </button>
      </div>
    </>
  );
}

export default Education;
