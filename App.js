import MainStack from './src/navigation/MainStack';

import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import LoadingScreen from './src/screens/LoadingScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  // Chargement des typose de l'application
  let [fontsLoaded] = useFonts({
    'Meow': require('./assets/fonts/MeowScript-Regular.ttf'),
    'Nunito': require('./assets/fonts/Nunito-Regular.ttf'),
    'openSansLight': require('./assets/fonts/OpenSans-Light.ttf'),
    'openSansMedium': require('./assets/fonts/OpenSans-Medium.ttf')
  });

  if (!fontsLoaded) {

    return <LoadingScreen />
  }

  return (
    <NavigationContainer>
      <MainStack />
      <StatusBar style="light"/>
    </NavigationContainer>
  );
}

