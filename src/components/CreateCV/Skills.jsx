import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Skills({ setNumber, curriculumVitae, setCurriculumVitae, submit }) {
  const [skillsArray, setSkillsArray] = useState(
    curriculumVitae.skills ? curriculumVitae.skills : []
  );
  const [skill, setSkill] = useState();

  const [addSkill, setAddSkill] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSkill = {
      id: uuidv4(),
      skill: skill,
    };

    setSkillsArray([...skillsArray, newSkill]);
    setAddSkill(false);
  };

  const addNewSkill = () => {
    setAddSkill(true);
  };

  const handleRemove = (id) => {
    const newSk = skillsArray.filter((one) => one.id !== id);

    setSkillsArray(newSk);
  };

  const handleReturn = () => {
    setNumber(3);
    setCurriculumVitae({ ...curriculumVitae, skills: skillsArray });
  };

  const handleConfirm = () => {
    setNumber(5);
    setCurriculumVitae({ ...curriculumVitae, skills: skillsArray });
  };

  return (
    <>
      {skillsArray &&
        skillsArray.map((one) => {
          return (
            <>
              <div key={one.id}  style={{fontSize: '25px',fontFamily: '"Gill Sans", sans-serif'}}>
                <h4>{one.skill}</h4>
                <button className="button4 btn-third"
                  onClick={() => {
                    handleRemove(one.id);
                  }}
                >
                  Remove Skill
                </button>
                <hr />
              </div>
            </>
          );
        })}

      {addSkill ? (
        <form onSubmit={handleSubmit} className="container-exp" style={{gap: "20px"}}>
          <label htmlFor="skill" className="exp-p">Skill:</label>
          <input className="inputcv" style={{ fontSize: '25px',fontFamily: '"Gill Sans", sans-serif',boxSizing: 'border-box',color: 'black',backgroundColor: 'rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(3px)',opacity: 1}}
            type="text"
            name="skill"
            onChange={(e) => {
              setSkill(e.target.value);
            }}
          />
          <button type="submit"  className="button4 btn-third">Add Skill</button>
        </form>
      ) : (
        <>
          <button onClick={addNewSkill}  className="button4 btn-third">Add New Skill</button>
        </>
      )}
       <div className="col" style={{gap: '20px', paddingTop: '20px'}}>
      <button onClick={handleReturn} className="button4 btn-exp">Return</button>
      <button onClick={handleConfirm} className="button4 btn-exp">Next</button>
      </div>
    </>
  );
}
export default Skills;
