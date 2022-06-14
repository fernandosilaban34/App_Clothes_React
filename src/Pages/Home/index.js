import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import { Header, Navbar, MenuBar, Banner, Cover, ProdukBanner } from '../../component';

const Home = (props) => {
  var banner1 = '../../assets/banner/banner1.jpg'
  var banner2 = '../../assets/banner/banner2.jpg'
  var banner3 = '../../assets/banner/banner3.png'
  var banner4 = '../../assets/banner/banner3_s.jpg'
  var coupon = '../../assets/banner/coupon.jpg'

  var icon1 = '../../assets/icon/donation.png'
  var icon2 = '../../assets/icon/delivery.png'
  var icon3 = '../../assets/icon/old-fashioned.png'

  var produk1 = '../../assets/produk/1.jpg'
  var produk2 = '../../assets/produk/2.jpg'
  var produk3 = '../../assets/produk/6.jpg'

  return (
    <View style={styles.menuContainer}>
      <Header />
      <ScrollView>
        <View style={{ backgroundColor: '#F48225', height: 700, width: '140%', top: -640, left: -140, position: 'absolute', borderRadius: 120 }} />
        <View style={{ marginTop: '5%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <View onStartShouldSetResponder={() => props.navigation.navigate('Official')} >
              <MenuBar text='Official Store' icon={require(icon1)} />
            </View>
            <MenuBar text='Lihat Semua' icon={require(icon2)} />
            <MenuBar text='Top-Up' icon={require(icon3)} />
            <MenuBar text='Fashion Pria' icon={require(icon1)} />
            <MenuBar text='Fashion Wanita' icon={require(icon2)} />
            <MenuBar text='Keuangan' icon={require(icon3)} />
          </ScrollView>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: '2%' }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <Banner img={require(banner2)} />
            <Banner img={require(banner1)} />
            <Banner img={require(banner3)} />
          </ScrollView>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 13, marginLeft: 10, paddingTop: 20, fontWeight: 'bold' }}>Pilih voucher traktiranmu!</Text>
          <Text style={{ fontSize: 12, paddingTop: 10, fontWeight: 'bold', alignSelf: 'flex-end', color: '#F48225', paddingRight: 10 }}>Lihat Semua</Text>
        </View>
        <View style={{ height: 150, paddingTop: 5 }}>
          <Cover img={require(coupon)} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10 }}>
          <Text style={{ fontSize: 13, marginLeft: 10, fontWeight: 'bold' }}>Jangan Terlewat</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
          <View style={{ backgroundColor: '#F2D316', height: 200, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <ProdukBanner img={require(produk1)} />
            <ProdukBanner img={require(produk2)} />
            <ProdukBanner img={require(produk3)} />
            <ProdukBanner img={require(produk1)} />
          </View>
        </ScrollView>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 13, marginLeft: 10, paddingTop: 20, fontWeight: 'bold', color: '#73CA71' }}>Penawaran Terbatas</Text>
        </View>
        <View style={{ height: 150, paddingTop: 10, marginBottom: 20 }}>
          <Cover img={require(banner4)} />
        </View>
      </ScrollView>
      <View style={{ flex: 1 }} />
      <Navbar navigation={props.navigation} />
      {/* Spesial */}
    </View>

  );
};



const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  banner: {
    marginHorizontal: 10,
    paddingTop: '2%',
    height: 150,
    width: 300
  },
  textVoucher: {

  }
})

export default Home;

