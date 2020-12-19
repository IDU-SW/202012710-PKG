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
  Image,
  Button,
  TouchableOpacity,
  FlatList
} from 'react-native';

import {animals} from "./animals";

const App = ()  => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{height:'10%'}}>
          <View style={{height:'75%', backgroundColor: '#8EC7D0', justifyContent:'center'}}>
            <Text style={{fontSize:23, fontWeight:'bold',textAlign:'center', color:'white'}}>주민 목록</Text>
          </View>
          <View style={{height:'25%', backgroundColor: '#8EC7D0', borderBottomLeftRadius:25, borderBottomRightRadius:25}}></View>
        </View>

        <ScrollView style={{height:'85%', marginTop:20, marginBottom:20}}>
          <FlatList 
            data={animals} 
            keyExtractor={(item)=> `animal=${item.id}`} 
            renderItem={({item}) => (
                // <TouchableOpacity
                //     onPress={()=>{showMovieDetail(item)}}
                // >
              <AnimalCell animal={item} />
                /* </TouchableOpacity> */
                    
            )}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const AnimalCell = ({animal}) => {
  console.log(animal)
  return(
  <View style={{height:80, width:'100%', margin:10, flexDirection:'row'}}>
    <Image
      style={{height:'100%', width:'20%', resizeMode:'cover', borderRadius:10}}
      source={animal.image}
    />

    <View style={{height:'100%', width:'55%', paddingLeft:30,justifyContent:'center'}}>
      <Text style={{fontWeight:'bold', fontSize:22, marginBottom:5}}>{animal.name}</Text>
      <Text style={{fontSize:15}}>{animal.comment}</Text>
    </View>

    <View style={{height:'100%', width:'25%', flexDirection:'row'}}>
      <TouchableOpacity style={{justifyContent:'center', marginRight:20}}>
        <Image source={require('./images/Button/home_off.png')}/>
      </TouchableOpacity>
      <TouchableOpacity style={{justifyContent:'center'}}>
        <Image source={require('./images/Button/detail.png')}/>
      </TouchableOpacity>
    </View>

  </View>
  )
}

export default App;
