import { View, Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ChatScreen, LoginFirstScreen } from "../Screens";
import Colors from "../constanst/Colors";

const Stack = createNativeStackNavigator();
const LoginStack = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Stack.Navigator
        initialRouteName='login'
        screenOptions={{
          // headerStyle: {
          //   backgroundColor: Colors.four,
          // },
          headerShown:false,
        }}
      >
        <Stack.Screen name='login' component={LoginFirstScreen} />
        <Stack.Screen name='chat' component={ChatScreen} />
      </Stack.Navigator>
    </View>
  );
};
export default LoginStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
