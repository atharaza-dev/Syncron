import React from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import logo from '../assets/images/logov1.png';

const GetStartedScreen = ({ navigation }) => {
  return (
    <View className="flex-1 bg-white">
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

      {/* Main Content */}
      <View className="flex-1 justify-center px-8">
        {/* Logo and Text Container */}
        <View className="items-center mb-16">
          {/* Logo */}
          <Image
            source={logo}
            className="w-[120px] h-[200px]"
            resizeMode="contain"
          />

          {/* Heading */}
          <Text className="text-black font-JakartaBold text-4xl leading-tight mb-2">
            Welcome Back
          </Text>

          {/* Subheading */}
          <Text className="text-gray-60 text-center font-Jakarta text-lg leading-relaxed max-w-xs">
            Discover amazing experiences and connect with your world
          </Text>
        </View>
      </View>

      {/* Buttons Container */}
      <View className="absolute bottom-8 w-full px-6">
        <TouchableOpacity
          className="bg-blue-500 py-4 rounded-xl items-center mb-4 shadow-sm"
          onPress={() => navigation.navigate('OTP')}
          activeOpacity={0.8}
        >
          <Text className="text-white font-JakartaBold text-lg tracking-wider">
            Sign In
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="py-4 rounded-xl items-center border border-gray-200"
          onPress={() => navigation.navigate('Auth')}
          activeOpacity={0.7}
        >
          <Text className="text-black font-JakartaBold text-lg tracking-wider">
            Create an Account
          </Text>
        </TouchableOpacity>

        {/* Bottom spacing for safe area */}
        <View className="h-4" />
      </View>
    </View>
  );
};

export default GetStartedScreen;