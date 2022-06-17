import React from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";

import Colors from "../constanst/Colors";
import CountryCodeButton from "./CountryCodeButton";

const PhoneNumberInput = () => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log("Clicked")}
    >
      <CountryCodeButton style={{ width: "30%" }} />
      <TextInput
        style={{ flex: 1 }}
        placeholder="✻✻✻ ✻✻✻ ✻✻✻✻"
        keyboardType="phone-pad"
        selectionColor={Colors.perpule}
      />
    </TouchableOpacity>
  );
};

export default PhoneNumberInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderColor: Colors.white,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    height: 50,
    overflow: "hidden",
    width: "70%",
  },
});
