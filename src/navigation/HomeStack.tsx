import {View,Text,StyleSheet} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "../Screens";
const Stack = createNativeStackNavigator();
const HomeStack =({navigation}:{navigation:any})=>{
return(
    <View style={{flex:1}}>
        <Stack.Navigator initialRouteName="home" >
            <Stack.Screen name="home" component={HomeScreen}/>
        </Stack.Navigator>
    </View>

)
}
export default HomeStack;

const styles=StyleSheet.create({
container:{
flex:1
}
})