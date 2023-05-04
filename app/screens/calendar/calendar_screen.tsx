import React from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, Calendar, Button } from "@ui-kitten/components";
import { mapping, light as lightTheme } from "@eva-design/eva";
import { MomentDateService } from "@ui-kitten/moment";
import moment from "moment";
import { default as CalendarDayView } from "./calendar_dayview";
import { createStackNavigator } from "react-navigation-stack";

const dateService = new MomentDateService();

const CALENDAR_ID =
  "auhsd.us_2d3338353731353538363332@resource.calendar.google.com";
const API_KEY = "AIzaSyDGR5B9XJNuTDLHauYcj28c7EJzR-lnapQ";
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

class CalendarScreen extends React.Component {
  state = {
    events: [],
    date: new Date()
  };

  setDate = input => {
    this.setState({ date: input });
  };

  render() {
    return (
      <Layout style={styles.container}>
        <Text category="h1" style={{ fontFamily: "Metropolis-Bold" }}>
          Calendar
        </Text>
        <Text style={styles.text} category="h6">
          {`Selected date: ${this.state.date.toLocaleDateString()}`}
        </Text>

        <Calendar date={this.state.date} onSelect={this.setDate} />

        <Button
          onPress={() => this.props.navigation.navigate("CalendarDayView")}
        >
          Test
        </Button>
      </Layout>
    );
  }
}

const CalendarNavigator = createStackNavigator({
  CalendarScreen: {
    screen: CalendarScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  CalendarDayView: {
    screen: CalendarDayView,
    navigationOptions: {
      headerShown: false
    }
  }
});

export default CalendarNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    marginVertical: 8
  }
});
