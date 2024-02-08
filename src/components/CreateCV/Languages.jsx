import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Languages({ setNumber, curriculumVitae, setCurriculumVitae }) {
  const [languageArray, setLanguageArray] = useState(
    curriculumVitae.languages ? curriculumVitae.languages : []
  );
  const [level, setLevel] = useState();
  const [language, setLanguage] = useState();

  const [addLanguage, setAddLanguage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLanguage = {
      id: uuidv4(),
      level: level,
      language: language,
    };

    setLanguageArray([...languageArray, newLanguage]);
    setAddLanguage(false);
  };

  const addNewLanguage = () => {
    setAddLanguage(true);
  };

  const handleRemove = (id) => {
    const newLan = languageArray.filter((one) => one.id !== id);

    setLanguageArray(newLan);
  };

  const handleReturn = () => {
    setNumber(2);
    setCurriculumVitae({ ...curriculumVitae, languages: languageArray });
  };

  const handleNext = () => {
    setNumber(4);
    setCurriculumVitae({ ...curriculumVitae, languages: languageArray });
  };

  return (
    <>
      {languageArray &&
        languageArray.map((one) => {
          return (
            <>
              <div key={one.id} style={{fontSize: '25px',fontFamily: '"Gill Sans", sans-serif'}}>
                <h4>
                  {one.language} - {one.level}
                </h4>
                <button className="button4 btn-third"
                  onClick={() => {
                    handleRemove(one.id);
                  }}
                >
                  Remove Language
                </button>
                <hr />
              </div>
            </>
          );
        })}

      {addLanguage ? (
        <form onSubmit={handleSubmit} className="container-exp" style={{gap: "20px"}}>
          <label htmlFor="language" className="exp-p">Language:</label>
          <input className="inputcv" style={{ fontSize: '25px',fontFamily: '"Gill Sans", sans-serif',boxSizing: 'border-box',color: 'black',backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(3px)',opacity: 1}}
            type="text"
            name="language"
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
          />
          <label htmlFor="level" className="exp-p">Level:</label>
          <input className="inputcv" style={{ fontSize: '25px',fontFamily: '"Gill Sans", sans-serif',boxSizing: 'border-box',color: 'black',backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(3px)',opacity: 1}}
            type="text"
            name="level"
            onChange={(e) => {
              setLevel(e.target.value);
            }}
          />
          <button className="button4 btn-third" type="submit">Add Language</button>
        </form>
      ) : (
        <>
          <button onClick={addNewLanguage} className="button4 btn-third">Add New Language</button>
        </>
      )}
       <div className="col" style={{gap: '20px', paddingTop: '20px'}}>
      <button onClick={handleReturn} className="button4 btn-exp">Return</button>
      <button onClick={handleNext} className="button4 btn-exp">Next</button>
      </div>
    </>
  );
}

export default Languages;
