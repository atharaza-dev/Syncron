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
import { Wallet2, RefreshCcw, Plus, SquarePenIcon, Eye, Trash2, Calendar, } from "lucide-react-native";
import bg from '../../assets/images/bg.jpg';
import logo from '../../assets/images/logoDark.png'
import avatar from '../../assets/images/avatar.png';

export default function HomeScreen({navigation}) {
  return (
    <View className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#8B5CF6" />

      <View className="flex-1">
        {/* Header Section with Background */}
        <View style={{ position: 'relative' }}>
          <ImageBackground
            source={bg}
            style={{ height: 320 }}
            resizeMode="cover"
          >
            {/* Header with Welcome Text and Avatar */}
            <View className="flex-row items-center justify-between px-8 py-12">
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
              <View className="flex-row items-center mb-2">
                <Wallet2 size={20} color="black" />
                <Text className="text-black text-base font-medium ml-2 font-JakartaBold">Finance Manager</Text>
              </View>
              <Text className="text-black text-5xl font-light tracking-wide mb-2 font-Jakarta">
                Unleash Finances
              </Text>
              <Text className="text-black text-sm font-light tracking-wide mb-4 font-Jakarta">
                Manage your finance and expenses under one roof
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

              {/* Receive */}
              <TouchableOpacity className="items-center flex-1 border-l-0 border-slate-200">
                <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center mb-2">
                  <RefreshCcw size={20} color="#2563eb" />
                </View>
                <Text className="text-gray-700 text-sm font-medium font-JakartaBold">Refresh</Text>
              </TouchableOpacity>

              {/* More */}
              <TouchableOpacity className="items-center flex-1 border-l border-slate-200">
                <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center mb-2">
                  <Plus size={20} color="#2563eb" />
                </View>
                <Text className="text-gray-700 text-sm font-medium font-JakartaBold">Cashbook</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 60 }}
          style={{ paddingTop: 60 }}
        >
          <View className="px-8">


            <View className="mx-2 mb-4">
              {/* Enhanced Card */}
              <View className="bg-white border border-slate-200 shadow-lg rounded-lg p-5 relative overflow-hidden">
                {/* Gradient accent bar */}
                <View className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />

                {/* Header Section */}
                <View className="flex-row items-center justify-between mb-4 pt-2">
                  <View className="flex-row items-center space-x-2">
                    <Calendar size={16} color="#64748b" />
                    <Text className="text-slate-600 text-sm font-medium ml-2">2025-08-04</Text>
                  </View>
                  <View className="flex-row items-center space-x-2">
                    <View className="w-2 h-2 bg-green-500 rounded-full" />
                    <Text className="text-slate-500 text-xs font-medium ml-2">Active</Text>
                  </View>
                </View>

                {/* Title Section with Icon */}
                <View className="flex-row items-center space-x-3 mb-5">
                  <View className="flex-1">
                    <Text className="text-slate-800 text-xl font-bold tracking-tight">Cashbook Name</Text>
                    <Text className="text-slate-500 text-sm">Financial Records</Text>
                  </View>
                </View>

                {/* Enhanced Action Buttons */}
                <View className="flex-row items-center">
                  <TouchableOpacity onPress={() => navigation.navigate('ExpenseBook')} className="bg-[#2563eb]  flex-row items-center justify-center flex-1 rounded p-2">
                    <Eye size={18} color="white" />
                    <Text className="ml-2 text-white font-semibold text-sm">View</Text>
                  </TouchableOpacity>

                  <TouchableOpacity className="bg-green-500 rounded p-2 mx-2">
                    <SquarePenIcon size={18} color="white" />
                  </TouchableOpacity>

                  <TouchableOpacity className="bg-red-500 rounded p-2">
                    <Trash2 size={18} color="white" />
                  </TouchableOpacity>
                </View>

                {/* Footer Info */}
                <View className="mt-4 pt-4 border-t border-slate-100">
                  <View className="flex-row justify-between items-center">
                    <Text className="text-xs text-slate-500">Last updated: 2 hours ago</Text>
                    <Text className="text-xs text-slate-500 font-mono">#CB001</Text>
                  </View>
                </View>
              </View>
            </View>

          </View>
        </ScrollView>
      </View>
    </View>
  );
}