import React, { useEffect } from 'react';
import { View, Image, StatusBar } from 'react-native';
import logo from '../assets/images/logoLight.png';
import splash from '../assets/images/splash.png';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('GetStarted');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <StatusBar barStyle="light-content" backgroundColor="#1D201F" />
      <Image
        source={splash}
        className="absolute w-full h-full"
        resizeMode="cover"
      />
      <Image
        source={logo}
        className="w-[160px] h-[80px] z-10"
        resizeMode="contain"
      />
    </View>
  );
};

export default SplashScreen;