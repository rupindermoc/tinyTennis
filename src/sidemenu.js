import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, TouchableOpacity, AsyncStorage,Text, StyleSheet, View, Image, Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const fontReg = (Platform.OS === 'ios') ? 'Montserrat-Regular' : 'Montserrat-Regular';
const fontMed = (Platform.OS === 'ios') ? 'Montserrat-Medium' : 'Montserrat-Medium';
const fontSemiBold = (Platform.OS === 'ios') ? 'Montserrat-SemiBold' : 'Montserrat-SemiBold';
const fontBold = (Platform.OS === 'ios') ? 'Montserrat-Bold' : 'Montserrat-Bold';
class SideMenu extends Component {
  constructor(props){
    super(props);
  }
  _logout(){
    AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flexDirection: 'row', flex: 1 ,}}>
        <View style={[styles.container, { flex:2 }]}>
          <Text style={styles.headerText}>MENU</Text>
          <View style={{ flexDirection: 'column', margin: wp('5%') }}>
            <TouchableOpacity style={styles.containerA} onPress={() => navigate('tinyClass')}  >
                
              <View style={[styles.imgContainer, { width: wp(4.5), height: wp('6.3') }]}>
              <Image source={require('./img/tinyClass.png')} style={styles.imgStyle} resizeMode="cover" />
              </View>
              <Text style={styles.textStyle}>MY TINY CLASSES</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerA} onPress={() => navigate('reward')} >
              <View style={styles.imgContainer}>
                <Image source={require('./img/medal.png')} style={styles.imgStyle} resizeMode="cover" />
              </View>
              <Text style={styles.textStyle}>REWARDS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerA} onPress={() => navigate('referFrnd')}>
              <View style={[styles.imgContainer, { width: wp(4.5), height: wp('5') }]}>
                <Image source={require('./img/reward.png')} style={styles.imgStyle} resizeMode="cover" />
              </View>
              <Text style={styles.textStyle}>REFER A FRIEND</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerA} onPress={() => navigate('livestream')} >
              <View style={[styles.imgContainer, { height: wp('5') }]}>
                <Image source={require('./img/live.png')} style={styles.imgStyle} resizeMode="cover" />
              </View>
              <Text style={styles.textStyle}>LIVE STREAM</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerA} onPress={() => navigate('playlist')}>
              <View style={styles.imgContainer}>
                <Image source={require('./img/tinytennis.png')} style={styles.imgStyle} resizeMode="cover" />
              </View>
              <Text style={styles.textStyle}>TINY TENNIS PLAYLIST</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerA} onPress={() => navigate('giftcard')}  >
              <View style={[styles.imgContainer,{height:wp('4%')}]}>
                <Image source={require('./img/gift-card2.png')} style={styles.imgStyle} resizeMode="cover" />
              </View>
              <Text style={styles.textStyle}>GIFT CARD</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerA}>
              <View style={styles.imgContainer}>
                <Image source={require('./img/phone-book.png')} style={styles.imgStyle} resizeMode="cover" />
              </View>
              <Text style={styles.textStyle}>CONTACT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerA} onPress={() => navigate('privacypolicy')} >
              <View style={[styles.imgContainer, { height: wp('5.5') }]}>
                <Image source={require('./img/house.png')} style={styles.imgStyle} resizeMode="cover" />
              </View>
              <Text style={styles.textStyle}>PRIVACY POLICY</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerA} onPress={() => navigate('termC')}  >
              <View style={styles.imgContainer}>
                <Image source={require('./img/term.png')} style={styles.imgStyle} resizeMode="cover" />
              </View>
              <Text style={styles.textStyle}>TERM & CONDITIONS</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: wp('8%') }}>
            <TouchableOpacity style={[styles.containerA, { marginLeft: wp('8%') }]} onPress={()=>this._logout()}>
              <View style={[styles.imgContainer, { width: wp('4.5%'), height: wp('3.5') }]}>
                <Image source={require('./img/logout.png')} style={styles.imgStyle} resizeMode="cover" />
              </View>
              <Text style={styles.textStyle}>LOGOUT</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{  flex: 1 }}>
          <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.navigation.closeDrawer()}>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#1AB31A'
  },
  headerText: {
    alignSelf: 'center', marginTop: wp('3%'),
    fontSize: wp('6%'),
    color: '#fff',
    fontFamily: fontSemiBold,
  },
  containerA: {
    flexDirection: 'row',
    margin: wp('3%')
  },
  imgContainer: {
    width: wp('4.8%'), height: wp('6.2%'),
    marginRight: wp('2%'),
    alignSelf: 'center',
  },
  imgStyle: {
    flex: 1, height: undefined,
    width: undefined
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontFamily: fontSemiBold,
    fontSize: wp('4%')
  }
})