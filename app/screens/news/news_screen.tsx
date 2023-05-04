import * as React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  RefreshControl
} from "react-native";
import {
  Layout,
  Text,
  List,
  ListItem,
  Card,
  CardHeader,
  Button,
  Modal
} from "@ui-kitten/components";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import * as firebase from "firebase";
import "firebase/database";
import Markdown from "react-native-markdown-display";
import { light } from "@eva-design/eva";

const firebaseConfig = {
  apiKey: "AIzaSyCNoFTtU6ptY4xMA33oRdPqOnE3RMTO3hg",
  authDomain: "patriotapp-49caf.firebaseapp.com",
  databaseURL: "https://patriotapp-49caf.firebaseio.com",
  projectId: "patriotapp-49caf",
  storageBucket: "patriotapp-49caf.appspot.com",
  messagingSenderId: "86407120548",
  appId: "1:86407120548:web:37a6ebfb02461db4150831",
  measurementId: "G-PT4P5QC7FH"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

var dataImport = [];

async function fetchData() {
  var dataNewRef = await firebase.database().ref();
  await dataNewRef.once("value").then(function(snapshot) {
    dataImport = snapshot.val();
  });
  dataImport = await dataImport.reverse();
}

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

var itemState = {
  title: "",
  author: "",
  category: "",
  image: "",
  content: ""
};

function renderHeader(item) {
  var header = () => (
    <CardHeader title={item.title} description={item.author} />
  );
  return header;
}

function renderHeaderImg(item) {
  console.log(item);
  var header = () => (
    <React.Fragment>
      <Image style={styles.headerImage} source={{ uri: item.image }} />
      <Layout style={styles.headerTitle}>
        <Text category="h6" style={{ fontFamily: "Metropolis-SemiBold" }}>
          {item.title}
        </Text>
        <Text category="s2" style={{ fontFamily: "Metropolis-SemiBold" }}>
          {item.author}
        </Text>
      </Layout>
    </React.Fragment>
  );
  return header;
}

const removeMd = require("remove-markdown");
function renderContent(item) {
  var contentPrev = item.content;
  contentPrev = removeMd(contentPrev);
  contentPrev = contentPrev.replace(new RegExp("\n", "g"), " ");
  if (contentPrev.length > 100) {
    contentPrev = contentPrev.substring(0, 75);
    contentPrev = contentPrev.substring(0, contentPrev.lastIndexOf(" "));
    contentPrev = contentPrev + "...";
  }
  return contentPrev;
}

console.log(light);

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

class NewsScreen extends React.Component {
  state = {
    refreshing: false
  };

  setRefreshing = input => {
    this.setState({ refreshing: input });
  };

  async onRefresh() {
    await this.setRefreshing(true);
    this.componentDidMount();
    wait(2000).then(() => this.setRefreshing(false));
  }

  async componentDidMount() {
    await fetchData();
    await this.forceUpdate();
  }

  displayNews(item) {
    itemState = item;
    this.props.navigation.navigate("DisplayScreen");
  }

  render() {
    return (
      <Layout style={styles.container}>
        <Layout style={styles.headerBox}>
          <Text category="h1" style={{ fontFamily: "Metropolis-Bold" }}>
            News
          </Text>
        </Layout>
        <Layout style={styles.bodyBox}>
          <ScrollView
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={() => this.onRefresh()}
              />
            }
          >
            {dataImport.map(item => (
              <Card
                style={styles.card}
                header={renderHeaderImg(item)}
                onPress={() => this.displayNews(item)}
              >
                <Text style={{ fontFamily: "Inter" }}>
                  {renderContent(item)}
                </Text>
              </Card>
            ))}
          </ScrollView>
        </Layout>
      </Layout>
    );
  }
}

class DisplayScreen extends React.Component {
  render() {
    return (
      <Layout style={styles.container}>
        <ScrollView style={{ marginHorizontal: 15 }}>
          <Text category="h1" style={{ fontFamily: "Metropolis-Bold" }}>
            {itemState.title}
          </Text>
          <Image
            style={{
              flex: 1,
              width: deviceWidth - 15,
              height: 384,
              marginVertical: 15
            }}
            source={{ uri: itemState.image }}
          />
          <Markdown style={stylesMd} mergeStyle={true}>
            {itemState.content}
          </Markdown>
          <Layout style={{ height: 100 }} />
        </ScrollView>
      </Layout>
    );
  }
}

export const NewsNavigator = createStackNavigator({
  NewsScreen: {
    screen: NewsScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  DisplayScreen: {
    screen: DisplayScreen,
    navigationOptions: {
      title: "Article",
      headerStyle: {},
      headerStatusBarHeight: 0
    }
  }
});

const stylesMd = StyleSheet.create({
  body: {},
  code_block: {},
  code_inline: {},
  em: {},
  heading1: {
    fontFamily: "Metropolis-Bold"
  },
  heading2: { fontFamily: "Metropolis-Bold" },
  heading3: { fontFamily: "Metropolis-Bold" },
  heading4: { fontFamily: "Metropolis-SemiBold" },
  heading5: { fontFamily: "Metropolis-SemiBold" },
  heading6: { fontFamily: "Metropolis-SemiBold" },
  hr: {},
  blockquote: {},
  list_item: {},
  bullet_list: {},
  bullet_list_content: {},
  bullet_list_icon: {},
  ordered_list: {},
  ordered_list_content: {},
  ordered_list_icon: {},
  paragraph: {},
  hardbreak: {},
  strong: {},
  table: {},
  thread: {},
  th: {},
  tr: {},
  td: {},
  text: {},
  textgroup: {
    fontFamily: "Inter",
    color: "#222b45"
  },
  s: {},
  link: { color: "#1e88e5" },
  blocklink: {},
  image: {}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch"
  },
  headerBox: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    margin: 10
  },
  bodyBox: {
    flex: 11
  },
  card: {
    marginHorizontal: 15,
    marginVertical: 7
  },
  headerTitle: {
    marginHorizontal: 24,
    marginVertical: 16
  },
  headerImage: {
    flex: 1,
    height: 192
  }
});
