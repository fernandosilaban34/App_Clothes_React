import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
// import Navbar from '../../component/navbar';
import { Header, Navbar } from '../../component';

const Feed = (props) => {
  var error = '../../assets/other/error.gif';
  return (
    <View style={{flex:1, justifyContent:'flex-start', alignItems:'center', backgroundColor:'#FFFFFF'}}>
      <Header/>
      <Image style={{width:280, height:280, marginTop:'30%'}} source={require(error)}/>
      <Text style={{justifyContent:'center', fontSize:20, fontWeight:'bold'}}>Opps, Sedang Dalam Perbaikan</Text>
      <View style={{flex:1}}/>
        <Navbar navigation={props.navigation}/>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({});

