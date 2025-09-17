import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { Plus, Send, ArrowDown, MoreHorizontal, Eye, ArrowUpRight, EyeOff, Gift, Coins, LockKeyholeOpen, Rocket, CardSim } from "lucide-react-native";
import bg from '../../assets/images/bg.jpg';
import logo from '../../assets/images/logoDark.png'
import avatar from '../../assets/images/avatar.png';
import Visa from '../../assets/images/visa.webp'

export default function HomeScreen() {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);
  const [isCardInfoVisible, setIsCardInfoVisible] = useState(true);

  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#8B5CF6" />

      <View className="flex-1">
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
                  <Plus size={20} color="#2563eb" />
                </View>
                <Text className="text-gray-700 text-sm font-medium font-JakartaBold">Add</Text>
              </TouchableOpacity>

              {/* Send */}
              <TouchableOpacity className="items-center flex-1 border-l border-slate-200">
                <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center mb-2">
                  <Send size={20} color="#2563eb" />
                </View>
                <Text className="text-gray-700 text-sm font-medium font-JakartaBold">Send</Text>
              </TouchableOpacity>

              {/* Receive */}
              <TouchableOpacity className="items-center flex-1 border-l border-slate-200">
                <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center mb-2">
                  <ArrowDown size={20} color="#2563eb" />
                </View>
                <Text className="text-gray-700 text-sm font-medium font-JakartaBold">Receive</Text>
              </TouchableOpacity>

              {/* More */}
              <TouchableOpacity className="items-center flex-1 border-l border-slate-200">
                <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center mb-2">
                  <MoreHorizontal size={20} color="#2563eb" />
                </View>
                <Text className="text-gray-700 text-sm font-medium font-JakartaBold">More</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>

        {/* Scrollable Feature Cards Section */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 60 }}
          style={{ paddingTop: 60 }}
        >
          <View className="px-8">

            <View className="mx-2 p-4 bg-white shadow-lg border-slate-200 border rounded-lg mb-4">
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

            <View className="mx-2 p-4 bg-white shadow-lg border-slate-200 border rounded-lg mb-4">
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

            <View className="mx-2 p-4 bg-white shadow-lg border-slate-200 border rounded-lg mb-6">
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

            {/* Card Details Component */}
            <View className="mx-2 p-6 bg-white shadow-lg border-slate-200 border rounded-lg mb-6">
              {/* Header */}
              <View className="flex-row items-center justify-between mb-6">
                <Text className="text-lg font-JakartaBold text-gray-800">Card Details</Text>
                <TouchableOpacity
                  onPress={() => setIsCardInfoVisible(!isCardInfoVisible)}
                  className="flex-row items-center"
                >
                  <Text className="text-sm text-blue-600 font-JakartaBold mr-2">
                    {isCardInfoVisible ? 'Hide Info' : 'Show Info'}
                  </Text>
                  {isCardInfoVisible ? (
                    <EyeOff size={16} color="#2563eb" />
                  ) : (
                    <Eye size={16} color="#2563eb" />
                  )}
                </TouchableOpacity>
              </View>

              {/* Card Visual */}
              <View className="mb-6">
                <View
                  className="h-48 rounded-lg p-6 justify-between"
                  style={{
                    backgroundColor: '#2563eb',
                  }}
                >
                  {/* Card Top Section */}
                  <View className="flex-row justify-between items-start">
                    <View>
                      <Text className="text-white text-xs opacity-80 mb-1 font-JakartaBold">Current Wallet Balance</Text>
                      <Text className="text-white text-lg font-JakartaBold">
                        {isCardInfoVisible ? 'PKR 119,000' : '••••••••'}
                      </Text>
                    </View>
                    <View className="">
                      <Image
                        source={Visa}
                        className="w-[40px] h-12"
                        resizeMode='contain'
                      />
                    </View>
                  </View>

                  {/* Card Bottom Section */}
                  <View>
                    <Text className="text-white text-base font-JakartaBold mb-2">
                      {isCardInfoVisible ? '0581 3274 40273' : '•••• •••• •••• ••••'}
                    </Text>
                    <View className="flex-row justify-between">
                      <Text className="text-white text-xs opacity-80 font-JakartaBold">
                        {isCardInfoVisible ? 'Mohammad Athar Raza' : '••/••'}
                      </Text>
                      <Text className="text-white text-xs opacity-80 font-JakartaBold">
                        BRC {isCardInfoVisible ? '0581' : '•••'}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>

              {/* Card Information Details */}
              <View>
                {/* Card Name */}
                <View className="mb-4">
                  <Text className="text-xs text-gray-500 font-JakartaBold uppercase mb-1">Acc Name</Text>
                  <Text className="text-base text-gray-800 font-JakartaBold">
                    {isCardInfoVisible ? 'Mohammad Athar Raza' : '••••••••••••'}
                  </Text>
                </View>

                {/* Card Number */}
                <View className="mb-4">
                  <Text className="text-xs text-gray-500 font-JakartaBold uppercase mb-1">IBAN Number</Text>
                  <Text className="text-base text-gray-800 font-JakartaBold">
                    {isCardInfoVisible ? 'PK82UNIL0109000327440273' : '•••• •••• •••• ••••'}
                  </Text>
                </View>

                {/* Expiry Date */}
                <View>
                  <Text className="text-xs text-gray-500 font-JakartaBold uppercase mb-1">BRC</Text>
                  <Text className="text-base text-gray-800 font-JakartaBold">
                    {isCardInfoVisible ? '0581' : '••/••'}
                  </Text>
                </View>
              </View>
            </View>

          </View>

        </ScrollView>
      </View>
    </View>
  );
}