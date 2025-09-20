import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';
import HomeScreen from './HomeScreen';
import FinanceScreen from './FinanceScreen';
import PasswordScreen from './PasswordScreen';
import TaskScreen from './TaskScreen';
import SettingsScreen from './SettingsScreen';
import ExpenseBook from './ExpenseBook';
import {
  Home,
  CirclePoundSterling,
  LockKeyholeOpen,
  ListTodo,
  Settings,
} from "lucide-react-native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Finance stack → contains FinanceScreen + ExpenseBook
function FinanceStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FinanceMain" component={FinanceScreen} />
      <Stack.Screen name="ExpenseBook" component={ExpenseBook} />
    </Stack.Navigator>
  );
}

function DashboardTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#2563eb',
        tabBarInactiveTintColor: '#A0A0A0',
        tabBarStyle: {
          height: 90,
          paddingHorizontal: 20,
          borderTopWidth: 1,
          borderTopColor: '#E5E5E5',
          backgroundColor: '#FFFFFF',
        },
      }}
    >
      {/* Home */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center' }}>
              {focused && (
                <View className="absolute -top-3 h-[3px] w-[50px] rounded-md bg-blue-600" />
              )}
              <Home size={22} color={color} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text className={`text-sm font-JakartaBold mt-1 ${focused ? "text-blue-600 text-md" : "text-gray-400"}`}>
              Home
            </Text>
          ),
        }}
      />

      {/* Finance → Stack */}
      <Tab.Screen
        name="Finance"
        component={FinanceStack}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center' }}>
              {focused && (
                <View className="absolute -top-3 h-[3px] w-[50px] rounded-md bg-blue-600" />
              )}
              <CirclePoundSterling size={22} color={color} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text className={`text-sm font-JakartaBold mt-1 ${focused ? "text-blue-600 text-md" : "text-gray-400"}`}>
              Finance
            </Text>
          ),
        }}
      />

      {/* Passwords */}
      <Tab.Screen
        name="Passwords"
        component={PasswordScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center' }}>
              {focused && (
                <View className="absolute -top-3 h-[3px] w-[50px] rounded-md bg-blue-600" />
              )}
              <LockKeyholeOpen size={22} color={color} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text className={`text-sm font-JakartaBold mt-1 ${focused ? "text-blue-600 font-semibold" : "text-gray-400"}`}>
              Passwords
            </Text>
          ),
        }}
      />

      {/* Tasks */}
      <Tab.Screen
        name="Tasks"
        component={TaskScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center' }}>
              {focused && (
                <View className="absolute -top-3 h-[3px] w-[50px] rounded-md bg-blue-600" />
              )}
              <ListTodo size={22} color={color} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text className={`text-sm font-JakartaBold mt-1 ${focused ? "text-blue-600 font-semibold" : "text-gray-400"}`}>
              Tasks
            </Text>
          ),
        }}
      />

      {/* Settings */}
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <View style={{ alignItems: 'center' }}>
              {focused && (
                <View className="absolute -top-3 h-[3px] w-[50px] rounded-md bg-blue-600" />
              )}
              <Settings size={22} color={color} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text className={`text-sm font-JakartaBold mt-1 ${focused ? "text-blue-600 font-semibold" : "text-gray-400"}`}>
              Setting
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function DashboardNavigator() {
  return (
    <DashboardTabs />
  );
}
