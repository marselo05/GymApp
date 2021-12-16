import { COLORS } from '../../constant/colors'
import CartScreen from '../../screens/CartScreen';
import { Platform } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

const CartNavigator = () => {
    return(
        <Stack.Navigator
            initialRouteName="Cart"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.primary : ''
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : '',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <Stack.Screen
                name="Carrito"
                component={CartScreen}
                option={{ title: 'Carrito' }}
            />
        </Stack.Navigator>
)}

export default CartNavigator;