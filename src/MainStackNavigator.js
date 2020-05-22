import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

/**
 * Components list
 */
import Home from '../components/home'
import MainNotes from '../components/mainNotes'

const Stack = createStackNavigator()

const MainStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{ title: 'Home Screen' }}/>
                <Stack.Screen name='MainNotes' component={MainNotes}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator