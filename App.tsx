import React from "react";
import { Dimensions, Linking, View } from "react-native";
import {
  ApplicationProvider,
  Layout,
  Text,
  IconRegistry,
  Icon,
  BottomNavigation,
  BottomNavigationTab
} from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { createAppContainer, SafeAreaView } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { NewsNavigator as NewsScreen } from "./app/screens/news/news_screen";
import { GradesNavigator as GradesScreen } from "./app/screens/grades/grades_screen";
import { default as CalendarScreen } from "./app/screens/calendar/calendar_screen";
import { default as AgendaScreen } from "./app/screens/agenda/agenda_screen";
import { SettingsNavigator as SettingsScreen } from "./app/screens/settings/settings_screen";
import { default as appTheme } from "./custom-theme.json";
import { mapping, dark as darkTheme } from "@eva-design/eva";
import { light as lightTheme } from "@eva-design/eva";
import { FloatingAction } from "react-native-floating-action";
import { default as UserInfoScreen } from "./app/screens/user_info/user_info_screen";
import * as Font from "expo-font";
import Constants from "expo-constants";
import { default as customMapping } from "./custom-mapping.json";
import { AppLoading } from "expo";
//import { default as initialConfig } from "./app/config/initial_config.json";
import { AsyncStorage } from "react-native";
import { SettingsStorage } from "./app/classes/storage/storage_abstraction";

var theme = { ...lightTheme, ...appTheme };

let deviceHeight = Dimensions.get("window").height;
let deviceWidth = Dimensions.get("window").width;

var bottomPadding = 0;
if (Constants.platform.ios) {
  if (
    Constants.platform.ios.model.includes("X") ||
    Constants.platform.ios.model.includes("11") ||
    Constants.platform.ios.model.includes("12")
  ) {
    bottomPadding = 34;
  }
}

export default class App extends React.Component {
  state = {
    isReady: false
  };

  async loadFonts() {
    await Font.loadAsync({
      "Metropolis-Regular": require("./assets/fonts/metropolis/Metropolis-Regular.ttf")
    });
    await Font.loadAsync({
      "Metropolis-Medium": require("./assets/fonts/metropolis/Metropolis-Medium.ttf")
    });
    await Font.loadAsync({
      "Metropolis-SemiBold": require("./assets/fonts/metropolis/Metropolis-SemiBold.ttf")
    });
    await Font.loadAsync({
      "Metropolis-Bold": require("./assets/fonts/metropolis/Metropolis-Bold.ttf")
    });
    await Font.loadAsync({
      "Metropolis-ExtraBold": require("./assets/fonts/metropolis/Metropolis-ExtraBold.ttf")
    });
    await Font.loadAsync({
      "Metropolis-Black": require("./assets/fonts/metropolis/Metropolis-Black.ttf")
    });
    await Font.loadAsync({
      Manrope: require("./assets/fonts/ManropeGX.ttf")
    });
    await Font.loadAsync({
      Inter: require("./assets/fonts/Inter.otf")
    });
  }

  async initializeApp() {
    await this.loadFonts();
    try {
      var check = await AsyncStorage.getItem("isInitialized");
    } catch (error) {
      console.log(error);
    }
    if (check == null || check == "false") {
      //sawait this.defaultSettings();
      await AsyncStorage.setItem("isInitialized", "true");
    }
  }
/*
  async defaultSettings() {
    for (var i in initialConfig) {
      await SettingsStorage.setItem(i, initialConfig[i]);
    }
  }
//*/
  render() {
    if (this.state.isReady == false) {
      return (
        <AppLoading
          startAsync={() => this.initializeApp()}
          onError={console.warn}
          onFinish={() => this.setState({ isReady: true })}
        />
      );
    }
    return (
      <React.Fragment>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider
          mapping={mapping}
          theme={theme}
          customMapping={customMapping}
        >
          <AppNavigator />
        </ApplicationProvider>
      </React.Fragment>
    );
  }
}

const HomeIcon = style => <Icon {...style} name="home-outline" />;

const GradesIcon = style => <Icon {...style} name="book-open-outline" />;

const CalendarIcon = style => <Icon {...style} name="calendar-outline" />;

const AgendaIcon = style => <Icon {...style} name="folder-outline" />;

const actions = [
  {
    text: "OA Webpage",
    icon: require("./app/img/globe-outline.png"),
    position: 1,
    name: "oa_web"
  },
  {
    text: "OATV News",
    icon: require("./app/img/play-circle-outline.png"),
    position: 2,
    name: "oatv_yt"
  },
  {
    text: "Counseling Page",
    icon: require("./app/img/external-link-outline.png"),
    position: 3,
    name: "counseling"
  },
  {
    text: "User Info",
    icon: require("./app/img/person-outline.png"),
    position: 4,
    name: "user_info"
  },
  {
    text: "Settings",
    icon: require("./app/img/settings-2-outline.png"),
    position: 5,
    name: "settings"
  }
];

const TabBarComponent = ({ navigation }) => {
  const onSelect = index => {
    const selectedTabRoute = navigation.state.routes[index];
    navigation.navigate(selectedTabRoute.routeName);
  };

  return (
    <SafeAreaView>
      <BottomNavigation
        selectedIndex={navigation.state.index}
        onSelect={onSelect}
      >
        <BottomNavigationTab title="Home" icon={HomeIcon} />
        <BottomNavigationTab title="Grades" icon={GradesIcon} />
        <BottomNavigationTab title="Calendar" icon={CalendarIcon} />
        <BottomNavigationTab title="Agenda" icon={AgendaIcon} />
      </BottomNavigation>
    </SafeAreaView>
  );
};

const TabNavigator = createBottomTabNavigator(
  {
    News: NewsScreen,
    Grades: GradesScreen,
    Calendar: CalendarScreen,
    Agenda: AgendaScreen
  },
  {
    tabBarComponent: TabBarComponent
  }
);

class MainScreen extends React.Component {
  actionMenu(name: string) {
    if (name == "oa_web") {
      Linking.openURL("https://oxford.auhsd.us");
    } else if (name == "oatv_yt") {
      Linking.openURL(
        "https://www.youtube.com/channel/UCVHL-oidly6POUkTYP8vqIA"
      );
    } else if (name == "counseling") {
      Linking.openURL("https://sites.google.com/auhsd.us/oacounseling/home");
    } else if (name == "user_info") {
      this.props.navigation.navigate("UserInfoScreen");
    } else if (name == "settings") {
      this.props.navigation.navigate("SettingsScreen");
    }
  }

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1 }}
        forceInset={{ bottom: "always", top: "never" }}
      >
        <View
          style={{
            height: Constants.statusBarHeight
          }}
        />
        <TabContainer />
        <FloatingAction
          actions={actions}
          distanceToEdge={{ vertical: 75 + bottomPadding, horizontal: 30 }}
          onPressItem={name => this.actionMenu(name)}
        />
      </SafeAreaView>
    );
  }
}

export const StackNavigator = createStackNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: {
      title: "Settings"
    }
  },
  UserInfoScreen: {
    screen: UserInfoScreen,
    navigationOptions: {
      title: "User Info"
    }
  }
});

export const TabContainer = createAppContainer(TabNavigator);
export const AppNavigator = createAppContainer(StackNavigator);
