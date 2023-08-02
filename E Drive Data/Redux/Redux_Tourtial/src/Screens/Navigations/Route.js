
import React from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStack from './AuthStack';
const Stack = createNativeStackNavigator();
export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {AuthStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
