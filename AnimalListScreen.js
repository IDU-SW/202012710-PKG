import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import {useSelector, useDispatch} from "react-redux";
import {addResident, removeResident} from "./Action";

import {useNavigation} from '@react-navigation/native';


const AnimalCell = ({animal}) => {

    let [isResident, setResident] = useState(false);

    const residents = useSelector( (state) => {return state.residents});

    useEffect( () => {
        if ( residents.length > 0 ) {
            let filtered = residents.filter( item => {
                return item.id == animal.id
            });
            setResident( filtered.length > 0);
        }
        else {
            setResident( false );
        }
    }, [residents])

    const dispatch = useDispatch();

    const toggleResident = () => {
        if (isResident) {
            dispatch(removeResident(animal.id))
        } else {
            dispatch(addResident(animal))
        }
    }

    const navigator = useNavigation();

    const showAnimalDetail = (animal) => {
        navigator.navigate('AnimalDetail', {animal})
    }

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
        <TouchableOpacity style={{justifyContent:'center', marginRight:20}} onPress={toggleResident}>
            {isResident ? 
            <Image source={require('./images/Button/home_on.png')}/> : 
            <Image source={require('./images/Button/home_off.png')}/>}
        </TouchableOpacity>
        <TouchableOpacity style={{justifyContent:'center'}}
            onPress={()=>showAnimalDetail(animal)}>
          <Image source={require('./images/Button/detail.png')}/>
        </TouchableOpacity>
      </View>
  
    </View>
    )
  }



const AnimalListScreen = ({route}) => {
    const animals = route.params.animals
    return(
        <>
            <View style={{height:'10%'}}>
            <View style={{height:'75%', backgroundColor: '#8EC7D0', justifyContent:'center'}}>
                <Text style={{fontSize:23, fontWeight:'bold',textAlign:'center', color:'white'}}>주민 목록</Text>
            </View>
            <View style={{height:'25%', backgroundColor: '#8EC7D0', borderBottomLeftRadius:25, borderBottomRightRadius:25}}></View>
            </View>

            <FlatList style={{height:'85%', marginTop:20, marginBottom:20}}
                data={animals}
                keyExtractor={(item)=> `animal=${item.id}`} 
                renderItem={({item}) => (
                    <AnimalCell animal={item} />
            )}
            />
        </>
    )
}

export default AnimalListScreen;