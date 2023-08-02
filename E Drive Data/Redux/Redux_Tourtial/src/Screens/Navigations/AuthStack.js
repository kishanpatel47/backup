import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import {Login} from  '../Login/Login'
import {Signup} from  '../Signup/Signup'
const Stack =createNativeStackNavigator();
export default function AuthStack () {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }}></Stack.Screen>
            <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }}></Stack.Screen>
       
        
        </Stack.Navigator>
    )
}