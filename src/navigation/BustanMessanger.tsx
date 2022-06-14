import {View,Text,StyleSheet} from "react-native";
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import {HomeScreen} from "../Screens";
import {HomeStack,LoginStack} from "./";
import SplashScreen from "../Screens/login/SplashScreen";
import LoginFirstScreen from "../Screens/login/LoginFirstScreen";




const Stack = createNativeStackNavigator();
const BustanMessanger =()=>{
    const [isLoggin, setIsLoggin] = useState(false);

    return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown: false}}/>
        <Stack.Screen name="LoginFirstScreen" component={LoginFirstScreen}/>

        </Stack.Navigator>
        
    </NavigationContainer>

)
}
export default BustanMessanger;

const styles=StyleSheet.create({
container:{
flex:1
}
})
//{isLoggin ? <HomeStack/>  : <LoginStack/>}