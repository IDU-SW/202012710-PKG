/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import {animals} from "./animals";
const App = ()  => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        
        <View style={{height:'20%', backgroundColor: '#8EC7D0', justifyContent:'center'}}>
          <Text style={{fontSize:23, fontWeight:'bold',textAlign:'center', color:'white'}}>주민 목록</Text>
        </View>
        <View style={{height:'5%', backgroundColor: '#8EC7D0', borderBottomLeftRadius:25, borderBottomRightRadius:25}}></View>

        <View style={{height:100, width:90, padding:10}}>
          <Image
            style={{height:'100%', width:'100%', resizeMode:'cover', borderRadius:10}}
            source={require('./images/쭈니.png')}
          />
        </View>
          {/* <View Style={{flex:1, flexDirection:'column'}}>
            
            <Text style={{fontSize:15, backgroundColor:'red'}}>쭈니</Text>
          </View> */}
      </SafeAreaView>
    </>
  );
};

export default App;
