import { Dimensions, Image, Text, TextInput, TouchableOpacity, View,KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { Component } from 'react'
import AppTheme from '../helper/AppTheme'

export default class Aushadhi_login extends Component {

    Email_PassWord = () => {
        return (
            <View style={{ marginTop: 10 }}>
                <View style={{ borderRadius: 30, flexDirection: 'row', display: 'flex', marginTop: 5, alignContent: 'center', alignItems: 'center', width: Dimensions.get('screen').width / 1.2, backgroundColor: AppTheme.APPCOLOR.GRAY, alignSelf: 'center', }}>
                    <Image style={{  tintColor: AppTheme.APPCOLOR.WHITE, height: 24, width: 24, left: 7 }} source={require('../assets/images/email.png')} />
                    <TextInput placeholder='Enter the  Email' placeholderTextColor={AppTheme.APPCOLOR.WHITE} style={{ color: AppTheme.APPCOLOR.WHITE, flex: 1, alignSelf: 'center', alignItems: 'center', alignContent: 'center', marginLeft: 10 }} />
                </View>
                <View style={{ borderRadius: 30, flexDirection: 'row', display: 'flex', marginTop: 5, alignContent: 'center', alignItems: 'center', width: Dimensions.get('screen').width / 1.2, backgroundColor: AppTheme.APPCOLOR.GRAY, alignSelf: 'center', }}>
                    <Image style={{ tintColor: AppTheme.APPCOLOR.WHITE, height: 24, width: 24, left: 7 }} source={require('../assets/images/lock.png')} />
                    <TextInput secureTextEntry={true} placeholder='Enter the  Password' placeholderTextColor={AppTheme.APPCOLOR.WHITE} style={{ color: AppTheme.APPCOLOR.WHITE, flex: 1, alignSelf: 'center', alignItems: 'center', alignContent: 'center', marginLeft: 10 }} />
                </View>
                <TouchableOpacity>
                    <View style={{ alignSelf: 'flex-end', margin: 5 }}>
                        <Text style={{ color: AppTheme.APPCOLOR.BLACK }} >
                            Forget Password ?
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 10 }} onPress={()=>this.props.navigation.navigate('Aushadhi_Dashboard')}>
                    <View style={{ backgroundColor: AppTheme.APPCOLOR.Wedgewood, alignItems: 'center', padding: 12, borderRadius: 20 }}>

                        <Text style={{ color: AppTheme.APPCOLOR.WHITE }}>Login now</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
    render() {
        return (
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}>
 <View style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ resizeMode: 'center', height: 120, width: 120 }} source={require('../assets/images/selectedtype.png')} />
                    {/* Aushadhi email and  password */}
                    {this.Email_PassWord()}


                </View>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Aushadhi_Register')}>
                    <View style={{ bottom: 5, position: 'absolute', alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={{ color: AppTheme.APPCOLOR.BLACK }}>Not a Register in here ?<Text style={{ color: AppTheme.APPCOLOR.BLUE }}> Regiser now</Text></Text>


                    </View>
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
            
        )
    }
}