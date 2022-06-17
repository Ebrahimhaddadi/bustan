import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import {HomeStack,LoginStack} from "./";
import HomeStack from "./HomeStack";
import LoginStack from "./LoginStack";

const Stack = createNativeStackNavigator();
const BustanMessanger = () => {
  const [isLoggin, setIsLoggin] = useState(false);

  return (
    <NavigationContainer>
      {isLoggin ? <HomeStack /> : <LoginStack />}
    </NavigationContainer>
  );
};
export default BustanMessanger;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
