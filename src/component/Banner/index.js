import React from 'react';
import { Image, Text, View } from 'react-native';

const Banner = (props) => {

    const banner1 = '../../assets/banner/banner1.jpg'
    return (
        <View style={styles.banner}>
            <Image source={props.img} style={styles.imgStyle} />
        </View>
    );
}

const styles = {
    banner: {
        backgroundColor: 'blue',
        alignSelf: 'center',
        borderRadius: 10,
        marginHorizontal: 10,
        margingTop: '2%',
        height: 150,
        width: 300
    },
    imgStyle: {
        height: '100%',
        width: '100%',
        borderRadius: 10
    }
}

export default Banner;
