import React, {useState} from 'react';

import AppLoading from 'expo-app-loading';
import MainNavigation from './navigation/index'
import {
    StyleSheet,
} from 'react-native';
import {useFonts} from 'expo-font'

export default function App() {
    const [loaded] = useFonts({
        'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-medium': require('./assets/fonts/OpenSans-Medium.ttf'),
        'open-sans-italic': require('./assets/fonts/OpenSans-Italic.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    })

    if(!loaded) return <AppLoading />

    return (
        <MainNavigation />
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 30
    }
});
