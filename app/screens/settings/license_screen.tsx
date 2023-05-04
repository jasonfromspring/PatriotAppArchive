import * as React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  FlatList
} from "react-native";
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
import { default as LicenseData } from "../../../licenses2020Feb25.json"; // made using license-report
import { Linking } from "expo";

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

var currentItem = {
  licenses: "",
  repository: "",
  licenseUrl: "",
  parents: ""
};

const dataKeys: Array<Object> = new Array<Object>();
for (var i in LicenseData) {
  dataKeys.push(i);
}
console.log(dataKeys);

export class LicenseScreen extends React.Component {
  renderHeader(item) {
    var header = () => (
      <CardHeader title={item.name} description={item.licenseType} />
    );
    return header;
  }

  openLink(link: string) {
    Linking.openURL(link);
  }

  renderButton(item) {
    if (item.link == "n/a") {
      return (
        <Button
          style={{ marginLeft: 10 }}
          onPress={() => this.openLink(item.link)}
          status="info"
          disabled={true}
        >
          Link
        </Button>
      );
    } else if (item.link.includes("git+")) {
      return (
        <Button
          style={{ marginLeft: 10 }}
          onPress={() => this.openLink(item.link.substring(4))}
          status="info"
        >
          Link
        </Button>
      );
    } else {
      return (
        <Button
          style={{ marginLeft: 10 }}
          onPress={() => this.openLink(item.link)}
          status="info"
        >
          Link
        </Button>
      );
    }
  }

  renderItem(item) {
    return (
      <Card style={styles.card} header={this.renderHeader(item)}>
        <Layout style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <Layout style={{ width: deviceWidth / 3 }} />
          {this.renderButton(item)}
        </Layout>
      </Card>
    );
  }

  render() {
    return (
      <Layout style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate("AboutScreen")}
          style={styles.backButton}
        >
          Back
        </Button>
        <FlatList
          data={LicenseData}
          renderItem={({ item }) => this.renderItem(item)}
        ></FlatList>
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
  card: {
    marginHorizontal: 15,
    marginVertical: 7
  },

  backButton: {
    margin: 12
  }
});
