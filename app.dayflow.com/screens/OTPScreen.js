import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  SafeAreaView,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Trash2Icon, Delete } from "lucide-react-native";

import logo from '../assets/images/logoLight.png';

const OTPVerification = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showError, setShowError] = useState(false);
  const shakeAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const filledCount = otp.filter(digit => digit !== '').length;
    setIsComplete(filledCount === 4);
  }, [otp]);

  // Shake animation for errors
  const triggerShakeAnimation = () => {
    setShowError(true);
    Animated.sequence([
      Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
      Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true }),
    ]).start(() => {
      setTimeout(() => setShowError(false), 2000);
    });
  };

  // Handle OTP input
  const handleNumberPress = (number) => {
    if (activeIndex < 4) {
      const newOtp = [...otp];
      newOtp[activeIndex] = number.toString();
      setOtp(newOtp);

      if (activeIndex < 3) {
        setActiveIndex(activeIndex + 1);
      }
    }
  };

  // Handle backspace
  const handleBackspace = () => {
    if (activeIndex > 0 || otp[activeIndex] !== '') {
      const newOtp = [...otp];
      if (otp[activeIndex] !== '') {
        newOtp[activeIndex] = '';
        setOtp(newOtp);
      } else {
        setActiveIndex(Math.max(0, activeIndex - 1));
        newOtp[Math.max(0, activeIndex - 1)] = '';
        setOtp(newOtp);
      }
    }
  };

  // Handle OTP box press
  const handleOtpBoxPress = (index) => {
    setActiveIndex(index);
  };

  // Clear all OTP
  const handleClear = () => {
    setOtp(['', '', '', '']);
    setActiveIndex(0);
    setShowError(false);
  };

  // Verify OTP
  const handleVerify = () => {
    const otpString = otp.join('');
    if (otpString.length === 4) {
      if (otpString === '8097') {
        console.log('OTP Verified:', otpString);
        navigation.navigate('Dashboard');
      } else {
        triggerShakeAnimation();
        setTimeout(() => handleClear(), 1500);
      }
    }
  };

  // Render numeric keypad
  const renderKeypad = () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
      <View>
        {/* Number rows */}
        {[0, 1, 2].map((rowIndex) => (
          <View key={rowIndex} className="flex-row mb-4">
            {numbers.slice(rowIndex * 3, (rowIndex + 1) * 3).map((number) => (
              <TouchableOpacity
                key={number}
                className="flex-1 h-16 bg-slate-100 rounded-lg items-center justify-center mx-1"
                onPress={() => handleNumberPress(number)}
                activeOpacity={0.7}
              >
                <Text className="text-2xl font-Cal text-slate-800">{number}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        {/* Bottom row */}
        <View className="flex-row mb-4">
          <TouchableOpacity
            className="flex-1 h-16 bg-slate-100 rounded-lg items-center justify-center mx-1"
            onPress={handleClear}
            activeOpacity={0.7}
          >
            <Trash2Icon  size={20} color="#1e293b" />
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-1 h-16 bg-slate-100 rounded-lg items-center justify-center mx-1"
            onPress={() => handleNumberPress(0)}
            activeOpacity={0.7}
          >
            <Text className="text-2xl font-Cal text-slate-800">0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-1 h-16 bg-slate-100 rounded-lg items-center justify-center mx-1"
            onPress={handleBackspace}
            activeOpacity={0.7}
          >
            <Delete size={20} color="#1e293b" />
          </TouchableOpacity>
        </View>

        {/* Verify Button full width at bottom */}
        <TouchableOpacity
          className={`h-14 rounded-lg items-center justify-center 
            ${isComplete ? 'bg-blue-500' : 'bg-slate-300'}`}
          onPress={handleVerify}
          disabled={!isComplete}
          activeOpacity={0.8}
        >
          <Text
            className={`text-lg font-JakartaBold ${isComplete ? 'text-white' : 'text-slate-500'
              }`}
          >
            Verify Code
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-dark" edges={['top', 'left', 'right']}>
      <StatusBar barStyle="light-content" backgroundColor="#1D201F" />

      {/* Header Section */}
      <View className="bg-dark px-8" style={{ height: 240 }}>
        <View className="flex-1 justify-center">
          <Image
            source={logo}
            className="w-[120px] h-[60px] mb-8"
            resizeMode="contain"
          />
          <Text className="font-JakartaBold text-white text-[28px] tracking-wider mb-2">
            Security Verification
          </Text>
          <Text className="font-Jakarta text-white/80 tracking-wider text-base">
            Enter your 4-digit security code to continue
          </Text>
        </View>
      </View>

      {/* Form Section */}
      <View className="flex-1 bg-white pt-8 rounded-t-[20px] -mt-[12px]">
        {/* OTP Input Boxes */}
        <Animated.View
          className="flex-row mb-6 px-8"
          style={{ transform: [{ translateX: shakeAnimation }] }}
        >
          {otp.map((digit, index) => (
            <TouchableOpacity
              key={index}
              className={`flex-1 h-16 border-2 rounded-lg items-center justify-center mx-1
                ${showError
                  ? 'border-red-400 bg-red-50'
                  : activeIndex === index
                    ? 'border-blue-500 bg-blue/10'
                    : digit
                      ? 'border-green-500 bg-green-50'
                      : 'border-slate-300 bg-slate-50'
                }`}
              onPress={() => handleOtpBoxPress(index)}
              activeOpacity={0.7}
            >
              <Text className="text-2xl font-Cal text-slate-800">
                {digit}
              </Text>
            </TouchableOpacity>
          ))}
        </Animated.View>

        {/* Error/Status Message */}
        <View className="items-center mb-6">
          {showError ? (
            <Text className="text-red-500 text-sm font-Jakarta mb-2">
              Incorrect code. Please try again.
            </Text>
          ) : (
            <Text className="text-slate-600 font-Jakarta text-sm mb-2">
              Enter your Security Code you set for app
            </Text>
          )}
          <TouchableOpacity>
            <Text className="text-blue-500 font-JakartaBold text-sm">
              Forgot Security Code? Contact Us
            </Text>
          </TouchableOpacity>
        </View>

        {/* Numeric Keypad pinned at bottom */}
        <View className="flex-1 justify-end px-8 pb-8">
          {renderKeypad()}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OTPVerification;
