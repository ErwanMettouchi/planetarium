import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen'
import VideoScreen from '../screens/VideoScreen';
const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="VideoScreen" component={VideoScreen} options={{
                headerStyle: {
                    backgroundColor: "#4C5973"
                },
                headerTintColor: "#fff",
                headerTitle: "Vidéo de présentation",
                headerBackTitle: " "
            }} />
        </Stack.Navigator>
    )
}