import React from "react";
import { Text } from "react-native";

type Props = {
  children: any;
  otherProps?: {};
  style?: {};
};
const MyText = (props: Props) => {
  const { children, style, otherProps } = props;

  return (
    <Text style={style} {...otherProps}>
      {children}
    </Text>
  );
};

export default MyText;
