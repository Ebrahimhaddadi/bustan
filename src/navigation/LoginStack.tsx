import {View,Text,StyleSheet} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginFirstScreen from "../Screens/login/LoginFirstScreen";
const Stack = createNativeStackNavigator();
const LoginStack =({navigation})=>{
return(
<View style={styles.container}>
    <Stack.Navigator initialRouteName="login" >
        <Stack.Screen name="login" component={LoginFirstScreen}/>
    </Stack.Navigator>
</View>
)
}
export default LoginStack;

const styles=StyleSheet.create({
container:{
flex:1
}
})