import React, { useState } from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
  Font,
} from "@react-pdf/renderer";
import phoneImage from "../../images/phone.png";
import mailImage from "../../images/mail.png";
import pointImage from "../../images/point.png";

Font.register({
  family: "Open Sans",
  fonts: [
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf",
      fontWeight: 600,
    },
  ],
});

const styles = StyleSheet.create({
  page: { margin: "100px" },
  blueLabel: {
    width: "35%",
    backgroundColor: "#b49264",
    color: "black",
    height: "100%",
    marginLeft: "4%",
    marginTop: "4%",
    marginRight: "2%",
    borderTopLeftRadius: "50%",
    borderTopRightRadius: "50%",
    paddingTop: "3%",
  },
  flexColumn: { display: "flex", flexDirection: "row", height: "100%" },
  imageStyle: {
    width: "150px",
    borderRadius: "50%",
    height: "150px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  aboutText: {
    fontSize: "9pt",
    marginTop: "25%",
    textAlign: "center",
    marginLeft: "4%",
    marginRight: "4%",
    marginBottom: "10%",
  },
  icon: {
    width: "25px",
    height: "25px",
    marginTop: "20%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  blueTitle: {
    fontFamily: "Open Sans",
    fontSize: "20pt",
    marginTop: "15%",
    borderBottom: "2px",
    borderBottomColor: "black",
    fontWeight: "extrabold",
    textAlign: "center",
    marginLeft: "4%",
    marginRight: "4%",
  },
  blueTitle1: {
    fontFamily: "Open Sans",
    fontSize: "9pt",
    marginTop: "6%",
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: "4%",
    marginRight: "4%",
  },
  blueParagraph: {
    fontSize: "8pt",
    marginTop: "3%",
  },
  whiteTitle: {
    fontFamily: "Open Sans",
    fontSize: "40pt",
    fontWeight: "extrabold",
    paddingBottom: "0px",
    marginBottom: "0px",
  },
  whiteTitle1: {
    fontFamily: "Open Sans",
    fontSize: "20pt",
    paddingTop: "0px",
    marginTop: "-3%",
  },
  whiteTitleText: {
    fontFamily: "Open Sans",
    color: "#36454f",
    fontSize: "10pt",
    paddingTop: "0px",
    marginTop: "0%",
    marginBottom: "5%",
  },
  whiteLabel: {
    width: "75%",
    paddingLeft: "4%",
    paddingRight: "4%",
    paddingTop: "4%",
    height: "100%",
  },
  whiteTitlePage: {
    fontFamily: "Open Sans",
    fontSize: "15pt",
    backgroundColor: "#d3d3d3",
    marginTop: "12%",
    fontWeight: "extrabold",
  },
  whiteTitlePage1: {
    fontFamily: "Open Sans",
    fontSize: "10pt",
    marginTop: "3%",
    fontWeight: "extrabold",
  },
  whiteTitlePage2: {
    fontFamily: "Open Sans",
    fontSize: "9pt",
  },
  whiteTitlePage3: {
    fontFamily: "Open Sans",
    fontSize: "12pt",
    fontWeight: "extrabold",
  },
  whiteTitlePage4: {
    fontFamily: "Open Sans",
    fontSize: "10pt",
    fontWeight: "extrabold",
    marginTop: "3%",
    marginBottom: "-2%",
  },
  borderLeft: {
    borderLeft: "1px",
    borderLeftColor: "#36454f",
    borderTopLeftRadius: "50%",
    paddingLeft: "3%",
  },
  whiteTitleText: {
    fontFamily: "Open Sans",
    fontSize: "8pt",
    color: "#36454f",
    paddingLeft: "3%",
  },
});

