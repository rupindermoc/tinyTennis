import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity,Platform, Image, Keyboard } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Button } from 'react-native-elements';
import StatusBar from './statusBar';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../selection.json';
const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');
const fontReg = (Platform.OS === 'ios') ? 'Montserrat-Regular' : 'Montserrat-Regular';
const fontMed = (Platform.OS === 'ios') ? 'Montserrat-Medium' : 'Montserrat-Medium';
const fontSemiBold = (Platform.OS === 'ios') ? 'Montserrat-SemiBold' : 'Montserrat-SemiBold';
const fontBold = (Platform.OS === 'ios') ? 'Montserrat-Bold' : 'Montserrat-Bold';
export default class summerA extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={{ backgroundColor: '#fff', width: '100%', height: '100%' }}>
                    <StatusBar backgroundColor="#282828" barStyle="light-content" />
                    <View style={styles.container}>
                    
                        <View style={{ width: wp('100%'), height: hp('23 %'), backgroundcolor: '' }}>
                                <Image source={require('./img/dropin2.png')} style={{ flex: 1, height: undefined, width: undefined, }} resizeMode="cover" />
                        </View>
                        <Linericon name="Group-102" size={wp('6%')} color='#000000' style={{ position: 'absolute', top: 0, left: 0, margin: wp('3%') }} onPress={()=> navigate('home')}/>
                    </View>
                    <View style={{ flexDirection: 'row', margin: wp('4%') }}>
                        <Text style={styles.headerText}>Summer camp</Text>
                    </View>
                    <View style={[{ marginLeft: wp('4%'), marginRight: wp('3%') }]}>
                        <Text style={styles.textP}>An indoor Tiny Tennis experience. No heat exhaustion, No UV Rays and No Boredom, Even lunch is fun. Tennis, Magic, Arts, music and much more.</Text>
                    </View>
                    <View style={{ margin: wp('4%') }}>
                        <Text style={styles.headerText}>Let's Play</Text>
                    </View>
                    <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-around' }}>
                        <View style={[styles.containerC, { padding: wp('2%') }]}>
                            <Text style={[styles.headerText, { alignSelf: 'center', justifyContent: 'flex-start', flex: 1,fontSize:wp('4%'),fontFamily:fontReg }]}>Reservation Fee</Text>
                            <Text style={[styles.textP, { justifyContent: 'flex-end',fontSize:wp('4%') }]}>$ 25</Text>
                        </View>
                    </TouchableOpacity>
                   <View style={{alignSelf:'center'}}>
                   <Text style={[styles.textP, {fontSize:wp('4%') }]}>Fully Refundable</Text>
                   </View>

                   
                    <View style={{ alignSelf: 'center' }}>
                        <Button
                            buttonStyle={[styles.buttonstyle, { backgroundColor: '#1AB31A' }]}
                            title='NEXT'
                            color='#fff'
                            titleStyle={styles.buttonText}
                            onPress={()=> navigate('summerB')}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    containerB: {
        marginLeft: wp('2%'),
        width: wp('30%'),
        height:hp('4%'),
        justifyContent:'center',
        backgroundColor: '#2F610D',
        borderRadius: wp('10%')
    },
    headerText: {
        fontSize: wp('5%'),
        fontFamily: fontBold,
        color: 'black',
    },
    containerC:
    {
        width: wp('95%'),
        height: hp('6%'),
        borderWidth: wp('0.5%'),
        flexDirection: 'row',
        borderColor: '#000000',
        justifyContent: 'space-around',
        borderRadius: wp('3%'),
        margin: wp('2%')
    },
    containerCA:
    {
        width: wp('95%'),
        height: hp('6%'),
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderRadius: wp('3%'),
        margin: wp('2%')
    },
    textP: {
        color: '#000000',
        fontFamily: fontReg,
        fontSize: wp('3.5%'),
        alignSelf: 'center',
        lineHeight:hp('2.5%')
    },
    buttonstyle: {
        padding:1,
        marginTop: hp('3%'),
        width: wp('50%'),
        height: hp('6%'),
        backgroundColor: '#fff',
        borderRadius: 24,
    },
    buttonText: {
        color: '#fff',
        fontFamily: fontSemiBold
    },
    containerDa:{ 
        width: wp('8%'), 
        height: wp('8%'), 
        borderRadius: wp('4%'), 
        borderWidth: wp('0.2%'),
        marginLeft:wp('2%'),
        marginRight:wp('2%'),
    },
})