import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import { Home, Landmark, ArrowLeftRight, CreditCard, CirclePoundSterling, LockKeyholeOpen, ListTodo, Settings } from "lucide-react-native";

const Tab = createBottomTabNavigator();

export default function DashboardNavigator() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

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
                            <Text
                                className={`text-sm font-JakartaBold  mt-1 ${focused ? "text-blue-600 text-md" : "text-gray-400"
                                    }`}
                            >
                                Home
                            </Text>
                        ),
                    }}
                />

                {/* Payment */}
                <Tab.Screen
                    name="Payment"
                    component={ProfileScreen}
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
                            <Text
                                className={`text-sm font-JakartaBold mt-1 ${focused ? "text-blue-600 text-md" : "text-gray-400"
                                    }`}
                            >
                                Finance
                            </Text>
                        ),
                    }}
                />

                {/* Spending */}
                <Tab.Screen
                    name="Spending"
                    component={SettingsScreen}
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
                            <Text
                                className={`text-sm font-JakartaBold mt-1 ${focused ? "text-blue-600 font-semibold" : "text-gray-400"
                                    }`}
                            >
                                Passwords
                            </Text>
                        ),
                    }}
                />

                {/* Card */}
                <Tab.Screen
                    name="Card"
                    component={ProfileScreen}
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
                            <Text
                                className={`text-sm font-JakartaBold mt-1 ${focused ? "text-blue-600 font-semibold" : "text-gray-400"
                                    }`}
                            >
                                Tasks
                            </Text>
                        ),
                    }}
                />

                <Tab.Screen
                    name="Sok"
                    component={ProfileScreen}
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
                            <Text
                                className={`text-sm font-JakartaBold mt-1 ${focused ? "text-blue-600 font-semibold" : "text-gray-400"
                                    }`}
                            >
                                Setting
                            </Text>
                        ),
                    }}
                />
            </Tab.Navigator>
        </SafeAreaView>
    );
}
