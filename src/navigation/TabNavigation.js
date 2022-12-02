import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';
import HomeStack from './HomeStack';
import PlanetStack from './PlanetStack';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={
            ({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let Library;
                    if (route.name === "Home") {
                        iconName = focused ? "home" : "home-outline";
                        Library = Ionicons;
                        color = focused ? "#F2C094" : "#fff";
                    }
                    else if (route.name === "Planet") {
                        iconName = focused ? "planet" : "planet-outline";
                        Library = Ionicons;
                        color = focused ? "#02B8EB" : "#fff";
                    }
                    return <Library name={iconName} size={size} color={color} />
                },
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#4C5973",
                },
                tabBarLabel: ({ focused, color }) => {
                    let label;
                    if (route.name === "Home") {
                        label = "Accueil";
                        color = focused ? "#F2C094" : "#fff";
                    }
                    else if (route.name === "Planet") {
                        label = "Planètes";
                        color = focused ? "#02B8EB" : "#fff";
                    }
                    return <Text style={{ color: color }}>{label}</Text>
                }
            })
        }>
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Planet" component={PlanetStack} />
        </Tab.Navigator>
    )
}