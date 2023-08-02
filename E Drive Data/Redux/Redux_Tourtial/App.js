import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Routes from './src/Screens/Navigations/Route'
const App = () => {
  return (
 <Routes/>
  )
}

export default App;

//define your styles

const styles =StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#2c3e50'
  }
})