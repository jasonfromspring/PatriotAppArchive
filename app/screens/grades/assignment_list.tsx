import React from "react";
import { StyleSheet, Dimensions, Image, ScrollView } from "react-native";
import {
  Layout,
  Text,
  CheckBox,
  Button,
  Input,
  Select
} from "@ui-kitten/components";
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

export class AssignmentList extends React.Component {
  assignments = [
    {
      name: "Assignment 1",
      category: "Category 1",
      score: 9,
      total: 10,
      grade: 90
    },
    {
      name: "Assignment 1",
      category: "Category 1",
      score: 9,
      total: 10,
      grade: 90
    },
    {
      name: "Assignment 1",
      category: "Category 1",
      score: 9,
      total: 10,
      grade: 90
    }
  ];

  categories = [
    { text: "Category 1" },
    { text: "Category 2" },
    { text: "Category 3" }
  ];

  state = {
    selectedOption: this.categories[0]
  };

  setSelectedOption = input => {
    this.setState({ selectedIndex: input });
  };

  render() {
    return (
      <Layout style={styles.container}>
        <Layout style={styles.topContainer}>
          <Text category="h1" style={{ fontFamily: "Metropolis-Bold" }}>
            Grades
          </Text>
        </Layout>

        <Layout style={styles.categoryTypeHeader}>
          <Select
            data={this.categories}
            selectedOption={this.state.selectedOption}
            onSelect={this.setSelectedOption}
          />
        </Layout>

        <ScrollView>
          {this.assignments.map(item => (
            <Layout style={styles.rowContainer}>
              <Layout style={styles.columnContainer}>
                <Text category="s1"> {item.name}</Text>
                <Text appearance="hint"> {item.category}</Text>
              </Layout>

              <Layout style={styles.scoreContainer}>
                <Layout style={styles.columnContainer}>
                  <Text category="s1">
                    {item.score.toString() + "/" + item.total.toString()}
                  </Text>
                  <Text appearance="hint"> {item.grade.toString() + "%"}</Text>
                </Layout>
              </Layout>
            </Layout>
          ))}
          <Layout style={{ height: 100 }}></Layout>
        </ScrollView>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: "#CCCCCC",
    height: deviceHeight / 18,
    width: deviceWidth,
    justifyConent: "space-between"
  },
  topContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#CCCCCC",
    borderTopColor: "#FFFFFF00",
    width: deviceWidth,
    height: deviceHeight / 15
  },
  columnContainer: {
    flexDirection: "column",
    justifyContent: "center",
    flex: 6
  },
  scoreContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 2,
    height: deviceHeight / 18,
    backgroundColor: "gray"
  },
  categoryTypeHeader: {
    height: deviceHeight / 18,
    width: deviceWidth,
    borderWidth: 0.2,
    borderColor: "#CCCCCC"
  }
});
