import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import AppTheme from '../../../helper/AppTheme';
const OtherBrand_CustomView = ({ item, uri ,Medicineonpress}) => {
    return (
        <View >
            <TouchableOpacity onPress={Medicineonpress}>
                <View style={{ flexDirection: 'row', borderColor: AppTheme.APPCOLOR.GREY, borderRadius: 10, borderWidth: 1, height: Dimensions.get('screen').height * 0.15 }}>
                    <Image style={{  width: 125 }} source={{ uri: item.uri }} />
                    <View style={{ flex: 1, backgroundColor: AppTheme.APPCOLOR.WHITE, alignContent: 'center' }}>
                        <View style={{ marginLeft: 10 }}>
                            <Text style={{ color: AppTheme.APPCOLOR.BLACK, marginLeft: 3,fontWeight:'bold' }}> { item.name}</Text>
                            <Text style={{ color: AppTheme.APPCOLOR.BLACK, marginLeft: 6,fontWeight:'bold'}}>{item.Brands}</Text>
                            <Text style={{ color: AppTheme.APPCOLOR.BLACK, marginLeft: 6,fontWeight:'bold'}}>{ item.Unitsize}</Text>
                            <Text style={{ color: AppTheme.APPCOLOR.BLACK, marginLeft: 6,fontWeight:'bold'}}>{ item.Unitsize}</Text>
                    
                        </View>
                    </View>
                    {/* <View style={{ flex: 1 }}>
                    <Image style={{ alignSelf: 'flex-end' }} source={require('../../../assets/images/Dashboarddrawericons/right-direction.png')}></Image>
                </View> */}

                </View>
            </TouchableOpacity>

        </View>
    )
}

export default OtherBrand_CustomView