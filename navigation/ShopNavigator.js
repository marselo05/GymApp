import {COLORS} from '../constant/colors'
import Categories from "../screens/Categories"
import DetailProduct from "../screens/DetailProduct"
import { NavigationContainer } from '@react-navigation/native'
import Products from "../screens/Products"
import React from "react"
import { StyleSheet } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const ShopNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerStyle:  styles.header,
                headerTintColor: Platform.OS == 'android' ? 'white' : COLORS.primary,
                headerTitleStyle: styles.fontSizeWeight,
                title: 'Productos Gym'
            }}    
        >
            <Stack.Screen 
                name="Home" 
                component={Categories} 
            />
            <Stack.Screen 
                name="Products" 
                component={Products} 
                options={ ({route}) => ({
                    title: route.params.name
                })}
            />
            <Stack.Screen 
                name="DetailProduct" 
                component={DetailProduct} 
                options={ 
                    ({route}) => ({
                        title: route.params.name
                    })
                }
            />
        </Stack.Navigator>
    </NavigationContainer>
)

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.primary
    },
    fontSizeWeight: {
        fontWeight: 'bold'
    }
})

export default ShopNavigator;