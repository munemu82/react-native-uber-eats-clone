import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import RestaurantDetail from './screens/RestaurantDetail';

export default function RootNavigation() {
    const Stack = createStackNavigator();
    const screenOPtions = {
        HeaderShown: false,

    };
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={ screenOPtions } >
                <Stack.Screen name='Home' component={ Home } />
                <Stack.Screen name='RestaurantDetail' component={ RestaurantDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}