import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CreateCV from "./CreateCV";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Template1 from "./PDF/Template1";
import Template2 from "./PDF/Template2";
import { PDFViewer } from "@react-pdf/renderer";
import resume1 from "../images/resume1.jpg";
import resume2 from "../images/resume2.jpg";
import EditCV from "./EditCV";

const API_URL = import.meta.env.VITE_API_URL || `http://localhost:5005`;

function ShowCV() {
  const [person123, setPerson123] = useState({});
  const [curriculum, setCurriculum] = useState({});
  let { personId } = useParams();
  const [chosePage, SetChosePage] = useState(1);

  useEffect(() => {
    getPerson();
  }, []);

  const getPerson = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/person/${personId}`);
      setPerson123(response.data);
      setCurriculum(response.data.curriculumVitae);
    } catch (error) {
      console.error("Error fetching person:", error);
    }
  };

  const page1 = () => {
    SetChosePage(1);
  };

  const page2 = () => {
    SetChosePage(2);
  };

  const page5 = () => {
    SetChosePage(5);
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
        {curriculum ? (
          <>
            <p
              className="yellow-underline"
              style={{ fontFamily: "fantasy", fontSize: "50px" }}
            >
              Curriculum
            </p>
            {chosePage !== 5 && (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-around",
                  }}
                >
                  <button onClick={page1} className="button-cv">
                    <img
                      src={resume1}
                      alt="resume1"
                      style={{ width: "50px", height: "70px" }}
                    />
                    <br />
                    Style 1
                  </button>
                  <button onClick={page2} className="button-cv">
                    <img
                      src={resume2}
                      alt="resume2"
                      style={{ width: "50px", height: "70px" }}
                    />
                    <br />
                    Style 2
                  </button>
                </div>
                <button onClick={page5} className="button-cv">
                  Edit your CV
                </button>
              </>
            )}

            {chosePage === 1 && (
              <>
                <PDFViewer style={{ width: "700px", height: "700px" }}>
                  <Template1 person123={person123} curriculum={curriculum} />
                </PDFViewer>
                <h2
                  className="yellow-underline"
                  style={{ fontFamily: "fantasy", fontSize: "40px" }}
                >
                  Download
                </h2>
                <PDFDownloadLink
                  document={
                    <Template1 person123={person123} curriculum={curriculum} />
                  }
                  fileName={`${person123.name} - template1`}
                >
                  {({ loading }) =>
                    loading ? (
                      <button>Loading Document</button>
                    ) : (
                      <button className="button-cv">Template 1</button>
                    )
                  }
                </PDFDownloadLink>
              </>
            )}

            {chosePage === 2 && (
              <>
                <PDFViewer style={{ width: "700px", height: "700px" }}>
                  <Template2 person123={person123} curriculum={curriculum} />
                </PDFViewer>

                <h2
                  className="yellow-underline"
                  style={{ fontFamily: "fantasy", fontSize: "40px" }}
                >
                  Download
                </h2>
                <PDFDownloadLink
                  document={
                    <Template2 person123={person123} curriculum={curriculum} />
                  }
                  fileName={`${person123.name} - template2`}
                >
                  {({ loading }) =>
                    loading ? (
                      <button>Loading Document</button>
                    ) : (
                      <button className="button-cv">Template 2</button>
                    )
                  }
                </PDFDownloadLink>
              </>
            )}

            {chosePage === 5 && (
              <EditCV
                getPerson={getPerson}
                person123={person123}
                SetChosePage={SetChosePage}
              />
            )}
          </>
        ) : (
          <>
            <CreateCV getPerson={getPerson} person123={person123} />
          </>
        )}
      </>
      <div className="gradient-border"></div>
    </div>
  );
}

export default ShowCV;
