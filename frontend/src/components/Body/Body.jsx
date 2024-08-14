import React, { useRef, useState, useContext, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import { ArrowDown } from "react-feather";
import { useNavigate } from "react-router-dom";

import Editor from "../Editor/Editor";
import Resume from "../Resume/Resume";

import styles from "./Body.module.css";
import userContext from "../../context/UserContext/userContext.js";

function Body() {
  const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#ed8936", "#1e81b0", "#17a589"];
  const sections = {
    basicInfo: "BasicInfo",
    skills: "Skills",
    project: "Projects",
    workExp: "WorkExperience",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };

  const resumeRef = useRef();
  const { login } = useContext(userContext);

  const [activeColor, setActiveColor] = useState(colors[0]);
  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.skills]: {
      id: sections.skills,
      sectionTitle: sections.skills,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });


  const resumeDetails = { Achievements: resumeInformation.Achievements.points, BasicInfo: resumeInformation.BasicInfo.detail, Education: resumeInformation.Education.details, Other: resumeInformation.Other.detail, Projects: resumeInformation.Projects.details, Skills: resumeInformation.Skills.points, Summary: resumeInformation.Summary.detail, WorkExperience: resumeInformation.WorkExperience.details };

  console.log("Details", resumeDetails);

  const navigate = useNavigate()

  const handlePrint = useReactToPrint({
    content: () => resumeRef.current,
  });

  const checkIsLogin = async () => {

    if (!login) {

      navigate("/login")

    }
    else {

      handlePrint()

    }
  }

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Create Your Resume</p>

      <div className={styles.toolbar}>

        <div className={styles.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`${styles.color} ${activeColor === item ? styles.active : ""
                }`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>

        {
          <button onClick={checkIsLogin}>
            Download <ArrowDown />
          </button>
        }

      </div>
      <div className={styles.main}>
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
        <Resume
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
          activeColor={activeColor}
        />
      </div>


    </div>
  );
}

export default Body;