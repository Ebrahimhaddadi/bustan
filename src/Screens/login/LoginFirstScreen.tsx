import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Colors from "../../constanst/Colors";
import Logo from "../../../assets/logo.svg";
import MyButton from "../../components/MyButton";
import PhoneNumberInput from "../../components/PhoneNumberInput";

const LoginFirstScreen = () => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <ImageBackground
        source={require("../../../assets/BG.png")}
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginContainer}>
            <Logo width={250} height={250} style={styles.logo} />
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
        </TouchableWithoutFeedback>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};
export default LoginFirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    position: "absolute",
    top: "-51%",
    zIndex: 1,
  },
  loginContainer: {
    alignItems: "center",
    backgroundColor: Colors.perpule,
    borderRadius: 20,
    height: 400,
    width: "95%",
    justifyContent: "space-around",
    paddingTop: "27%",
    top: "35%",
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