function Template2({ person123, curriculum }) {
  return (
    <Document>
      <Page size="A4">
        <View style={styles.flexColumn}>
          <View style={styles.blueLabel}>
            {person123.image && (
              <Image src={person123.image} style={styles.imageStyle} />
            )}
            <View>
              {person123.informations && (
                <View>
                  <Text style={styles.aboutText}>{person123.informations}</Text>
                </View>
              )}
              {person123.phoneNumber && (
                <View>
                  <Image style={styles.icon} src={phoneImage} />
                  <Text style={styles.blueTitle1}>{person123.phoneNumber}</Text>
                </View>
              )}
              {person123.email && (
                <View>
                  <Image style={styles.icon} src={mailImage} />
                  <Text style={styles.blueTitle1}>{person123.email}</Text>
                </View>
              )}
              {person123.adress && (
                <View>
                  <Image style={styles.icon} src={pointImage} />
                  <Text style={styles.blueTitle1}>{person123.adress}</Text>
                  {person123.postCode && (
                    <Text style={styles.blueTitle1}>
                      {person123.postCode}{" "}
                      {person123.city && <Text>- {person123.city}</Text>}
                    </Text>
                  )}
                </View>
              )}
            </View>

            {curriculum.languages && (
              <View>
                <Text style={styles.blueTitle}>Languages</Text>
                {curriculum.languages.map((item) => {
                  return (
                    <View>
                      <Text style={styles.blueTitle1}>
                        {item.language} - {item.level}
                      </Text>
                    </View>
                  );
                })}
              </View>
            )}
          </View>

          <View style={styles.whiteLabel}>
            {person123.name && (
              <View>
                <Text style={styles.whiteTitle}>{person123.name}</Text>
              </View>
            )}
            {person123.job && (
              <View>
                <Text style={styles.whiteTitle1}>{person123.job}</Text>
              </View>
            )}
            {curriculum.skills && (
              <View>
                <Text style={styles.whiteTitlePage}>Skills</Text>
                {curriculum.skills.map((item) => {
                  return (
                    <View>
                      <Text style={styles.whiteTitlePage4}>• {item.skill}</Text>
                    </View>
                  );
                })}
              </View>
            )}

            {curriculum.experience && (
              <View>
                <Text style={styles.whiteTitlePage}>Experience</Text>
                {curriculum.experience.map((item) => {
                  return (
                    <View>
                      {item.startDateMonth && (
                        <View>
                          <Text style={styles.whiteTitlePage1}>
                            {item.startDateMonth}
                            {item.startDateYear && (
                              <Text style={styles.whiteTitlePage1}>
                                {" "}
                                {item.startDateYear}
                              </Text>
                            )}
                            {item.endDateMonth && (
                              <Text style={styles.whiteTitlePage1}>
                                {" "}
                                - {item.endDateMonth}
                              </Text>
                            )}
                            {item.endDateYear &&
                              item.endDateMonth !== "Present" && (
                                <Text style={styles.whiteTitlePage1}>
                                  {" "}
                                  {item.endDateYear}
                                </Text>
                              )}
                          </Text>
                        </View>
                      )}
                      {item.company && (
                        <View>
                          <Text style={styles.whiteTitlePage2}>
                            {item.company} |{" "}
                            {item.city && (
                              <Text style={styles.whiteTitlePage2}>
                                {item.city} -{" "}
                                {item.country && (
                                  <Text style={styles.whiteTitlePage2}>
                                    {item.country}
                                  </Text>
                                )}
                              </Text>
                            )}
                          </Text>
                        </View>
                      )}
                      {item.profession && (
                        <View>
                          <Text style={styles.whiteTitlePage3}>
                            {item.profession}
                          </Text>
                        </View>
                      )}

                      {item.tasks &&
                        item.tasks.map((task) => {
                          return (
                            <View>
                              <Text style={styles.whiteTitleText}>
                                • {task}
                              </Text>
                            </View>
                          );
                        })}
                    </View>
                  );
                })}
              </View>
            )}

            {curriculum.education && (
              <View>
                <Text style={styles.whiteTitlePage}>Education</Text>
                {curriculum.education.map((item) => {
                  return (
                    <View>
                      {item.startDateMonth && (
                        <View>
                          <Text style={styles.whiteTitlePage1}>
                            {item.startDateMonth}
                            {item.startDateYear && (
                              <Text style={styles.whiteTitlePage1}>
                                {" "}
                                {item.startDateYear}
                              </Text>
                            )}
                            {item.endDateMonth && (
                              <Text style={styles.whiteTitlePage1}>
                                {" "}
                                - {item.endDateMonth}
                              </Text>
                            )}
                            {item.endDateYear &&
                              item.endDateMonth !== "Present" && (
                                <Text style={styles.whiteTitlePage1}>
                                  {" "}
                                  {item.endDateYear}
                                </Text>
                              )}
                          </Text>
                        </View>
                      )}
                      {item.school && (
                        <View>
                          <Text style={styles.whiteTitlePage3}>
                            {item.school}
                          </Text>
                        </View>
                      )}
                      {item.degree && (
                        <View>
                          <Text style={styles.whiteTitlePage2}>
                            {"  "}• {item.degree}
                          </Text>
                        </View>
                      )}
                    </View>
                  );
                })}
              </View>
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default Template2;
