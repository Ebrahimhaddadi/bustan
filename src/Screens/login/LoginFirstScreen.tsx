import {View,Text,StyleSheet} from "react-native";

const LoginFirstScreen =({navigation}:{navigation:any})=>{
return(
<View style={styles.container}>
<Text>LoginFirstScreen</Text>
</View>
)
}
export default LoginFirstScreen;

const styles=StyleSheet.create({
container:{
flex:1
}
})