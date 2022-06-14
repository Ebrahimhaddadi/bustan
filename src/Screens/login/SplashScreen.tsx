import { StyleSheet, View, ImageBackground } from 'react-native'
import React from 'react'

import Logo from "../../../assets/images/logo.svg";

const SplashScreen = ({navigation}: {navigation: any}) => {
  
    setTimeout(()=>{ navigation.navigate('LoginFirstScreen'); }, 5000); 
    return( 
       <View>
        <ImageBackground source={require('../../../assets/images/BG.png')}  style={{width: '100%', height: '100%'}}>
          <View style={styles.logo}>
          <Logo height={300} width={300}/>
          </View>
          </ImageBackground>
        </View>
        );
};

const styles = StyleSheet.create({
  logo:{
    alignItems: 'center',
    justifyContent: 'center',
    flex:5,
  },
});
export default SplashScreen;