import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constanst/Colors";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.tow,
  },
});
