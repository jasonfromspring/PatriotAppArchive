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
  Button,
  Toggle,
  CheckBox,
  Radio
} from "@ui-kitten/components";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Touchable } from "react-native-better-touchable";
import { AboutScreen } from "./about_screen";
import { LicenseScreen } from "./license_screen";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

const categoryList = [
  {
    name: "General",
    screenName: "GeneralSettings",
    icon: "settings-2-outline",
    color: "red",
    index: 0
  },
  {
    name: "News",
    screenName: "NewsSettings",
    icon: "home-outline",
    color: "orange",
    index: 1
  },
  {
    name: "Grades",
    screenName: "GradesSettings",
    icon: "book-open-outline",
    color: "yellow",
    index: 2
  },
  {
    name: "Calendar",
    screenName: "CalendarSettings",
    icon: "calendar-outline",
    color: "green",
    index: 3
  },
  {
    name: "Agenda",
    screenName: "AgendaSettings",
    icon: "folder-outline",
    color: "blue",
    index: 4
  },
  {
    name: "About and support",
    screenName: "AboutScreen",
    icon: "info-outline",
    color: "purple",
    index: 5
  }
];

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

class SettingsScreen extends React.Component {
  render() {
    return (
      <Layout style={styles.container}>
        {categoryList.map(item => (
          <Touchable
            onPress={() => this.props.navigation.navigate(item.screenName)}
          >
            <Layout style={styles.listItem}>
              <Layout
                style={{
                  width: deviceHeight / 18,
                  height: deviceHeight / 18,
                  borderRadius: deviceHeight / 36,
                  backgroundColor:
                    "#" + assignColor(item.index, categoryList.length) + "55",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: 12
                }}
              >
                <Icon
                  name={item.icon}
                  fill={"#" + assignColor(item.index, categoryList.length)}
                  width={deviceHeight / 24}
                  height={deviceHeight / 24}
                />
              </Layout>
              <Text style={styles.categoryText}>{item.name}</Text>
            </Layout>
          </Touchable>
        ))}
      </Layout>
    );
  }
}

class GeneralSettings extends React.Component {
  render() {
    return (
      <Layout style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate("SettingsScreen")}
          style={styles.backButton}
        >
          Back
        </Button>
        <Layout style={styles.aboutText}>
          <Text>stuff will be here eventually</Text>
        </Layout>
      </Layout>
    );
  }
}

class NewsSettings extends React.Component {
  render() {
    return (
      <Layout style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate("SettingsScreen")}
          style={styles.backButton}
        >
          Back
        </Button>
        <Layout style={styles.aboutText}>
          <Text>stuff will be here eventually</Text>
        </Layout>
      </Layout>
    );
  }
}

class GradesSettings extends React.Component {
  render() {
    return (
      <Layout style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate("SettingsScreen")}
          style={styles.backButton}
        >
          Back
        </Button>
        <Layout style={styles.aboutText}>
          <Text>stuff will be here eventually</Text>
        </Layout>
      </Layout>
    );
  }
}

class CalendarSettings extends React.Component {
  render() {
    return (
      <Layout style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate("SettingsScreen")}
          style={styles.backButton}
        >
          Back
        </Button>
        <Layout style={styles.aboutText}>
          <Text>stuff will be here eventually</Text>
        </Layout>
      </Layout>
    );
  }
}

class AgendaSettings extends React.Component {
  render() {
    return (
      <Layout style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate("SettingsScreen")}
          style={styles.backButton}
        >
          Back
        </Button>
        <Layout style={styles.aboutText}>
          <Text>stuff will be here eventually</Text>
        </Layout>
      </Layout>
    );
  }
}

export const SettingsNavigator = createStackNavigator({
  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  AboutScreen: {
    screen: AboutScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  GeneralSettings: {
    screen: GeneralSettings,
    navigationOptions: {
      headerShown: false
    }
  },
  NewsSettings: {
    screen: NewsSettings,
    navigationOptions: {
      headerShown: false
    }
  },
  GradesSettings: {
    screen: GradesSettings,
    navigationOptions: {
      headerShown: false
    }
  },
  CalendarSettings: {
    screen: CalendarSettings,
    navigationOptions: {
      headerShown: false
    }
  },
  AgendaSettings: {
    screen: AgendaSettings,
    navigationOptions: {
      headerShown: false
    }
  },
  LicenseScreen: {
    screen: LicenseScreen,
    navigationOptions: {
      headerShown: false
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#CCCCCC",
    borderBottomWidth: 1,
    height: deviceHeight / 12
  },
  categoryText: {
    marginHorizontal: 12
  },
  backButton: {
    margin: 12
  },
  aboutText: {
    margin: 12,
    marginTop: 0
  }
});
