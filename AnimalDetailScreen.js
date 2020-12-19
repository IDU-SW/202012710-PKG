import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';
import {WebView} from 'react-native-webview'

import {useSelector, useDispatch} from "react-redux";
import {addResident, removeResident} from "./Action";

import {useNavigation} from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const AnimalDetailScreen = ({route}) =>{

    let [isResident, setResident] = useState(false);

    const {animal} = route.params;

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
    return (
        <>
            <View style={{height:'10%', flexDirection:'row', backgroundColor: '#8EC7D0'}}>
                <View style={{width:'15%', justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>navigator.goBack()}>
                        <Image source={require('./images/Button/back-arrow.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={{width:'70%', justifyContent:'center'}}>
                    <Text style={{fontSize:23, fontWeight:'bold',textAlign:'center', color:'white'}}>{animal.name}</Text>
                </View>
                <View style={{width:'15%', justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity onPress={toggleResident}>
                        {isResident ? 
                        <Image source={require('./images/Button/home_on.png')}/> : 
                        <Image source={require('./images/Button/home_off.png')}/>}
                    </TouchableOpacity>
                </View>
            </View>

                <Image
                style={{height:200, width:'100%', resizeMode:'contain', borderRadius:10, marginVertical:30}}
                source={animal.image}
                />

            <ScrollView style={{width:'100%', height:500}}>
                
                <View style={{marginHorizontal:20, flexDirection:'row', marginBottom:10}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>이름  :  </Text><Text style={{fontSize:20}}>{animal.name}</Text>
                </View>
                <View style={{marginHorizontal:20, flexDirection:'row', marginBottom:10}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>선호 색상  :  </Text><Text style={{fontSize:20}}>{animal.fcolor}</Text>
                </View>
                <View style={{marginHorizontal:20, flexDirection:'row', marginBottom:10}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>선호 스타일  :  </Text><Text style={{fontSize:20}}>{animal.fstyle}</Text>
                </View>
                <View style={{marginHorizontal:20, flexDirection:'row', marginBottom:10}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>좋아하는 곡  :  </Text><Text style={{fontSize:20}}>{animal.fsong}</Text>
                </View>
                <View style={{marginHorizontal:20, flexDirection:'row', marginBottom:10}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>말버릇  :  </Text><Text style={{fontSize:20}}>{animal.shabit}</Text>
                </View>
                <View style={{marginHorizontal:20, flexDirection:'row', marginBottom:10}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>취미  :  </Text><Text style={{fontSize:20}}>{animal.hobby}</Text>
                </View>
                <View style={{marginHorizontal:20, flexDirection:'row', marginBottom:10}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>생일  :  </Text><Text style={{fontSize:20}}>{animal.birthday}</Text>
                </View>
                <View style={{marginHorizontal:20, flexDirection:'row', marginBottom:10}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>성별  :  </Text><Text style={{fontSize:20}}>{animal.gender}</Text>
                </View>
                <WebView style={{ width: '100%', height: 400 }}
                mixedContentMode='always' 
                source={{uri:animal.link}}
                useWebKit={true} 
                scrollEnabled={true} domStorageEnabled={true} javaScriptEnabled={true}
                />
            </ScrollView>
        </>
    )
}

export default AnimalDetailScreen;
