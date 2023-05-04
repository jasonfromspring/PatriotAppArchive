import React from "react";
import { StyleSheet, Dimensions, Image, ScrollView } from "react-native";
import { Layout, Text, CheckBox, Button, Input, Select } from "@ui-kitten/components";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { default as Theme } from "../../../custom-theme.json";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

function assignColor(index: number, total: number) {
  var convert = require("color-convert");

  var step = 360 / total;
  var hue = 0;
  for (var i = 0; i < index; i++) {
    hue += step;
  }

  var rgbArray = convert.hsv.rgb(hue, 100, 100);
  var rbgHex = convert.rgb.hex(rgbArray);
  return rbgHex;
}

function assignBackgroundColor(grade: string) {
  if (grade == "N/A") {
    return "#FFFFFF";
  } else if (grade.includes("A")) {
    return "#00FF00";
  } else if (grade.includes("B")) {
    return "#ADFF2F";
  } else if (grade.includes("C")) {
    return "#FFFF00";
  } else if (grade.includes("D")) {
    return "#FF7F50";
  } else if (grade.includes("F")) {
    return "#DC143C";
  } else {
    return "#FFFFFF";
  }
}

class GradesList extends React.Component {
  classes = [
    {
      name: "Class 1",
      teacher: "Teacher 1",
      period: 1,
      grade: 100,
      letterGrade: "A+"
    },
    {
      name: "Class 2",
      teacher: "Teacher 2",
      period: 2,
      grade: 88,
      letterGrade: "B+"
    },
    {
      name: "Class 3",
      teacher: "Teacher 3",
      period: 3,
      grade: 65,
      letterGrade: "D"
    },
    {
      name: "Class 4",
      teacher: "Teacher 4",
      period: 4,
      grade: 0,
      letterGrade: "N/A"
    },
    {
      name: "Class 5",
      teacher: "Teacher 5",
      period: 5,
      grade: 3,
      letterGrade: "F"
    },
    {
      name: "Class 6",
      teacher: "Teacher 6",
      period: 6,
      grade: 99,
      letterGrade: "A+"
    },
    {
      name: "Class 7",
      teacher: "Teacher 7",
      period: 7,
      grade: 77,
      letterGrade: "C"
    },
    {
      name: "Class 8",
      teacher: "Teacher 8",
      period: 8,
      grade: 100,
      letterGrade: "A+"
    }
  ];

  terms = [
    { text: 'Current Terms' },
    { text: 'Prior Terms' },
    { text: 'Future Terms' },
  ];

  state = {
    selectedOption: this.terms[0],
  }

  setSelectedOption = (input) => {
    this.setState({selectedIndex: input});
  }

  render() {
    return (
      <Layout style={styles.container}>
        <Layout style={styles.topContainer}>
          <Text category="h1" style={{ fontFamily: "Metropolis-Bold" }}>
            Grades
          </Text>
        </Layout>

        <Layout style={styles.termTypeHeader}>
          <Select
            data={this.terms}
            selectedOption={this.state.selectedOption}
            onSelect={this.setSelectedOption}
          />
        </Layout>

        <ScrollView>
          {this.classes.map(item => (
            <Layout style={styles.rowContainer}>
              <Layout
                style={{
                  flex: 1,
                  borderRadius: 30,
                  marginLeft: deviceWidth / 25,
                  marginRight: deviceWidth / 25,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor:
                    "#" +
                    assignColor(item.period - 1, this.classes.length) +
                    "A0"
                }}
              >
                <Text>{item.period.toString()}</Text>
              </Layout>

              <Layout style={styles.columnContainer}>
                <Text category="s1"> {item.name}</Text>
                <Layout style={styles.rowContainer2}>
                  <Text appearance="hint"> {item.teacher}</Text>
                </Layout>
              </Layout>

              <Layout
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 2,
                  height: deviceHeight / 9,
                  backgroundColor:
                    assignBackgroundColor(item.letterGrade) + "88"
                }}
              >
                <Text category="s1">{item.grade.toString() + "%"}</Text>
                <Text appearance="hint" style={{ color: "#656565" }}>
                  {item.letterGrade}
                </Text>
              </Layout>
            </Layout>
          ))}
          <Layout style={{height:100}}></Layout>
          <Button onPress={() => this.props.navigation.navigate("AssignmentList")}>
            go to assignmentlist
          </Button>
        </ScrollView>
      </Layout>
    );
  }
}

export default GradesList;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: "#CCCCCC",
    height: deviceHeight / 9,
    width: deviceWidth,
    justifyConent: "space-between"
  },
  rowContainer2: {
    flexDirection: "row"
  },
  columnContainer: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 6
  },
  termTypeHeader: {
    height: deviceHeight / 18,
    width: deviceWidth,
    borderWidth: 0.2,
    borderColor: "#CCCCCC"
  },
  topContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#CCCCCC",
    borderTopColor: "#FFFFFF00",
    width: deviceWidth,
    height: deviceHeight / 15
  }
});
