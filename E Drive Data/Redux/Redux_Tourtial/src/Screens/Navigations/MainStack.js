import React from 'react-native'
import {Home} from  '../Home/Home'
import {Profile} from  '../Home/Profile'

export default function (Stack) {
    return(
        <>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }}></Stack.Screen>
       
        
        </>
    )
}