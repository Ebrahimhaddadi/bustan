import { View, Text, StyleSheet } from "react-native";

import { BustanMessanger } from "./src/navigation";
import SafeView from "./src/components/SafeView";

import Test from "./src/components/Test";
const App = () => {
  return (
    <View style={SafeView.AndroidSafeArea}>
      <BustanMessanger />
      {/* <Test /> */}
    </View>
  );
};
export default App;
