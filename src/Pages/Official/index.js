import { StyleSheet, Text, View, ScrollView, ImageBackground } from 'react-native';
import React from 'react';
// import Navbar from '../../component/navbar';
import { Header, Navbar, MenuBar, Cover, ProdukBanner, CardProduk } from '../../component';

const Official = (props) => {

  var icon1 = '../../assets/icon/donation.png'
  var icon2 = '../../assets/icon/delivery.png'
  var icon3 = '../../assets/icon/old-fashioned.png'

  var banner4 = '../../assets/banner/banner3_s.jpg'
  var banner2 = '../../assets/banner/banner2.jpg'

  var brand1 = '../../assets/brand/adidas.jpg'
  var brand2 = '../../assets/brand/nike.png'

  var produk3 = '../../assets/produk/3.jpg'
  var produk4 = '../../assets/produk/4.jpg'
  var produk5 = '../../assets/produk/5.jpg'
  var produk7 = '../../assets/produk/7.jpg'

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 13, marginLeft: 10, paddingTop: 20, fontWeight: 'bold' }}>Kategori</Text>
        <Text style={{ fontSize: 12, paddingTop: 10, fontWeight: 'bold', alignSelf: 'flex-end', color: '#F48225', paddingRight: 10 }} onPress={() => alert('belom jadi')}>Lihat Semua</Text>
      </View>
      <View style={{ marginTop: '5%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          <View onStartShouldSetResponder={() => alert('bisa nih')} >
            <MenuBar text='Official Store' icon={require(icon1)} />
          </View>
          <MenuBar text='Lihat Semua' icon={require(icon2)} />
          <MenuBar text='Top-Up' icon={require(icon3)} />
          <MenuBar text='Fashion Pria' icon={require(icon1)} />
          <MenuBar text='Fashion Wanita' icon={require(icon2)} />
          <MenuBar text='Keuangan' icon={require(icon3)} />
        </ScrollView>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
        <View style={{ height: 150, paddingTop: 10, marginBottom: 20 }}>
          <Cover img={require(banner4)} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
          <Text style={{ fontSize: 13, marginLeft: 10, paddingTop: 20, fontWeight: 'bold' }}>Brand Pilihan</Text>
          <Text style={{ fontSize: 12, paddingTop: 10, fontWeight: 'bold', alignSelf: 'flex-end', color: '#F48225', paddingRight: 10 }} onPress={() => alert('belom jadi')}>Lihat Semua</Text>
        </View>
        <ImageBackground source={require(brand1)} blurRadius={3}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <View style={{ height: 200, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
              <ProdukBanner img={require(produk4)} />
              <ProdukBanner img={require(produk5)} />
              <ProdukBanner img={require(produk7)} />
              <ProdukBanner img={require(produk3)} />
            </View>
          </ScrollView>
        </ImageBackground>
        <View style={{ height: 150, marginTop: 30, marginBottom: 5 }}>
          <Cover img={require(banner2)} />
        </View>
        <View style={{ marginTop: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <Text style={{ fontSize: 13, marginLeft: 10, paddingTop: 20, fontWeight: 'bold' }}>Rekomendasi Pilihan</Text>
            <Text style={{ fontSize: 12, paddingTop: 10, fontWeight: 'bold', alignSelf: 'flex-end', color: '#F48225', paddingRight: 10 }} onPress={() => alert('belom jadi')}>Lihat Semua</Text>
          </View>
          <View style={{ alignContent:"stretch", position:'relative'}}>
            <CardProduk/>
            <CardProduk/>
          </View>
        </View>
      </ScrollView>
      <View style={{ flex: 1 }} />
      <Navbar navigation={props.navigation} />
    </View>
  );
};

export default Official;

const styles = StyleSheet.create({});

