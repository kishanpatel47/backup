// import { Image, LogBox, StatusBar, View ,PermissionsAndroid} from 'react-native'

// import React, { Component } from 'react'
// import Singleton from '../helper/Singleton';
// import Geolocation from '@react-native-community/geolocation';

// export default class demo extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//         }
//     }
    
//     componentDidMount() {
  
//         const requestLocationPermission = async () => {
//             if (Platform.OS === 'ios') {
//               getOneTimeLocation();
//               subscribeLocationLocation();
//             } else {
//               try {
//                 const granted = await PermissionsAndroid.request(
//                   PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//                   {
//                     title: 'Location Access Required',
//                     message: 'This App needs to Access your location',
//                   },
//                 );
//                 if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//                   //To Check, If Permission is granted
//                  this.getOneTimeLocation();
                 
//                 // this. subscribeLocationLocation();
//                 } else {
//                   alert('Permission Denied');
//                 }
//               } catch (err) {
//                 console.warn(err);
//               }
//             }
//           };
//           requestLocationPermission();
//           return () => {
//             Geolocation.clearWatch(watchID);
//           };
//           }

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
// //   subscribeLocationLocation = () => {
// //     watchID = Geolocation.watchPosition(
// //       (position) => {
// //         //Will give you the location on location change
        
// //         // setLocationStatus('You are Here');
// //         console.log(position);
 
// //         //getting the Longitude from the location json        
// //         const currentLongitude =
// //           JSON.stringify(position.coords.longitude);
 
// //         //getting the Latitude from the location json
// //         const currentLatitude = 
// //           JSON.stringify(position.coords.latitude);
// //           console.log(currentLongitude);
// //           console.log(currentLatitude);
 
// //         //Setting Longitude state
// //         // setCurrentLongitude(currentLongitude);
 
// //         // //Setting Latitude state
// //         // setCurrentLatitude(currentLatitude);
// //       },
// //       (error) => {
// //         // setLocationStatus(error.message);
// //     console.log(error.message) 
// //     },
// //       {
// //         enableHighAccuracy: false,
// //         maximumAge: 1000
// //       },
// //     );
// //   };
//     render() {
//         return (
//             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                 {/* <StatusBar backgroundColor={AppTheme.APPCOLOR.WHITE} barStyle='default'/> */}
//                 <Image source={require('../assets/images/aushadhi.png')} />


//             </View>
//         )
//     }
// }
// import { Platform, Text, View } from 'react-native'
// import React, { Component } from 'react'
// import RNAndroidLocationEnabler from 'react-native-android-location-enabler'

// export default class App extends Component {
// componentDidMount(){
//   if(Platform.OS =='android')
//   RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
//     interval:1000,
//     fastInterval:1000
//   }).then((data)=>{
// console.log(data)
//   }).catch((err)=>{
//     console.log(err)
//   })
//   else
//   RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
//     interval:1000,
//     fastInterval:1000
//   }).then((data)=>{
// console.log(data)
//   }).catch((err)=>{
//     console.log(err)
//   })
// }
//   render() {
//     return (
//       <View>
//         <Text>App</Text>
//       </View>
//     )
//   }
// }
// // import React, { Component } from 'react';
// // import {
// //     AppRegistry,
// //     Text,
// //     View,
// //     BackHandler,
// //     DeviceEventEmitter
// // } from 'react-native';

// // import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";

// //  export default class SampleApp extends Component {
// //     state = {
// //         initialPosition: 'unknown',
// //     };

// //     componentDidMount() {
// //         LocationServicesDialogBox.checkLocationServicesIsEnabled({
// //             message: "<h2>Use Location ?</h2>This app wants to change your device settings:<br/><br/>Use GPS, Wi-Fi, and cell network for location<br/><br/><a href='#'>Learn more</a>",
// //             ok: "YES",
// //             cancel: "NO",
// //             enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => GPS OR NETWORK PROVIDER
// //             showDialog: true, // false => Opens the Location access page directly
// //             openLocationServices: true, // false => Directly catch method is called if location services are turned off
// //             preventOutSideTouch: false, //true => To prevent the location services popup from closing when it is clicked outside
// //             preventBackClick: false, //true => To prevent the location services popup from closing when it is clicked back button
// //             providerListener: true // true ==> Trigger "locationProviderStatusChange" listener when the location state changes
// //         }).then(function(success) {
// //             // success => {alreadyEnabled: true, enabled: true, status: "enabled"} 
// //                 navigator.geolocation.getCurrentPosition((position) => {
// //                     let initialPosition = JSON.stringify(position);
// //                     this.setState({ initialPosition });
// //                 }, error => console.log(error), { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 });
// //             }.bind(this)
// //         ).catch((error) => {
// //             console.log(error.message);
// //         });

