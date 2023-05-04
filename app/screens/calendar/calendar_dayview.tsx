import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { Layout, Text, Calendar } from "@ui-kitten/components";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { MomentDateService } from "@ui-kitten/moment";
import moment from "moment";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

class CalendarDayView extends React.Component {
  render() {
    return <Layout style={styles.container}></Layout>;
  }
}

export default CalendarDayView;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});
