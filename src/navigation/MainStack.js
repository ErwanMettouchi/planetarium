import { createStackNavigator } from "@react-navigation/stack";
import LaunchScreen from "../screens/LaunchScreen";
import TabNavigation from "./TabNavigation";

const Stack = createStackNavigator();

export default function MainStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='LaunchScreen' component={LaunchScreen} />
            <Stack.Screen name='Navigation' component={TabNavigation} />
        </Stack.Navigator>
    )
}