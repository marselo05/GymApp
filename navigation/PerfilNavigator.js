import { Platform, StyleSheet } from "react-native";

import { COLORS } from '../constant/colors'
import PerfilScreen from '../screens/PerfilScreen';
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()


const PerfilNavigator = () => {
    return (
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
                name="Perfil"
                component={PerfilScreen}
                option={{ title: 'Perfil' }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.primary
    },
    fontSizeWeight: {
        fontWeight: 'bold'
    }
})

export default PerfilNavigator;