import { View, Text, StyleSheet } from "react-native";

import { BustanMessanger } from "./src/navigation";
import SafeView from "./src/components/SafeView";

import LoginSecondScreen from "./src/Screens/login/LoginSecondScreen";
const App = () => {
  return (
    <View style={SafeView.AndroidSafeArea}>
      {/* <BustanMessanger /> */}
      <LoginSecondScreen />
      {/* <Test /> */}
    </View>
  );
};
export default App;
