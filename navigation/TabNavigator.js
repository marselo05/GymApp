import { Text, View } from 'react-native';

import { COLORS } from '../constant/colors';
import CartNavigator from './CartNavigator'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import ShopNavigator from './ShopNavigator'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const BottomTabs = createBottomTabNavigator()

const TabNavigator = () => { 
    return(
        <BottomTabs.Navigator 
            screenOptions={{
                headerShown: false
            }}    
        >
            <BottomTabs.Screen
                name="ShopTab"
                component={ShopNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="md-home" size={24} color={focused ? COLORS.primary : 'black'} />
                    )
                }}
            />
            <BottomTabs.Screen 
                name="Carrito"
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="md-cart" size={24} color={focused ? COLORS.primary : 'black'} />
                    )
                }}
            />
        </BottomTabs.Navigator>
    )
}

export default TabNavigator;