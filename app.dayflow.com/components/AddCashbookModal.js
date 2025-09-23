import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import { X, Calendar, Tag } from 'lucide-react-native';

const AddCashbookModal = ({ visible, onClose, onAddCashbook }) => {
    const [cashbookName, setCashbookName] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [category, setCategory] = useState('');

    const handleAdd = () => {
        if (cashbookName.trim() && category.trim()) {
            onAddCashbook({ 
                name: cashbookName, 
                date: selectedDate,
                category: category 
            });
            setCashbookName('');
            setSelectedDate(new Date().toISOString().split('T')[0]);
            setCategory('');
            onClose();
        }
    };

    return (
        <Modal
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View className="flex-1 bg-black/50 items-center justify-center px-4">
                <View className="bg-white rounded-xl p-6 w-full max-w-md">
                    {/* Header */}
                    <View className="flex-row justify-between items-center mb-6">
                        <Text className="text-black text-xl font-JakartaBold">
                            Add New Cashbook
                        </Text>
                        <TouchableOpacity onPress={onClose}>
                            <X size={24} color="#000000" />
                        </TouchableOpacity>
                    </View>

                    {/* Cashbook Name Input */}
                    <View className="mb-4">
                        <Text className="text-black text-sm font-JakartaBold mb-2">
                            Cashbook Name
                        </Text>
                        <TextInput
                            className="border border-gray-300 rounded-lg p-3 text-black font-Jakarta"
                            placeholder="Enter cashbook name"
                            placeholderTextColor="#9CA3AF"
                            value={cashbookName}
                            onChangeText={setCashbookName}
                        />
                    </View>

                    {/* Date Input */}
                    <View className="mb-4">
                        <Text className="text-black text-sm font-JakartaBold mb-2">
                            Date
                        </Text>
                        <View className="flex-row items-center border border-gray-300 rounded-lg px-3 py-1">
                            <Calendar size={20} color="#6B7280" />
                            <TextInput
                                className="flex-1 ml-3 text-black font-Jakarta"
                                placeholder="YYYY-MM-DD"
                                placeholderTextColor="#9CA3AF"
                                value={selectedDate}
                                onChangeText={setSelectedDate}
                            />
                        </View>
                    </View>

                    {/* Category Input */}
                    <View className="mb-6">
                        <Text className="text-black text-sm font-JakartaBold mb-2">
                            Category
                        </Text>
                        <View className="flex-row items-center border border-gray-300 rounded-lg py-1 px-3">
                            <Tag size={20} color="#6B7280" />
                            <TextInput
                                className="flex-1 ml-3 text-black font-Jakarta"
                                placeholder="Enter category"
                                placeholderTextColor="#9CA3AF"
                                value={category}
                                onChangeText={setCategory}
                            />
                        </View>
                    </View>

                    {/* Action Buttons */}
                    <View className="flex-row justify-end gap-3">
                        <TouchableOpacity
                            onPress={onClose}
                            className="bg-gray-100 rounded-lg px-6 py-3"
                        >
                            <Text className="text-black font-JakartaBold">
                                Cancel
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleAdd}
                            className="bg-[#2563eb] rounded-lg px-6 py-3"
                        >
                            <Text className="text-white font-JakartaBold">
                                Add Cashbook
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default AddCashbookModal;