import React from 'react';
import { View, Text, Image } from 'react-native';

const Cover = (props) => {
    return (
        <View style={styles.banner}>
            <Image source={props.img} style={styles.imgStyle}/>
        </View>
    );
}

const styles = {
    banner : {
        height : '100%', 
        width:'100%' ,
        backgroundColor:'blue', 
        alignSelf: 'center'
    },
    imgStyle : {
        height:'100%', 
        width:'100%'
    }
}

export default Cover;
