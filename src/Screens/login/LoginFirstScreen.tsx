import { View, Text, StyleSheet, ImageBackground } from "react-native";

import Logo from "../../../assets/logo.svg";
import Colors from "../../constanst/Colors";
import MyButton from "../../components/MyButton";
import PhoneNumberInput from "../../components/PhoneNumberInput";

const LoginFirstScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/BG.png")}
        style={{ flex: 1, width: "100%", alignItems: "center" }}
      >
        <Logo width={250} height={250} style={styles.logo} />
        <View style={styles.loginContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Please enter your phone number</Text>
            <Text style={styles.subtitle}>
              The activation code will be sent to you via SMS
            </Text>
          </View>
          <PhoneNumberInput />
          <MyButton
            title="Request code"
            onPress={() => console.log("Clicked")}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
export default LoginFirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    position: "absolute",
    top: "17%",
    zIndex: 1,
  },
  loginContainer: {
    alignItems: "center",
    backgroundColor: Colors.perpule,
    borderRadius: 20,
    height: "52%",
    justifyContent: "space-around",
    paddingTop: "27%",
    top: "35%",
    width: "95%",
  },
  titleContainer: {
    alignItems: "center",
    height: "18%",
    justifyContent: "space-between",
  },
  title: {
    color: Colors.white,
    fontSize: 18,
  },
  subtitle: {
    color: Colors.whitesmoke,
    fontSize: 12,
  },
  input: {
    width: "50%",
  },
  phoneNumber: {
    color: Colors.whitesmoke,
  },
  underline: {
    borderBottomColor: Colors.orange,
    borderBottomWidth: 1,
  },
  wrong: {
    color: Colors.orange,
    fontSize: 16,
    lineHeight: 30,
  },
});