// //         DeviceEventEmitter.addListener('locationProviderStatusChange', function(status) { // only trigger when "providerListener" is enabled
// //             console.log(status); //  status => {enabled: false, status: "disabled"} or {enabled: true, status: "enabled"}
// //         });
// //     }

// //     componentWillUnmount() {
// //         // used only when "providerListener" is enabled
// //         LocationServicesDialogBox.stopListener(); // Stop the "locationProviderStatusChange" listener.
// //     } 

// //     render() {
// //         return (
// //             <View>
// //                 <Text>
// //                     Geolocation: {this.state.initialPosition}
// //                 </Text>
// //             </View>
// //         );
// //     }
// // }
// React Native Geolocation
// https://aboutreact.com/react-native-geolocation/

// import React in our code
// import React, {useState, useEffect} from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   PermissionsAndroid,
//   Platform,
//   Button,
// } from 'react-native';

// //import all the components we are going to use.
// import Geolocation from '@react-native-community/geolocation';

// const App = () => {
//   const [
//     currentLongitude,
//     setCurrentLongitude
//   ] = useState('...');
//   const [
//     currentLatitude,
//     setCurrentLatitude
//   ] = useState('...');
//   const [
//     locationStatus,
//     setLocationStatus
//   ] = useState('');

//   useEffect(() => {
//     const requestLocationPermission = async () => {
//       if (Platform.OS === 'ios') {



//         getOneTimeLocation();
//         subscribeLocationLocation();
//       } else {
//         try {
//           const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//             {
//               title: 'Location Access Required',
//               message: 'This App needs to Access your location',
//             },
//           );
//           if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             //To Check, If Permission is granted
//             getOneTimeLocation();
//             subscribeLocationLocation();
//           } else {
//             setLocationStatus('Permission Denied');
//           }
//         } catch (err) {
//           console.warn(err);
//         }
//       }
//     };
//     requestLocationPermission();
//     return () => {
//       Geolocation.clearWatch(watchID);
//     };
//   }, []);

//   const getOneTimeLocation = () => {
//     setLocationStatus('Getting Location ...');
//     Geolocation.getCurrentPosition(
//       //Will give you the current location
//       (position) => {
//         setLocationStatus('You are Here');

//         //getting the Longitude from the location json
//         const currentLongitude = 
//           JSON.stringify(position.coords.longitude);

//         //getting the Latitude from the location json
//         const currentLatitude = 
//           JSON.stringify(position.coords.latitude);

//         //Setting Longitude state
//         setCurrentLongitude(currentLongitude);

//         //Setting Longitude state
//         setCurrentLatitude(currentLatitude);
//       },
//       (error) => {
//         setLocationStatus(error.message);
//       },
//       {
//         enableHighAccuracy: false,
//         timeout: 30000,
//         maximumAge: 1000
//       },
//     );
//   };

//   const subscribeLocationLocation = () => {
//     watchID = Geolocation.watchPosition(
//       (position) => {
//         //Will give you the location on location change

//         setLocationStatus('You are Here');
//         console.log(position);

//         //getting the Longitude from the location json        
//         const currentLongitude =
//           JSON.stringify(position.coords.longitude);

//         //getting the Latitude from the location json
//         const currentLatitude = 
//           JSON.stringify(position.coords.latitude);

//         //Setting Longitude state
//         setCurrentLongitude(currentLongitude);

