import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const AnimalDetailScreen = ({route}) =>{
    const {animal} = route.params;
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
                    <TouchableOpacity>
                        <Image source={require('./images/Button/home_off.png')}/>
                    </TouchableOpacity>
                </View>
            </View>


            <Image
            style={{height:200, width:'100%', resizeMode:'contain', borderRadius:10, marginVertical:30}}
            source={animal.image}
            />

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
            
        </>
    )
}

export default AnimalDetailScreen;
