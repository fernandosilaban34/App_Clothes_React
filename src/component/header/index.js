import React from 'react';
import { Text, TextInput, View, Image } from 'react-native';

function Header({ navigation }) {
    const uri = '../../assets/icon/search.png'
    const uriMail = '../../assets/icon/mail.png'
    const uriNotif = '../../assets/icon/notif.png'
    const uriTrolley = '../../assets/icon/trolley.png'
    return (
        <View style={styles.container}>
            <View style={styles.searchBarContainer}>
                <View style={styles.searchBar}>
                    <Image source={require(uri)} style={styles.imageSearch} />
                    <TextInput style={styles.textInput} placeholder='Cari sesuatu disini..' />
                </View>
            </View>
            <View style={styles.imageContainer}>
                {/* <View style={styles.borderImage} /> */}
                <Image source={require(uriMail)} style={styles.ImageIcon} />
            </View>
            <View style={styles.imageContainer}>
                {/* <View style={styles.borderImage} /> */}
                <Image source={require(uriNotif)} style={styles.ImageIcon} />
            </View>
            <View style={styles.imageContainer}>
                {/* <View style={styles.borderImage} /> */}
                <Image source={require(uriTrolley)} style={styles.ImageIconTrolley} />
            </View>
        </View>
    )
}

const styles = {
    container: {
        overflow: 'hidden',
        paddingBottom: '1%',
        flexDirection: 'row',
        backgroundColor: '#F48225',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 2,
    },
    searchBarContainer: {
        width: 10,
        height: 50,
        flex: 4,
        justifyContent: 'center',
        alignItem: 'center',

    },
    searchBar: {
        backgroundColor: '#FFFFFF',
        height: 30, width: '80%',
        alignSelf: 'center',
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        justifyContent: 'center',
        alignItem: 'center',
        flexDirection: 'row'
    },
    imageSearch: {
        width: 20,
        height: 20,
        marginLeft: 5,
        alignSelf: 'center'
    },
    textInput: {
        flex: 1, alignSelf: 'center',
        fontSize: 12,
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 2,
        color: '#474747'
    },
    ImageIcon: {
        width: '60%',
        height: '60%',
        alignSelf: 'center'
    },
    imageContainer: {
        alignItem: 'center',
        justifyContent: 'center',
        width: 10,
        height: 50,
        flex: 1
    },
    ImageIconTrolley: {
        width: '70%',
        height: '90%',
        marginTop: 3,
        alignSelf: 'center'
    },
    borderImage : {
        backgroundColor: '#FF7900', 
        borderRadius: 50, 
        height: 40, 
        width: 40, 
        position: 'absolute', 
        alignSelf: 'center'
    }
}

export default Header;
