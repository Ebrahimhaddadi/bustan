import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CountryPicker from "react-native-country-picker-modal";

import Colors from "../constanst/Colors";
type Props = {
  // onPress?: ((event: GestureResponderEvent) => void) | undefined;
  style?: {};
};

const CountryCodeButton = (props: Props) => {
  const { style } = props;
  return (
    <TouchableOpacity style={{ ...styles.button, ...style }}>
      <View style={styles.flagContainer}>
        <CountryPicker countryCode="IR" />
      </View>
      <Text style={styles.text}>98</Text>
    </TouchableOpacity>
  );
};

export default CountryCodeButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  flagContainer: {
    alignItems: "center",
    borderRadius: 5,
    overflow: "hidden",
    width: "50%",
  },
  text: {
    color: Colors.perpule,
    fontSize: 16,
    fontWeight: "500",
  },
});
