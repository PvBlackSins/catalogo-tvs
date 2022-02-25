import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import Home from './pages/Home';
import Detail from './pages/Detail';
import Detail2 from './pages/Detail2';
import Detail3 from './pages/Detail3';
import Detail4 from './pages/Detail4';
import Detail5 from './pages/Detail5';
import Detail6 from './pages/Detail6';
import Description from './pages/Description';

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name ="Home"
                component={Home}
                options={{ headerShown: false }}
                />
                <Stack.Screen
                name="Detail"
                component={Detail}
                options={{
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 15}}>
                            <Feather
                            name="shopping-cart"
                            size={24}
                            color="black"
                            />
                        </TouchableOpacity>
                    )
                }}
                />
                <Stack.Screen
                name="Detail2"
                component={Detail2}
                options={{
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 15}}>
                            <Feather
                            name="shopping-cart"
                            size={24}
                            color="black"
                            />
                        </TouchableOpacity>
                    )
                }}
                />
                <Stack.Screen
                name="Detail3"
                component={Detail3}
                options={{
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 15}}>
                            <Feather
                            name="shopping-cart"
                            size={24}
                            color="black"
                            />
                        </TouchableOpacity>
                    )
                }}
                />
                <Stack.Screen
                name="Detail4"
                component={Detail4}
                options={{
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 15}}>
                            <Feather
                            name="shopping-cart"
                            size={24}
                            color="black"
                            />
                        </TouchableOpacity>
                    )
                }}
                />
                <Stack.Screen
                name="Detail5"
                component={Detail5}
                options={{
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 15}}>
                            <Feather
                            name="shopping-cart"
                            size={24}
                            color="black"
                            />
                        </TouchableOpacity>
                    )
                }}
                />
                <Stack.Screen
                name="Detail6"
                component={Detail6}
                options={{
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 15}}>
                            <Feather
                            name="shopping-cart"
                            size={24}
                            color="black"
                            />
                        </TouchableOpacity>
                    )
                }}
                />
                <Stack.Screen
                name="Description"
                component={Description}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;