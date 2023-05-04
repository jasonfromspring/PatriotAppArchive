import * as React from "react";
import { StyleSheet, Dimensions, ScrollView, Image } from "react-native";
import {
  Layout,
  Text,
  List,
  ListItem,
  Card,
  CardHeader,
  Icon,
  Button
} from "@ui-kitten/components";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { default as Touchable } from "react-native-platform-touchable";
import Barcode from "react-native-barcode-expo";
import { default as Colors } from "./../../../custom-theme.json";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

var colorPrimary = Colors["color-primary-500"];
console.log(colorPrimary);

var school = "Oxford Academy";
var year = "2019-2020";
var name = "Aiden Sato";
var grade = "11";
var pfp = "https://i.vgy.me/8W4dv8.jpg";
var id = "1030400";

class UserInfoScreen extends React.Component {
  render() {
    return (
      <Layout style={styles.container}>
        <Layout style={styles.topRect}>
          <Text
            category="h1"
            style={{
              color: "#ffffff",
              fontFamily: "Metropolis-Bold",
              marginTop: deviceHeight / 28
            }}
          >
            {school}
          </Text>
          <Text
            category="s1"
            style={{ color: "#ffffff", fontFamily: "Metropolis-SemiBold" }}
          >
            {year}
          </Text>
        </Layout>
        <Layout style={styles.bottomRect}>
          <Image source={{ uri: pfp }} style={styles.pfp}></Image>
          <Layout style={styles.lowerBottomRect}>
            <Text
              category="h2"
              style={{ fontFamily: "Metropolis-Bold", alignSelf: "center" }}
            >
              {name}
            </Text>
            <Barcode value={id} format="CODE39" />
            <Layout style={styles.bottomTextBox}>
              <Text style={styles.bottomText}>{id}</Text>
              <Text style={styles.bottomText}>{"Grade: " + grade}</Text>
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default UserInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  topRect: {
    backgroundColor: colorPrimary,
    height: (1 * deviceHeight) / 4,
    alignItems: "center"
  },
  bottomRect: {
    backgroundColor: "#FFFFFF",
    height: (3 * deviceHeight) / 4,
    alignItems: "center"
  },
  pfp: {
    width: deviceWidth / 3,
    height: deviceWidth / 3,
    position: "absolute",
    top: -(deviceWidth / 6),
    borderColor: "#FFFFFF",
    borderWidth: 8,
    borderRadius: deviceWidth / 6
  },
  lowerBottomRect: {
    flex: 1,
    width: deviceWidth,
    marginTop: deviceWidth / 6 + 20
  },
  bottomTextBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: deviceWidth / 6
  },
  bottomText: {
    fontFamily: "Metropolis-SemiBold"
  }
});
