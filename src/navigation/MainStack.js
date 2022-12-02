import { createStackNavigator } from "@react-navigation/stack";
import LaunchScreen from "../screens/LaunchScreen";

const Stack = createStackNavigator();

export default function MainStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='LaunchScreen' component={LaunchScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}