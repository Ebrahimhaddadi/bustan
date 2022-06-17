import { StyleSheet, Platform, StatusBar } from "react-native";
import Colors from "../constanst/Colors";

export default StyleSheet.create({
  AndroidSafeArea: {
    backgroundColor: Colors.white,
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
