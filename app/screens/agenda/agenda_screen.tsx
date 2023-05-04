import React, { Component } from "react";
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
  UIManager,
  AppRegistry,
  View,
  TextInput
} from "react-native";
import { Layout, Text, Input } from "@ui-kitten/components";
import { mapping, light as lightTheme } from "@eva-design/eva";
import CalendarStrip from "react-native-calendar-strip";
import moment from "moment";
import { default as Theme } from "../../../custom-theme.json";
import { AgendaStorage } from "./../../classes/storage/storage_abstraction";

var state = {};

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
class AgendaScreen extends React.Component {
  state = {
    agendaText: ""
  };
  setAgendaText = agendaText => {
    this.setState({ agendaText });
  };
  render() {
    return (
      <Layout style={styles.container}>
        <Layout style={styles.textCont}>
          <Text category="h1" style={{ fontFamily: "Metropolis-Bold" }}>
            Agenda
          </Text>
        </Layout>
        <Layout style={styles.container}>
          <CalendarStrip
            style={styles.calendarStyle}
            calendarAnimation={{ type: "sequence", duration: 300 }}
            daySelectionAnimation={{
              type: "background",
              duration: null,
              highlightColor: Theme["color-primary-transparent-600"],
              animType: null,
              animProperty: null,
              animSpringDamping: null,
              animUpdateType: null
            }}
          />
        </Layout>
        <Layout style={styles.inputContainer}>
          <Input
            placeholder="Period 1"
            value={this.state.agendaText}
            onChangeText={this.setAgendaText}
            style={[styles.textInput, {marginTop:deviceHeight/100}]}
            size="large"
            /*autoCompleteType="password"
            secureTextEntry={true}
            */
          />
        </Layout>
      </Layout>
    );
  }
}

export default AgendaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  textCont: {
    marginTop: deviceHeight /40,
    marginBottom: deviceHeight / 200,
    height: deviceHeight / 16,
    textAlign: "center"
  },
  calendarStyle: {
    width: deviceWidth,
    height: deviceHeight / 7,
    paddingBottom: 20,
    marginTop: deviceHeight / 50
  },
  agendaAdd: {
    width: deviceWidth / 1.25,
    marginBottom: deviceHeight / 20,
    height: deviceHeight / 1.5,
    borderWidth: 1
  },
  inputContainer: {
    height: deviceHeight / 1.5,
    width: deviceWidth / 1.1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textInput: {
    height: deviceHeight / 1.5,
    width: deviceWidth / 1.1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    //marginTop:deviceHeight/200,
  }
});
