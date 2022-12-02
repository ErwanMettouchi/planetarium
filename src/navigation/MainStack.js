import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import LaunchScreen from "../screens/LaunchScreen";

const Stack = createStackNavigator();

export default function MainStack() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='LaunchScreen' component={LaunchScreen} />
            <Stack.Screen name='Home' component={HomeScreen} />
        </Stack.Navigator>
    )
}