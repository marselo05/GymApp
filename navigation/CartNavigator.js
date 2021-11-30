import CartScreen from '../screens/Cart'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Cart" 
                component={CartScreen}
                options={{'title': 'carrito'}}
            />
        </Stack.Navigator>
    )
}

export default CartNavigator;