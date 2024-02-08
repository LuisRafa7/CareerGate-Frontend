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
import { Helmet } from "react-helmet";

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
    backgroundColor: "#36454f",
    width: "35%",
    color: "#e9f1f7",
    height: "100%",
    paddingLeft: "4%",
    paddingTop: "4%",
  },
  flexColumn: { display: "flex", flexDirection: "row", height: "100%" },
  imageStyle: {
    width: "150px",
    borderRadius: "50%",
    height: "150px",
  },
  blueTitle: {
    fontFamily: "Open Sans",
    fontSize: "20pt",
    marginTop: "12%",
    borderBottom: "2px",
    borderBottomColor: "#e9f1f7",
    fontWeight: "extrabold",
  },
  blueTitle1: {
    fontFamily: "Open Sans",
    fontSize: "10pt",
    marginTop: "6%",
    fontWeight: "extrabold",
  },
  blueParagraph: {
    fontSize: "8pt",
    marginTop: "3%",
  },
  whiteTitle: {
    fontFamily: "Open Sans",
    color: "#36454f",
    fontSize: "40pt",
    fontWeight: "extrabold",
    paddingBottom: "0px",
    marginBottom: "0px",
  },
  whiteTitle1: {
    fontFamily: "Open Sans",
    color: "#36454f",
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
    backgroundColor: "#e9f1f7",
    width: "75%",
    paddingLeft: "4%",
    paddingRight: "4%",
    paddingTop: "4%",
    height: "100%",
  },
  whiteTitlePage: {
    fontFamily: "Open Sans",
    fontSize: "20pt",
    color: "#36454f",
    marginTop: "12%",
    borderBottom: "2px",
    borderBottomColor: "#36454f",
    fontWeight: "extrabold",
  },
  whiteTitlePage1: {
    fontFamily: "Open Sans",
    fontSize: "10pt",
    marginTop: "6%",
    fontWeight: "extrabold",
    color: "#36454f",
  },
  whiteTitlePage2: {
    fontFamily: "Open Sans",
    fontSize: "9pt",
    color: "#36454f",
  },
  whiteTitlePage3: {
    fontFamily: "Open Sans",
    fontSize: "12pt",
    fontWeight: "extrabold",
    color: "#36454f",
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

function Template1({ person123, curriculum }) {
  return (
    <Document>
      <Page size="A4">
        <View style={styles.flexColumn}>
          <View style={styles.blueLabel}>
            {person123.image && (
              <Image src={person123.image} style={styles.imageStyle} />
            )}
            <View>
              <Text style={styles.blueTitle}>Contact</Text>
              {person123.phoneNumber && (
                <View>
                  <Text style={styles.blueTitle1}>Phone</Text>
                  <Text style={styles.blueParagraph}>
                    {person123.phoneNumber}
                  </Text>
                </View>
              )}
              {person123.email && (
                <View>
                  <Text style={styles.blueTitle1}>Email</Text>
                  <Text style={styles.blueParagraph}>{person123.email}</Text>
                </View>
              )}
              {person123.adress && (
                <View>
                  <Text style={styles.blueTitle1}>Address</Text>
                  <Text style={styles.blueParagraph}>{person123.adress}</Text>
                  {person123.postCode && (
                    <Text style={styles.blueParagraph}>
                      {person123.postCode}{" "}
                      {person123.city && <Text>- {person123.city}</Text>}
                    </Text>
                  )}
                </View>
              )}
            </View>
            <View>
              <Text style={styles.blueTitle}>Expertise</Text>
              {curriculum.skills &&
                curriculum.skills.map((item) => {
                  return (
                    <View>
                      <Text style={styles.blueTitle1}>• {item.skill}</Text>
                    </View>
                  );
                })}
            </View>
            <View>
              <Text style={styles.blueTitle}>Language</Text>
              {curriculum.languages &&
                curriculum.languages.map((item) => {
                  return (
                    <View>
                      <Text style={styles.blueTitle1}>
                        {item.language} - {item.level}
                      </Text>
                    </View>
                  );
                })}
            </View>
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
            {person123.informations && (
              <View>
                <Text style={styles.whiteTitleText}>
                  {person123.informations}
                </Text>
              </View>
            )}

            {curriculum.experience && (
              <View>
                <Text style={styles.whiteTitlePage}>Experience</Text>
                {curriculum.experience.map((item) => {
                  console.log(item.startDateMonth);
                  return (
                    <View style={styles.borderLeft}>
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
                              <Text style={styles.whiteTitleText}>{task}</Text>
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
                    <View style={styles.borderLeft}>
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
                      {item.degree && (
                        <View>
                          <Text style={styles.whiteTitlePage3}>
                            {item.degree}
                          </Text>
                        </View>
                      )}
                      {item.school && (
                        <View>
                          <Text style={styles.whiteTitlePage2}>
                            {item.school} |{" "}
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

export default Template1;
