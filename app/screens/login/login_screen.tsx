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
import { createStackNavigator } from "react-navigation-stack";

class AppLogin extends React.Component {
  state = {
    email: "",
    password: "",
    checked: false
  };
  setEmail = email => {
    this.setState({ email });
  };

  setPassword = password => {
    this.setState({ password });
  };

  setChecked = () => {
    if (this.state.checked == false) {
      this.setState({ checked: true });
    } else {
      this.setState({ checked: false });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior={"position"} style={styles.container}>
        <Layout style={styles.container}>
          <Layout style={styles.topContainer}>
            <Text category="h1" style={{ fontFamily: "Metropolis-Bold" }}>
              Grades
            </Text>
          </Layout>
          <Layout style={styles.aeriesLogo}>
            <Image
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "contain"
              }}
              source={require("../../img/aeriesLogo.png")}
            />
          </Layout>
          <Layout style={styles.aeriesLogoS}>
            <Image
              style={{
                flex: 1,
                width: null,
                height: null,
                resizeMode: "contain"
              }}
              source={require("../../img/aeries.png")}
            />
          </Layout>

          <Input
            placeholder="Email"
            value={this.state.email}
            onChangeText={this.setEmail}
            style={styles.input}
            autoCompleteType="email"
          />

          <Layout style={styles.rowContainer}>
            <Input
              placeholder="Password"
              value={this.state.password}
              onChangeText={this.setPassword}
              style={styles.input}
              autoCompleteType="password"
              secureTextEntry={true}
            />
          </Layout>

          <Layout style={styles.rowContainer} />

          <Button onPress={() => this.props.navigation.navigate("GradesList")}>
            Login
          </Button>

          <Layout style={styles.rowContainer}>
            <CheckBox
              text="Stay logged in?"
              checked={this.state.checked}
              onChange={this.setChecked}
            />
          </Layout>
        </Layout>
      </KeyboardAvoidingView>
    );
  }
}

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
