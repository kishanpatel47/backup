import { Image, LogBox, StatusBar, View, PermissionsAndroid } from 'react-native'

import React, { Component } from 'react'
import Singleton from '../helper/Singleton';

export default class Splashscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    Singleton.getInstance().requestLocationPermission();
    LogBox.ignoreAllLogs(true)
    setTimeout(() => {
      this.props.navigation.navigate('SelectType')
    }, 2000)
  }

  //  getOneTimeLocation = () => {
  //    alert('Getting Location ...');
  //     Geolocation.getCurrentPosition(
  //       //Will give you the current location
  //       (position) => {
  //         // setLocationStatus('You are Here');

  //         //getting the Longitude from the location json
  //         const currentLongitude = 
  //           JSON.stringify(position.coords.longitude);

  //         //getting the Latitude from the location json
  //         const currentLatitude = 
  //           JSON.stringify(position.coords.latitude);
  //        console.log(currentLatitude)
  //        console.log(currentLongitude)
  //         //Setting Longitude state
  //       },
  //       (error) => {
  //         console.log(error.message);
  //       },
  //       {
  //         enableHighAccuracy: false,
  //         timeout: 30000,
  //         maximumAge: 1000
  //       },
  //     );
  //   };
  //   subscribeLocationLocation = () => {
  //     watchID = Geolocation.watchPosition(
  //       (position) => {
  //         //Will give you the location on location change

  //         // setLocationStatus('You are Here');
  //         console.log(position);

  //         //getting the Longitude from the location json        
  //         const currentLongitude =
  //           JSON.stringify(position.coords.longitude);

  //         //getting the Latitude from the location json
  //         const currentLatitude = 
  //           JSON.stringify(position.coords.latitude);
  //           console.log(currentLongitude);
  //           console.log(currentLatitude);

  //         //Setting Longitude state
  //         // setCurrentLongitude(currentLongitude);

  //         // //Setting Latitude state
  //         // setCurrentLatitude(currentLatitude);
  //       },
  //       (error) => {
  //         // setLocationStatus(error.message);
  //     console.log(error.message) 
  //     },
  //       {
  //         enableHighAccuracy: false,
  //         maximumAge: 1000
  //       },
  //     );
  //   };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <StatusBar backgroundColor={AppTheme.APPCOLOR.WHITE} barStyle='default'/> */}
        <Image source={require('../assets/images/aushadhi.png')} />


      </View>
    )
  }
}