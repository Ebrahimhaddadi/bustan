import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import Colors from "../constanst/Colors";

type Props = {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  title: string;
  style?: {};
};

const MyButton = (props: Props) => {
  const { title, style, onPress } = props;

  return (
    <TouchableOpacity style={{ ...styles.button, ...style }} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: Colors.four,
    borderRadius: 10,
    justifyContent: "center",
    marginVertical: 10,
    padding: 10,
    width: "70%",
  },
  text: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "500",
  },
});
