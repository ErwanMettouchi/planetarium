import { createStackNavigator } from "@react-navigation/stack";
import PlanetScreen from '../screens/PlanetScreen';

const Stack = createStackNavigator();

export default function PlanetStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PlanetScreen" component={PlanetScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}