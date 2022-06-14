import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';

function Navbar({ navigation }) {
    const uriHome = '../../assets/icon/Home.png'
    const uriHomeActive = '../../assets/icon/HomeActive.png'

    function Logss () {
        alert('test')
    }
    return (
        <View style={[styles.container, shadow]}>
            <View style={{ flex: 1 }}  onStartShouldSetResponder={() => navigation.navigate('Home')}>
                <Image source={require(uriHomeActive)} style={styles.icon}/>
                <Text style={styles.textNavbarActive}>Home</Text>
            </View>
            <View style={{ flex: 1 }}  onStartShouldSetResponder={() => navigation.navigate('Feed')}>
                 <Image source={require(uriHome)} style={styles.icon} />
                <Text style={styles.textNavbar}>Feed</Text>
            </View>
            <View style={{ flex: 1 }} onStartShouldSetResponder={() => navigation.navigate('Official')}>
                 <Image source={require(uriHome)} style={styles.icon} />
                <Text style={styles.textNavbar}>Office Store</Text>
            </View>
            <View style={{ flex: 1 }} onStartShouldSetResponder={() => navigation.navigate('Wishlist')}>
                 <Image source={require(uriHome)} style={styles.icon} />
                <Text style={styles.textNavbar}>Wishlist</Text>
            </View>
            <View style={{ flex: 1 }} onStartShouldSetResponder={() => navigation.navigate('Transaksi')}>
                 <Image source={require(uriHome)} style={styles.icon} />
                <Text style={styles.textNavbar}>Transaksi</Text>
            </View>
        </View>
    );
}


const shadow = {
    shadowRadius: 2,
    shadowOffset: {
        width: 0,
        height: -3,
    },
    shadowColor: '#000000',
    elevation: 4
}

const styles = {
    container: {
        height: '8%',
        flexDirection: 'row',
        backgroundColor: '#F8F9F9',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    textNavbar: {
        textAlign: 'center',
        marginTop: '5%',
        fontSize: 11,
        color:'#000'
    },
    textNavbarActive: {
        color:'#F48225',
        textAlign: 'center',
        marginTop: '5%',
        fontSize: 11,
        fontWeight: 'bold'
    },
    icon: {
        width: '33%',
        height: '35%',
        alignSelf: 'center'
    }
}

export default Navbar;