//         //Setting Latitude state
//         setCurrentLatitude(currentLatitude);
//       },
//       (error) => {
//         setLocationStatus(error.message);
//       },
//       {
//         enableHighAccuracy: false,
//         maximumAge: 1000
//       },
//     );
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <View style={styles.container}>
//         <View style={styles.container}>
//           <Image
//             source={{
//               uri:
//                 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/location.png',
//             }}
//             style={{width: 100, height: 100}}
//           />
//           <Text style={styles.boldText}>
//             {locationStatus}
//           </Text>
//           <Text
//             style={{
//               justifyContent: 'center',
//               alignItems: 'center',
//               marginTop: 16,
//             }}>
//             Longitude: {currentLongitude}
//           </Text>
//           <Text
//             style={{
//               justifyContent: 'center',
//               alignItems: 'center',
//               marginTop: 16,
//             }}>
//             Latitude: {currentLatitude}
//           </Text>
//           <View style={{marginTop: 20}}>
//             <Button
//               title="Button"
//               onPress={getOneTimeLocation}
//             />
//           </View>
//         </View>
//         <Text
//           style={{
//             fontSize: 18,
//             textAlign: 'center',
//             color: 'grey'
//           }}>
//           React Native Geolocation
//         </Text>
//         <Text
//           style={{
//             fontSize: 16,
//             textAlign: 'center',
//             color: 'grey'
//           }}>
//           www.aboutreact.com
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   boldText: {
//     fontSize: 25,
//     color: 'red',
//     marginVertical: 16,
//   },
// });

// export default App;

// import { Text, View,Platform,Linking } from 'react-native'
// import React, { Component } from 'react'
// import Geolocation from 'react-native-geolocation-service'

// export default class App extends Component {
//   componentDidMount(){
//     Geolocation.getCurrentPosition(
//       (position) => {
//   if(Platform.OS =='android')
//           console.warn(position);
//       else ( Platform.OS == 'ios')
//        Linking.openSettings('')




//         },

//       (error) => {
//           // See error code charts below.
//           console.warn(error.code, error.message);
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//   );
//   }
//   render() {
//     return (
//       <View>
//         <Text>App</Text>
//       </View>
//     )
//   }
// }
// import { Text, View, Platform, Linking } from 'react-native'
// import React, { Component } from 'react'
// import Geolocation from '@react-native-community/geolocation'
// export default class App extends Component {
//   componentDidMount() {
   
//     if (Platform.OS === 'android') {
//       this.requestLocationPermissions();
//     } else {
//       Linking.openURL('app-settings:');
//       this.getLatitudeLongitude();
//     }

//   }
//   requestLocationPermissions = async () => {
//     if (Platform.OS === 'android') {
//         this.getLatitudeLongitude();
//     } else {
//       // Geolocation.requestAuthorization();
//       this.getLatitudeLongitude();
//     }
//   }

//   getLatitudeLongitude() {
//     Geolocation.getCurrentPosition((position) => {
//       alert(position)
//     },
//       (error) => {
//         if (error.code === 1) {
//           this.setState({ errorMessage: 'Location permission is denied', isLoading: false });
//           Geolocation.clearWatch(this.watchID);
//         }
//       },
//       { enableHighAccuracy: true, distanceFilter: 100, timeout: 20000, maximumAge: 1000 }
//     );
//     this.watchID = Geolocation.watchPosition((position) => {
//       // this.showLoader();
//       // console.log('position', position);
//     });
//   }

//   render() {
//     return (
//       <View>
//         <Text>App</Text>
//       </View>
//     )
//   }
// }


// React Native Geolocation
// https://aboutreact.com/react-native-geolocation/
 
// import React in our code
import React, {useState, useEffect} from 'react';
 
// import all the components we are going to use
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  PermissionsAndroid,
  Platform,
  Button,
} from 'react-native';
 
//import all the components we are going to use.
import Geolocation from '@react-native-community/geolocation';
 
const App = () => {
  const [
    currentLongitude,
    setCurrentLongitude
  ] = useState('...');
  const [
    currentLatitude,
    setCurrentLatitude
  ] = useState('...');
  const [
    locationStatus,
    setLocationStatus
  ] = useState('');
 
  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, []);
 
  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        setLocationStatus('You are Here');
 
        //getting the Longitude from the location json
        const currentLongitude = 
          JSON.stringify(position.coords.longitude);
 
        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);
 
        //Setting Longitude state
        setCurrentLongitude(currentLongitude);
        
        //Setting Longitude state
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  };
 
  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        //Will give you the location on location change
        
        setLocationStatus('You are Here');
        console.log(position);
 
        //getting the Longitude from the location json        
        const currentLongitude =
          JSON.stringify(position.coords.longitude);
 
        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);
 
        //Setting Longitude state
        setCurrentLongitude(currentLongitude);
 
        //Setting Latitude state
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000
      },
    );
  };
 
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.container}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/location.png',
            }}
            style={{width: 100, height: 100}}
          />
          <Text style={styles.boldText}>
            {locationStatus}
          </Text>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 16,
            }}>
            Longitude: {currentLongitude}
          </Text>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 16,
            }}>
            Latitude: {currentLatitude}
          </Text>
          <View style={{marginTop: 20}}>
            <Button
              title="Button"
              onPress={getOneTimeLocation}
            />
          </View>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          React Native Geolocation
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boldText: {
    fontSize: 25,
    color: 'red',
    marginVertical: 16,
  },
});
 
export default App;
