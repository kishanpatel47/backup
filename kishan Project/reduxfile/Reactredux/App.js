import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Gobalfile from './src/Globalfile'
import { Provider } from 'react-redux'
import store from './src/store'
const App = () => {
  return (
    <Provider store={store}> 
         <Gobalfile />
    </Provider>

  )
}

export default App
