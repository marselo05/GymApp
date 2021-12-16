import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import TabNavitor from './tab/TabNavigator'

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <TabNavitor />
        </NavigationContainer>
    )
}

export default MainNavigation;