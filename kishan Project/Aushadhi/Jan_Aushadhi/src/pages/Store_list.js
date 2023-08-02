import { Dimensions, Image, ScrollView, Text, TextInput, TouchableOpacity, View, Alert, Linking } from 'react-native'
import React, { Component } from 'react'
import AppTheme from '../helper/AppTheme'
import Star from 'react-native-star-view'

export default class Store_list extends Component {
  constructor(props)
  {
    super(props)
    this.state= {
      starCount: 3.5
    }
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  componentDidMount() {
    console.log("Store list :->" + JSON.stringify(this.props.route, null, 2))
  }
  Review_Submit = () => {
    return (
      Alert.alert("Jan Aushadhi Sugam", " Your Successfully review submit",
        [{
          text: 'OK',
          style: 'destructive'

        }]

        , {
          cancelable: true
        }

      )
    )
  }
  Open_Email =()=>{
    alert('email')
  }
  render() {
    return (
      <View>
        <Image style={{ height: Dimensions.get('screen').width * 0.45, resizeMode: 'cover' }} source={{ uri: this.props.route.params.storelist.uri }} />

        <View style={{ backgroundColor: AppTheme.APPCOLOR.WHITE }}>
          <Image style={{ height: 75, width: 75, alignSelf: 'center', bottom: Dimensions.get('screen').height * 0.04, borderRadius: 75 / 2, resizeMode: 'center', backgroundColor: AppTheme.APPCOLOR.WHITE }} source={{ uri: this.props.route.params.storelist.person }} />
          <View style={{ margin: 12 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 17, paddingLeft: 5, color: AppTheme.APPCOLOR.BLACK }}>{this.props.route.params.storelist.name}</Text>
            <ScrollView style={{ height: Dimensions.get('screen').height / 2.7 }}>
              <View style={{ flexDirection: 'row', marginVertical: 12, marginLeft: 7 }} >
                <Image style={{ width: 18, height: 18, tintColor: AppTheme.APPCOLOR.Wedgewood }} source={require('../assets/images/Dashboarddrawericons/pharmacy.png')} />
                <Text style={{ color: AppTheme.APPCOLOR.BLACK, marginHorizontal: 5 }}>{this.props.route.params.storelist.storecode}</Text>
              </View>
              <View style={{ flexDirection: 'row', marginVertical: 12, marginLeft: 7 }} >
                <Image style={{ width: 18, height: 18, tintColor: AppTheme.APPCOLOR.Wedgewood }} source={require('../assets/images/Dashboarddrawericons/businessman.png')} />
                <Text style={{ color: AppTheme.APPCOLOR.BLACK, marginHorizontal: 5 }}>{this.props.route.params.storelist.PersonName}</Text>
              </View>
              <View style={{ flexDirection: 'row', marginVertical: 12, marginLeft: 7 }} >
                <Image style={{ width: 18, height: 18, tintColor: AppTheme.APPCOLOR.Wedgewood }} source={require('../assets/images/Dashboarddrawericons/store.png')} />
                <Text style={{ color: AppTheme.APPCOLOR.BLACK, marginHorizontal: 5 }}>{this.props.route.params.storelist.address}</Text>
              </View>
              <View style={{ flexDirection: 'row', marginVertical: 12, marginLeft: 7 }} >
                <Image style={{ width: 18, height: 18, tintColor: AppTheme.APPCOLOR.Wedgewood }} source={require('../assets/images/Dashboarddrawericons/location.png')} />
                <Text style={{ color: AppTheme.APPCOLOR.BLACK, marginHorizontal: 5 }}>{this.props.route.params.storelist.km}</Text>
              </View>
              <View style={{ flexDirection: 'row', marginVertical: 12, marginLeft: 7 }} >
                <Image style={{ width: 18, height: 18, tintColor: AppTheme.APPCOLOR.Wedgewood }} source={require('../assets/images/Dashboarddrawericons/phone-call.png')} />
                <Text style={{ color: AppTheme.APPCOLOR.BLACK, marginHorizontal: 5 }}>{this.props.route.params.storelist.Phone}</Text>
              </View>
              <TouchableOpacity onPress={()=>Linking.openURL('mailto'+this.props.route.params.storelist.email) }
     >
                <View style={{ flexDirection: 'row', marginVertical: 12, marginLeft: 7 }} >
                  <Image style={{ width: 18, height: 18, tintColor: AppTheme.APPCOLOR.Wedgewood }} source={require('../assets/images/Dashboarddrawericons/email.png')} />
                  <Text style={{ color: AppTheme.APPCOLOR.BLACK, marginHorizontal: 5 }}>{this.props.route.params.storelist.email}</Text>
                </View>
              </TouchableOpacity>
              <View style={{ flexDirection: 'row', marginVertical: 12, marginLeft: 7 }} >
                <Star 
                score={1}
                style={{
                  width: 100,
                  height: 20,
                  
                  marginBottom: 20
                }} />
              </View>
              <View style={{ flexDirection: 'row' ,margin:5}} >
                <TextInput multiline={true} style={{ height: 70, backgroundColor: AppTheme.APPCOLOR.GREY, flex: 1, marginLeft: 7 }} placeholder={'Comment'}></TextInput>
              </View>

              <TouchableOpacity style={{ marginTop: 10 }} onPress={() => this.Review_Submit()} >
                <View style={{ backgroundColor: AppTheme.APPCOLOR.Wedgewood, alignItems: 'center', padding: 12, borderRadius: 20 }}>

                  <Text style={{ color: AppTheme.APPCOLOR.WHITE }}>Submit</Text>
                </View>
              </TouchableOpacity>

            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}