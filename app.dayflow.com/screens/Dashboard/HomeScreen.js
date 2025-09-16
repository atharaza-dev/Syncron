import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import { Plus, Send, ArrowDown, MoreHorizontal, Eye, ArrowUpRight, EyeOff, Gift, Coins, LockKeyholeOpen, Rocket } from "lucide-react-native";
import bg from '../../assets/images/bg.jpg';
import logo from '../../assets/images/logoDark.png'
import avatar from '../../assets/images/avatar.png';

export default function HomeScreen() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#8B5CF6" />

      {/* Header Section with Background */}
      <View style={{ position: 'relative' }}>
        <ImageBackground
          source={bg}
          style={{ height: 300 }}
          resizeMode="cover"
        >
          {/* Header with Welcome Text and Avatar */}
          <View className="flex-row items-center justify-between px-6 py-12">
            <Image
              source={logo}
              className="w-[100px] h-12 rounded-full"
              resizeMode='contain'
            />
            <Image
              source={avatar}
              className="w-12 h-12 rounded-full"
              resizeMode='contain'
            />
          </View>

          {/* Balance Section */}
          <View className="items-center px-6">
            <View className="flex-row items-center mb-4">
              <Text className="text-black text-base font-medium mr-2 font-JakartaBold">Wallet Balance</Text>
              <TouchableOpacity onPress={() => setIsBalanceVisible(!isBalanceVisible)}>
                {isBalanceVisible ? (
                  <Eye size={20} color="black" />
                ) : (
                  <EyeOff size={20} color="black" />
                )}
              </TouchableOpacity>
            </View>

            <Text className="text-black text-5xl font-light tracking-wide mb-4 font-Jakarta">
              {isBalanceVisible ? 'PKR 119,000' : '••••••••'}
            </Text>
          </View>
        </ImageBackground>

        {/* Quick Actions */}
        <View
          className="mx-6 bg-white rounded-xl border border-slate-200 px-2 py-6 shadow-lg"
          style={{
            position: 'absolute',
            bottom: -40,
            left: 12,
            right: 12,
            zIndex: 10
          }}
        >
          <View className="flex-row justify-between">

            {/* Add */}
            <TouchableOpacity className="items-center flex-1">
              <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center mb-2">
                <Plus size={20} color="#374151" />
              </View>
              <Text className="text-gray-700 text-sm font-medium font-JakartaBold">Add</Text>
            </TouchableOpacity>

            {/* Send */}
            <TouchableOpacity className="items-center flex-1 border-l border-slate-200">
              <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center mb-2">
                <Send size={20} color="#374151" />
              </View>
              <Text className="text-gray-700 text-sm font-medium font-JakartaBold">Send</Text>
            </TouchableOpacity>

            {/* Receive */}
            <TouchableOpacity className="items-center flex-1 border-l border-slate-200">
              <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center mb-2">
                <ArrowDown size={20} color="#374151" />
              </View>
              <Text className="text-gray-700 text-sm font-medium font-JakartaBold">Receive</Text>
            </TouchableOpacity>

            {/* More */}
            <TouchableOpacity className="items-center flex-1 border-l border-slate-200">
              <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center mb-2">
                <MoreHorizontal size={20} color="#374151" />
              </View>
              <Text className="text-gray-700 text-sm font-medium font-JakartaBold">More</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>

      {/* Bottom Section */}
      <View className="flex-1 pt-16 px-8 ">

        <View className="mx-2 p-4 bg-slate-50 border-slate-200 border rounded-lg">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Coins size={26} color="#2563eb" />
              <View className="px-2">
                <Text className="ml-2 text-lg font-JakartaBold">Finance Manager</Text>
                <Text className="ml-2 text-sm font-JakartaBold">Manage your expense here</Text>
              </View>
            </View>
            <ArrowUpRight size={24} />
          </View>
        </View>

        <View className="mx-2 p-4 bg-slate-50 border-slate-200 border rounded-lg my-4">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <LockKeyholeOpen size={26} color="#2563eb" />
              <View className="px-2">
                <Text className="ml-2 text-lg font-JakartaBold">Password Manager</Text>
                <Text className="ml-2 text-sm font-JakartaBold">Unlock peace of mind seamlessly</Text>
              </View>
            </View>
            <ArrowUpRight size={24} />
          </View>
        </View>

        <View className="mx-2 p-4 bg-slate-50 border-slate-200 border rounded-lg">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Rocket size={26} color="#2563eb" />
              <View className="px-2">
                <Text className="ml-2 text-lg font-JakartaBold">Get Early Updates</Text>
                <Text className="ml-2 text-sm font-JakartaBold">Unlock early updates of syncron</Text>
              </View>
            </View>
            <ArrowUpRight size={24} />
          </View>
        </View>




      </View>

    </View>
  );
}
