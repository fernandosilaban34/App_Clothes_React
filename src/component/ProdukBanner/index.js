import React from 'react';
import { Image, Text, View } from 'react-native';

const ProdukBanner = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.img} style={styles.img} />
            <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 8 }}>Rp 20.000</Text>
            <View style={{backgroundColor:'#F2C6AB', width:20, height:20, marginLeft: 8, marginTop: 5, borderRadius:5, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:7, alignSelf:'center', color:'#FFFF'}}>100%</Text>
            </View>
            <Text style={{ fontSize: 12, fontWeight: 'bold', marginLeft: 8, marginTop: 5 }}>Segera habis</Text>
        </View>
    );


}
const styles = {
    container: {
        height: '90%',
        width: 100,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginHorizontal: 10
    },
    img: {
        backgroundColor: 'blue',
        height: '60%',
        width: '100%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    }
}
export default ProdukBanner;
