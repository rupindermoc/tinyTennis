import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Image, TouchableOpacity, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import StatusBar from './statusBar';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../selection.json';
import { Button } from 'react-native-elements';
const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');
const fontReg = (Platform.OS === 'ios') ? 'Montserrat-Regular' : 'Montserrat-Regular';
const fontMed = (Platform.OS === 'ios') ? 'Montserrat-Medium' : 'Montserrat-Medium';
const fontSemiBold = (Platform.OS === 'ios') ? 'Montserrat-SemiBold' : 'Montserrat-SemiBold';
const fontBold = (Platform.OS === 'ios') ? 'Montserrat-Bold' : 'Montserrat-Bold';
export default class homeCourtA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
        };
    }
    componentDidMount() {
        var that = this;
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        that.setState({
            date: date + '/' + month + '/' + year,
        });
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={{ backgroundColor: '#fff', width: '100%', height: '100%', flex: 1 }}>
                    <StatusBar backgroundColor="#282828" barStyle="light-content" />
                    <View style={styles.container}>
                        <TouchableOpacity style={{ alignSelf: 'center', marginLeft: wp('3%'), }} onPress={() => navigate('homeCourt')}><Linericon name="left-arrow-1" size={wp('5%')} color='#000000' /></TouchableOpacity>
                        <View style={{ flex: 6, justifyContent: 'center' }}><Text style={[styles.headerText, { fontSize: wp('5'), fontFamily: fontMed }]}>Tiny Form</Text></View>
                    </View>
                    <View style={[{ marginLeft: wp('4%'), marginRight: wp('3%'), marginTop: wp('2%') }]}>
                        <Text style={[styles.textP, { lineHeight: hp('3%') }]}>Please fill out this Tiny form. We will call you within 24 hours to schedule your lesson via your home.</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-around', marginTop: wp('6%') }}>
                        <View style={[styles.containerC, { padding: wp('2%') }]}>
                            <View style={{ width: wp('20%'), justifyContent: 'space-around' }}>
                                <Text style={[styles.textcontainerC, { marginLeft: wp('2%') }]}> Name  </Text>
                            </View>
                            <View style={{ width: wp('80%'), justifyContent: 'space-around' }}>
                                <Text style={[styles.textcontainerC, { alignItems: 'flex-start' }]}> jason Sthatham</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-around', marginTop: wp('3%') }}>
                        <View style={[styles.containerC, { padding: wp('2%') }]}>
                            <View style={{ width: wp('20%'), justifyContent: 'space-around' }}>
                                <Text style={[styles.textcontainerC, { marginLeft: wp('2%') }]}> Phone  </Text>
                            </View>
                            <View style={{ width: wp('80%'), justifyContent: 'space-around' }}>
                                <Text style={[styles.textcontainerC, { alignItems: 'flex-start' }]}>  +25 68 32 25 21</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: wp('3%') }}>
                        <View style={[styles.containerC, { padding: wp('1%') }]}>
                            <View style={{ width: wp('20%'), justifyContent: 'space-around' }}>
                                <Text style={[styles.textcontainerC, { marginLeft: wp('2%') }]}> Email  </Text>
                            </View>
                            <View style={{ width: wp('80%'), justifyContent: 'space-around' }}>
                                <Text style={[styles.textcontainerC, { alignItems: 'flex-start' }]}> Jason@gmail.com</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: wp('3%') }}>
                        <View style={[styles.containerC, { padding: wp('1%') }]}>
                            <View style={{ width: wp('20%'), justifyContent: 'space-around' }}>
                                <Text style={[styles.textcontainerC, { marginLeft: wp('2%') }]}> Zip  </Text>
                            </View>
                            <View style={{ width: wp('80%'), justifyContent: 'space-around' }}>
                                <Text style={[styles.textcontainerC, { alignItems: 'flex-start' }]}> 32A2235</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <Button
                            buttonStyle={[styles.buttonstyle, { backgroundColor: '#1AB31A' }]}
                            title='SUBMIT'
                            color='#fff'
                            titleStyle={styles.buttonText}
                            onPress={() => navigate('homeCourtB')}
                        />
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: hp('1%'),
        flexDirection: 'row',
    },
    headerText: {
        fontSize: wp('5%'),
        color: '#000000',
        fontFamily: fontBold,
        alignSelf: 'center',
    },
    containerB: {
        width: wp('40%'),
        alignSelf: 'center',
        height: wp('10%'),
        borderRadius: wp('10%'),
        borderWidth: wp('0.5%'),
        marginTop: wp('6%'),
        backgroundColor: '#000000',
        flexDirection: 'row',
        marginLeft: wp('2%')
    },

    textP: {
        fontSize: wp('4%'),
        fontFamily: fontReg
    },
    containerC:
    {
        width: wp('95%'),
        height: hp('6%'),
        borderWidth: wp('0.2%'),
        flexDirection: 'row',
        borderColor: '#000000',
        // justifyContent: 'space-around',
        borderRadius: wp('3%'),
        margin: wp('2%')
    },
    textcontainerC: {
        fontSize: wp('4%'),
        color: '#000000',
        fontFamily: fontMed,
        //alignSelf: 'center',
        marginLeft: wp('3%')
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
})
