import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
  Image,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../assets/images/logoLight.png';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [secureText, setSecureText] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-dark">
      <StatusBar barStyle="light-content" backgroundColor="#1D201F" />

      {/* Fixed Size Top Section */}
      <View className="bg-dark px-8" style={{ height: 220 }}>
        <View className="flex-1 justify-center">
          <Image
            source={logo}
            className="w-[120px] h-[60px] mb-12"
            resizeMode="contain"
          />
          <Text className="font-JakartaBold text-white text-[28px] tracking-wider mb-2">
            Welcome Back
          </Text>
          <Text className="font-Jakarta text-white tracking-wider">
            Login into your application
          </Text>
        </View>
      </View>

      {/* Form Section */}
      <View className="flex-1 bg-white px-8 pt-5 rounded-t-[20px] -mt-[12px]">
        {/* Form Fields */}
        <View className="mb-5">
          <Text className="text-slate-800 font-JakartaBold text-sm mb-2">Email</Text>
          <TextInput
            className="bg-white rounded-lg font-Jakarta p-4 text-sm font-semibold text-[#333] border border-slate-200"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email address"
            keyboardType="email-address"
            placeholderTextColor="#999"
          />
        </View>

        <View className="mb-5">
          <Text className="text-slate-800 font-JakartaBold text-sm mb-2">Password</Text>
          <View className="flex-row items-center font-Jakarta bg-white rounded-lg border border-slate-200">
            <TextInput
              className="flex-1 px-4 py-[14px] font-Jakarta text-sm font-semibold text-[#333]"
              value={password}
              onChangeText={setPassword}
              placeholder="•••••••••••"
              secureTextEntry={secureText}
              placeholderTextColor="#999"
            />
            <TouchableOpacity className="px-4" onPress={() => setSecureText(!secureText)}>
              <Icon
                name={secureText ? 'visibility-off' : 'visibility'}
                size={20}
                color="#999"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Remember Me and Forgot Password */}
        <View className="flex-row justify-between items-center mb-[30px]">
          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => setRememberMe(!rememberMe)}
          >
            <View
              className={`w-[18px] h-[18px] border border-[#999] rounded-[3px] mr-2 justify-center items-center ${rememberMe ? 'bg-[#F59E0B] border-[#F59E0B]' : ''
                }`}
            >
              {rememberMe && <Text className="text-white text-xs font-bold">✓</Text>}
            </View>
            <Text className="text-slate-800 font-JakartaBold text-sm">Remember Me</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text className="text-[#3B82F6] font-JakartaBold text-sm">Forgot Password ?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity
          className="bg-blue-600 py-4 rounded-lg items-center mb-5"
          onPress={() => navigation.navigate('Dashboard')}
        >
          <Text className="text-white font-Cal tracking-wider">Login</Text>
        </TouchableOpacity>

        {/* Or Divider */}
        <View className="items-center mb-5">
          <Text className="text-[#999] text-sm font-JakartaBold">Or</Text>
        </View>

        {/* Create Account Button */}
        <TouchableOpacity
          className="bg-dark py-4 rounded-lg items-center mb-5"
          onPress={() => navigation.navigate('Register')}
        >
          <Text className="text-white font-Cal tracking-wider">
            Don't have an account? Create Account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;