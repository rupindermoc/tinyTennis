import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity,Dimensions, TouchableHighlight, Text, TouchableWithoutFeedback, Platform, Keyboard, Image } from 'react-native';
import StatusBar from './statusBar';
import { Button, Card, ListItem } from 'react-native-elements';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
//import AppIntroSlider from 'react-native-app-intro-slider';
import icoMoonConfig from '../selection.json';
const Linericon = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DrawerActions } from 'react-navigation';
const fontReg = (Platform.OS === 'ios') ? 'Montserrat-Regular' : 'Montserrat-Regular';
const fontMed = (Platform.OS === 'ios') ? 'Montserrat-Medium' : 'Montserrat-Medium';
const fontSemiBold = (Platform.OS === 'ios') ? 'Montserrat-SemiBold' : 'Montserrat-SemiBold';
const fontBold = (Platform.OS === 'ios') ? 'Montserrat-Bold' : 'Montserrat-Bold';
export default class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showorderImg: true, 
            cardImg: 1,
        };
        this._scrollOpt = this._scrollOpt.bind(this);
    }
    _scrollOpt(card,img){
        //alert(device_height);
        this.setState({cardImg:img});
        let p = this.state[card];
        this.listView.scrollTo({y: p})
    }
    // renderImage() {
    //     var imgSource = this.state.showorderImg ? orderImg : order1Img;
    //     return (
    //         <Image source={imgSource} />
    //     );
    // }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ backgroundColor: '#fff', width: '100%', height: '100%' } } >
                <StatusBar backgroundColor="#282828" barStyle="light-content" />
                <View style={[styles.container, { marginBottom: wp('3%') }]}>
                    <View style={{ alignSelf: 'center', marginLeft: wp('3%'), }}>
                        <Linericon name="Group-102" size={wp('4%')} color="black" style={{ flex: 1, justifyContent: 'flex-start', alignSelf: 'center', }} onPress={() => this.props.navigation.toggleDrawer()} />
                    </View>
                    <View style={{ flex: 6, justifyContent: 'center' }}><Text style={styles.headerText}></Text></View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', height: hp('10%') }}>
                    <TouchableOpacity
                        style={{ alignItems: 'flex-start', paddingTop: 30, paddingLeft: 10, paddingRight: 10, marginLeft: wp('1%'), marginRight: wp('1%') }}
                        onPress={this.leftArrow}
                    >
                        {/* <Image source={require('./img/back1.png')} /> */}
                    </TouchableOpacity>
                    <ScrollView horizontal={true} style={{ alignSelf: 'center', height: hp('10%') }}  >
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center' }} >
                            <TouchableOpacity onPress={()=>this._scrollOpt('card1',1)}>
                                <View style={{
                                    width: wp('15%'), height: wp('15%'),
                                    alignSelf: 'center',
                                }}>
                                    <Image source={this.state.cardImg==1?require('./img/location.png'):require('./img/3.png')} style={{ flex: 1, height: undefined, width: undefined }} resizeMode="cover" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this._scrollOpt('card2',2)}>
                                <View style={{
                                    width: wp('15%'), height: wp('15%'),
                                    marginLeft: wp('2%'),
                                    alignSelf: 'center',
                                }}>
                                    <Image source={this.state.cardImg==2?require('./img/g2.png'):require('./img/1.png')} style={{ flex: 1, height: undefined, width: undefined }} resizeMode="cover" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this._scrollOpt('card3',3)}>
                                <View style={{
                                    width: wp('15%'), height: wp('15%'),
                                    marginLeft: wp('2%'),
                                    alignSelf: 'center',
                                }}>
                                    <Image source={this.state.cardImg==3?require('./img/family.png'):require('./img/2.png')} style={{ flex: 1, height: undefined, width: undefined }} resizeMode="cover" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this._scrollOpt('card4',4)}>
                                <View style={{
                                    width: wp('15%'), height: wp('15%'),
                                    marginLeft: wp('2%'),
                                    alignSelf: 'center',
                                }}>
                                    <Image source={this.state.cardImg==4?require('./img/h2.png'):require('./img/5.png')} style={{ flex: 1, height: undefined, width: undefined }} resizeMode="cover" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this._scrollOpt('card5',5)}>
                                <View style={{
                                    width: wp('15%'), height: wp('15%'),
                                    marginLeft: wp('2%'),
                                    alignSelf: 'center',
                                }}>
                                    <Image source={this.state.cardImg==5?require('./img/birthday.png'):require('./img/4.png')} style={{ flex: 1, height: undefined, width: undefined }} resizeMode="cover" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this._scrollOpt('card6',6)}>
                                <View style={{
                                    width: wp('15%'), height: wp('15%'),
                                    marginLeft: wp('2%'),
                                    alignSelf: 'center',
                                }}>
                                    <Image source={this.state.cardImg==6?require('./img/Team.png'):require('./img/6.png')} style={{ flex: 1, height: undefined, width: undefined }} resizeMode="cover" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this._scrollOpt('card7',7)}>
                                <View style={{
                                    width: wp('15%'), height: wp('15%'),
                                    marginLeft: wp('2%'),
                                    alignSelf: 'center',
                                }}>
                                    <Image source={this.state.cardImg==7?require('./img/camp.png'):require('./img/7.png')} style={{ flex: 1, height: undefined, width: undefined }} resizeMode="cover" />
                                </View>
                            </TouchableOpacity>
                            {/* <View><Image source={require('./img/back.png')} /></View> */}
                        </View>
                    </ScrollView>
                    <TouchableOpacity
                        style={{ alignItems: 'flex-end', paddingTop: 30, paddingLeft: 10, paddingRight: 10, marginLeft: wp('1%'), marginRight: wp('1%') }}
                        onPress={this.rightArrow}>
                        {/* <Image source={require('./img/back.png')} /> */}
                    </TouchableOpacity>
                </View>
                <ScrollView ref={ref => this.listView = ref} >
                    <View style={{ flexDirection: 'row', marginLeft: wp('4%'), marginTop: wp('3%') }}>
                        <Text style={styles.headerText}>Tiny Tennis</Text>
                    </View>
                    <View style={[{ marginLeft: wp('4%'), marginRight: wp('3%') }]}>
                        <Text style={styles.textP}>An affordable age appropriate tennis experience, inducing fun, cool music, sports science and technology.</Text>
                    </View>
                    <Card  
                        onLayout={(event) => this.setState({'card1':event.nativeEvent.layout.y})}
                        containerStyle={styles.cardBox}
                        imageStyle={{
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            overflow: 'hidden', // This does the magic
                        }}
                        image={require('./img/dropin1.png')} >
                        <Text style={styles.headerText1}>Tiny Drop In</Text>
                        <Text style={styles.textP}>
                            Drop In and join the fun. A tennis experience your little one will love.
                        </Text>
                        <Button
                            onPress={() => navigate('dropin')}
                            buttonStyle={[styles.buttonstyle,]}
                            title="Let's Play"
                            titleStyle={styles.buttonText}
                        />
                    </Card>
                    <Card
                        onLayout={(event) => this.setState({'card2':event.nativeEvent.layout.y})}
                        containerStyle={styles.cardBox}
                        imageStyle={{
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            overflow: 'hidden', // This does the magic
                        }}
                        image={require('./img/dropin3.png')} >
                        <Text style={styles.headerText1}>Tiny Group</Text>
                        <Text style={styles.textP}>
                            Better with friends or make new ones. Team work has never been more fun.
                        </Text>
                        <Button
                            onPress={() => navigate('tinygroup')}
                            buttonStyle={[styles.buttonstyle,]}
                            title="Let's Play"
                            titleStyle={styles.buttonText}
                        />
                    </Card>
                    <Card
                        onLayout={(event) => this.setState({'card3':event.nativeEvent.layout.y})}
                        containerStyle={styles.cardBox}
                        imageStyle={{
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            overflow: 'hidden', // This does the magic
                        }}
                        image={require('./img/dropin7.png')} >
                        <Text style={styles.headerText1}>Mommy & Me Classes</Text>
                        <Text style={styles.textP}>
                            Best Mommy and Me class ever. Quality time to the max.
                        </Text>
                        <Button
                            onPress={() => navigate('mommymeA')}
                            buttonStyle={[styles.buttonstyle,]}
                            title="Let's Play"
                            titleStyle={styles.buttonText}
                        />
                    </Card>
                    <Card
                        onLayout={(event) => this.setState({'card4':event.nativeEvent.layout.y})}
                        containerStyle={styles.cardBox}
                        imageStyle={{
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            overflow: 'hidden', // This does the magic
                        }}
                        image={require('./img/dropin5.png')} >
                        <Text style={styles.headerText1}>Home Court Advantage</Text>
                        <Text style={styles.textP}>
                            The ball is in your court and you have the advantage in the comfort of your home
                        </Text>
                        <Button
                            onPress={() => navigate('homeCourt')}
                            buttonStyle={[styles.buttonstyle,]}
                            title="Let's Play"
                            titleStyle={styles.buttonText}
                        />
                    </Card>
                    <Card
                        onLayout={(event) => this.setState({'card5':event.nativeEvent.layout.y})}
                        containerStyle={styles.cardBox}
                        imageStyle={{
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            overflow: 'hidden', // This does the magic
                        }}
                        image={require('./img/dropin6.png')} >
                        <Text style={styles.headerText1}>Birthday’s & Events</Text>
                        <Text style={styles.textP}>
                            Awesome & Affordable...A fun and energy filled Tiny Tennis Soirée.
                        </Text>
                        <Button
                            onPress={() => navigate('birthday')}
                            buttonStyle={[styles.buttonstyle,]}
                            title="Let's Play"
                            titleStyle={styles.buttonText}
                        />
                    </Card>
                    <Card
                        onLayout={(event) => this.setState({'card6':event.nativeEvent.layout.y})}
                        containerStyle={styles.cardBox}
                        imageStyle={{
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            overflow: 'hidden', // This does the magic
                        }}
                        image={require('./img/dropin4.png')} >
                        <Text style={styles.headerText1}>Tiny Tennis Team</Text>
                        <Text style={styles.textP}>
                            It’s all fun and games but the ultimate goal is to make the team!!!
                        </Text>
                        <Button
                            onPress={() => navigate('teamTennis')}
                            buttonStyle={[styles.buttonstyle,]}
                            title="Let's Play"
                            titleStyle={styles.buttonText}
                        />
                    </Card>
                    <Card
                        onLayout={(event) => this.setState({'card7':event.nativeEvent.layout.y})}
                        containerStyle={[styles.cardBox,{ marginBottom: hp('3%')}]}
                        imageStyle={{
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10,
                            overflow: 'hidden', // This does the magic
                        }}
                        image={require('./img/dropin2.png')} >
                        <Text style={styles.headerText1}>Tiny Summer Camp</Text>
                        <Text style={styles.textP}>
                            No heat exhaustion, No UV Rays and No Boredom, Even lunch is fun.
                        </Text>
                        <Button
                            onPress={() => navigate('summerA')}
                            buttonStyle={[styles.buttonstyle,]}
                            title="Let's Play"
                            titleStyle={styles.buttonText}
                        />
                    </Card>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: hp('2%'),
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    containerA:
    {
        ...Platform.select({
            ios: {
                width: wp('96%'), height: hp('52%'),
                alignSelf: 'center',
                flexDirection: 'column',
                overflow: 'hidden',
                marginTop: wp('3%'),
                borderRadius: wp('4%'),
                borderWidth: wp('0.5%'),
                borderColor: '#828282',
                shadowColor: '#828282',
                // shadowOpacity: .5,
                // shadowRadius: 5,
                shadowOffset: {
                    width: 0,
                    height: 1
                },
            },
            android: {
                width: wp('96%'), height: hp('52%'),
                alignSelf: 'center',
                flexDirection: 'column',
                // overflow:'hidden',
                marginTop: wp('3%'),
                borderRadius: wp('2%'),
                borderWidth: wp('0.5%'),
                borderColor: '#828282',
                shadowColor: '#828282',
                // shadowOpacity: .5,
                // shadowRadius: 5,
                shadowOffset: {
                    width: 0,
                    height: 1
                },
                //shadowRadius: 5,
                //shadowOpacity: 1.0
            }
        }),
    },
    headerText: {
        fontSize: wp('6%'),
        color: '#000000',
        fontFamily: fontSemiBold,
        alignSelf: 'center',
    },
    headerText1: {
        fontSize: wp('4%'),
        color: '#000000',
        fontFamily: fontBold,
    },
    textP: {
        color: '#000000',
        fontFamily: fontReg,
        fontSize: wp('3.5%'),
    },
    // buttonstyle: {
    //     marginTop: hp('2%'),
    //     width: wp('40%'),
    //     height: hp('6%'),
    //     backgroundColor: '#fff',
    //     borderRadius: 24,
    //     borderWidth: wp('0.5'),
    //     borderColor: '#000000',
    //     alignSelf: 'center'
    // },
    buttonstyle: {
        marginTop: hp('2%'),
        padding:1,
        width: wp('40%'),
        height: hp('6%'),
        backgroundColor: '#fff',
        borderRadius: 24,
        borderWidth: wp('0.5'),
        borderColor: '#000000',
        alignSelf: 'center'
    },
    buttonText: {
        color: '#000000',
        fontFamily: fontSemiBold,
    },
    cardBox: {
        borderRadius: 10,
    }
})