import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  AndroidSafeArea: {
    padding: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#eee",
  }
});