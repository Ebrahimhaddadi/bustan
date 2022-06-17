import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Logo from "../../../assets/logo.svg";
import Colors from "../../constanst/Colors";
import MyButton from "../../components/MyButton";

const LoginSecondScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/BG.png")}
        style={{ flex: 1, width: "100%", alignItems: "center" }}
      >
        <Logo width={250} height={250} style={styles.logo} />
        <View style={styles.verificationBox}>
          <View style={styles.codeInfo}>
            <Text style={styles.title}>Enter 4-digit code</Text>
            <Text style={styles.resendText}>Resend code in 1:54</Text>
            <TextInput style={styles.input} />
          </View>
          <View>
            <Text style={styles.phoneNumber}>+98 911 234 5678</Text>
            <TouchableOpacity style={styles.underline}>
              <Text style={styles.wrong}>Wrong number?</Text>
            </TouchableOpacity>
          </View>
          <MyButton title="Verify" />
        </View>
      </ImageBackground>
    </View>
  );
};
export default LoginSecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    position: "absolute",
    top: "17%",
    zIndex: 1,
  },
  verificationBox: {
    alignItems: "center",
    backgroundColor: Colors.perpule,
    borderRadius: 20,
    height: "52%",
    justifyContent: "space-around",
    paddingTop: "27%",
    top: "35%",
    width: "85%",
  },
  codeInfo: {
    alignItems: "center",
    height: "40%",
    justifyContent: "space-between",
    width: "100%",
  },
  title: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: "500",
  },
  resendText: {
    color: Colors.whitesmoke,
  },
  input: {
    borderColor: Colors.white,
    borderRadius: 10,
    borderWidth: 1,
    height: 40,
    padding: 10,
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
