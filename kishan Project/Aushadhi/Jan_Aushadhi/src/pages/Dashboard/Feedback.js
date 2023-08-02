import { View, Text } from 'react-native'
import React from 'react'
import ViewSlider from 'react-native-view-slider'
import Singleton from '../../helper/Singleton'

export default function Feedback() {
  return (
    <View>
      <Text>{Singleton.getInstance().UserCurrentLatitude}</Text>
      <Text>{Singleton.getInstance().UserCurrentLongitude}</Text>

    </View>
  )
}