import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import GetStartedScreen from './screens/GetStartedScreen';
import AuthScreen from './screens/AuthScreen';
import OTPScreen from './screens/OTPScreen'
import DashboardNavigator from './screens/Dashboard/DashboardNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      PlusJakartaSans: require('./assets/fonts/PlusJakartaSans.ttf'),
      JakartaBold: require('./assets/fonts/JakartaBold.ttf'),
      CalSans: require('./assets/fonts/CalSans.ttf'),
    }).then(() => setLoaded(true));
  }, []);

  if (!loaded) return <ActivityIndicator className="flex-1" />;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GetStarted" component={GetStartedScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OTP" component={OTPScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={DashboardNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}