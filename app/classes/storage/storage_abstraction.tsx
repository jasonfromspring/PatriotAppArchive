import { AsyncStorage } from "react-native";

export class SettingsStorage {
  static setItem = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem("@Settings:" + key, value);
    } catch (error) {
      console.log(
        "error saving setting " + key + " with value " + value + ": " + error
      );
    }
  };

  static getItem = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem("@Settings:" + key);
      if (value !== null) {
        return value;
      } else {
        console.log("error retrieving setting " + key + "; value is null");
      }
    } catch (error) {
      console.log("error retrieving setting " + key + ": " + error);
    }
  };

  static removeItem = async (key: string) => {
    try {
      await AsyncStorage.removeItem("@Settings:" + key);
    } catch (error) {
      console.log("error removing setting " + key + ": " + error);
    }
  };

  static mergeItem = async (key: string, value: string) => {
    try {
      await AsyncStorage.mergeItem("@Settings:" + key, value);
    } catch (error) {
      console.log(
        "error merging setting " + key + " with value " + value + ": " + error
      );
    }
  };
}

export class NewsStorage {
  static setItem = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem("@News:" + key, value);
    } catch (error) {
      console.log(
        "error saving news data " + key + " with value " + value + ": " + error
      );
    }
  };

  static getItem = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem("@News:" + key);
      if (value !== null) {
        return value;
      } else {
        console.log("error retrieving news data " + key + "; value is null");
      }
    } catch (error) {
      console.log("error retrieving news data " + key + ": " + error);
    }
  };

  static removeItem = async (key: string) => {
    try {
      await AsyncStorage.removeItem("@News:" + key);
    } catch (error) {
      console.log("error removing news data " + key + ": " + error);
    }
  };

  static mergeItem = async (key: string, value: string) => {
    try {
      await AsyncStorage.mergeItem("@News:" + key, value);
    } catch (error) {
      console.log(
        "error merging news data " + key + " with value " + value + ": " + error
      );
    }
  };
}

export class CalendarStorage {
  static setItem = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem("@Calendar:" + key, value);
    } catch (error) {
      console.log(
        "error saving calendar data " +
          key +
          " with value " +
          value +
          ": " +
          error
      );
    }
  };

  static getItem = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem("@Calendar:" + key);
      if (value !== null) {
        return value;
      } else {
        console.log(
          "error retrieving calendar data " + key + "; value is null"
        );
      }
    } catch (error) {
      console.log("error retrieving calendar data " + key + ": " + error);
    }
  };

  static removeItem = async (key: string) => {
    try {
      await AsyncStorage.removeItem("@Calendar:" + key);
    } catch (error) {
      console.log("error removing calendar data " + key + ": " + error);
    }
  };

  static mergeItem = async (key: string, value: string) => {
    try {
      await AsyncStorage.mergeItem("@Calendar:" + key, value);
    } catch (error) {
      console.log(
        "error merging calendar data " +
          key +
          " with value " +
          value +
          ": " +
          error
      );
    }
  };
}

export class AgendaStorage {
  static setItem = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem("@Agenda:" + key, value);
    } catch (error) {
      console.log(
        "error saving agenda data " +
          key +
          " with value " +
          value +
          ": " +
          error
      );
    }
  };

  static getItem = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem("@Agenda:" + key);
      if (value !== null) {
        return value;
      } else {
        console.log("error retrieving agenda data " + key + "; value is null");
      }
    } catch (error) {
      console.log("error retrieving agenda data " + key + ": " + error);
    }
  };

  static removeItem = async (key: string) => {
    try {
      await AsyncStorage.removeItem("@Agenda:" + key);
    } catch (error) {
      console.log("error removing agenda data " + key + ": " + error);
    }
  };

  static mergeItem = async (key: string, value: string) => {
    try {
      await AsyncStorage.mergeItem("@Agenda:" + key, value);
    } catch (error) {
      console.log(
        "error merging agenda data " +
          key +
          " with value " +
          value +
          ": " +
          error
      );
    }
  };
}

export class GradesStorage {
  static setItem = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem("@Grades:" + key, value);
    } catch (error) {
      console.log(
        "error saving grades data " +
          key +
          " with value " +
          value +
          ": " +
          error
      );
    }
  };

  static getItem = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem("@Grades:" + key);
      if (value !== null) {
        return value;
      } else {
        console.log("error retrieving grades data " + key + "; value is null");
      }
    } catch (error) {
      console.log("error retrieving grades data " + key + ": " + error);
    }
  };

  static removeItem = async (key: string) => {
    try {
      await AsyncStorage.removeItem("@Grades:" + key);
    } catch (error) {
      console.log("error removing grades data " + key + ": " + error);
    }
  };

  static mergeItem = async (key: string, value: string) => {
    try {
      await AsyncStorage.mergeItem("@Grades:" + key, value);
    } catch (error) {
      console.log(
        "error merging grades data " +
          key +
          " with value " +
          value +
          ": " +
          error
      );
    }
  };
}

export class UserDataStorage {
  static setItem = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem("@UserData:" + key, value);
    } catch (error) {
      console.log(
        "error saving user data " + key + " with value " + value + ": " + error
      );
    }
  };

  static getItem = async (key: string) => {
    try {
      const value = await AsyncStorage.getItem("@UserData:" + key);
      if (value !== null) {
        return value;
      } else {
        console.log("error retrieving user data " + key + "; value is null");
      }
    } catch (error) {
      console.log("error retrieving user data " + key + ": " + error);
    }
  };

  static removeItem = async (key: string) => {
    try {
      await AsyncStorage.removeItem("@UserData:" + key);
    } catch (error) {
      console.log("error removing user data " + key + ": " + error);
    }
  };

  static mergeItem = async (key: string, value: string) => {
    try {
      await AsyncStorage.mergeItem("@UserData:" + key, value);
    } catch (error) {
      console.log(
        "error merging user data " + key + " with value " + value + ": " + error
      );
    }
  };
}