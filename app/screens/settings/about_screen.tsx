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

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

export class AboutScreen extends React.Component {
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
          <Text category="s1" style={{ fontFamily: "Metropolis-SemiBold" }}>
            PatriotApp created by
          </Text>
          <Text category="p1">
            Justin Lin, Jason Phan, Aiden Sato, Darren Tran, and Arvind
            Vivekanandan
          </Text>
        </Layout>
        <Layout style={{ height: deviceHeight / 24 }} />
        <Touchable
          onPress={() => this.props.navigation.navigate("LicenseScreen")}
        >
          <Layout style={styles.listItem}>
            <Text style={styles.categoryText}>Open source licenses</Text>
          </Layout>
        </Touchable>
      </Layout>
    );
  }
}

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
    borderTopWidth: 1,
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
