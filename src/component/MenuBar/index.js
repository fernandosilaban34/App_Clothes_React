import React from 'react';
import { Image, Text, View } from 'react-native';

const MenuBar = (props) => {

    return (
        <View style={{height: 80, width: 80, paddingHorizontal: 1}}>
            <View style={{ backgroundColor: '#FFFFFF', height: '60%', width: '60%', borderRadius: 30, alignSelf:'center'}}>
                <Image source={props.icon} style={{alignSelf:'center', width: '80%', height: '100%'}} />
            </View>
            <Text style={{fontSize:9, alignSelf:'center', paddingTop:'2%'}}>{props.text}</Text>
        </View>
    );
}

export default MenuBar;
