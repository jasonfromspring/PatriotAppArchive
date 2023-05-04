import React from "react";
import {
  StyleSheet,
  Dimensions,
  Image,
  KeyboardAvoidingView
} from "react-native";
import { Layout, Text, CheckBox, Button, Input } from "@ui-kitten/components";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { default as Theme } from "../../../custom-theme.json";
import { default as GradesList } from "./grades_list";
import { AssignmentList } from "./assignment_list";
import { createStackNavigator } from "react-navigation-stack";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export const GradesNavigator = createStackNavigator({
  GradesList: {
    screen: GradesList,
    navigationOptions: {
      headerShown: false
    }
  },
  AssignmentList: {
    screen: AssignmentList,
    navigationOptions: {

    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  text: {
    fontSize: 30
  },
  topContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#A0A0A0",
    borderTopColor: "#FFFFFF00",
    width: deviceWidth,
    height: deviceHeight / 15
  },
  aeriesLogo: {
    //image of aeries logo
    marginTop: deviceHeight / 10,
    height: deviceHeight / 6,
    width: deviceWidth / 3
  },
  aeriesLogoS: {
    //says aeries student info system image
    marginBottom: deviceHeight / 30,
    height: deviceHeight / 10,
    width: deviceWidth / 4
  },
  signButton: {
    borderWidth: 1,
    height: deviceHeight / 20,
    width: deviceWidth / 1.25,
    marginTop: deviceHeight / 25,
    marginBottom: deviceHeight / 50,
    borderRadius: 15,
    backgroundColor: Theme["color-info-500"],
    alignItems: "center",
    justifyContent: "center"
  },
  googleSign: {
    height: deviceHeight / 20,
    width: deviceWidth / 1.25,
    backgroundColor: "blue",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: deviceHeight / 40
  },
  input: {
    width: deviceWidth / 1.25
  },
  fingerPrint: {
    //image of fingerprint
    height: deviceHeight / 20,
    width: deviceWidth / 10,
    marginLeft: deviceWidth / 35
  },
  rowContainer: {
    height: deviceHeight / 20,
    width: deviceWidth / 1.25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  stayLog: {
    //becomes blue when pressed
    height: deviceHeight / 20,
    width: deviceWidth / 10,
    borderRadius: 50,
    borderWidth: 1,
    marginRight: deviceWidth / 15
  }
});
