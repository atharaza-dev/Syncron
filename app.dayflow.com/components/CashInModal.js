import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, FlatList } from 'react-native';
import { X, Calendar } from 'lucide-react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const CashInModal = ({ visible, onClose, onAddCashIn }) => {
    const [amount, setAmount] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const categories = ['Salary', 'Freelance', 'Investment', 'Other'];

    const handleKeypadPress = (value) => {
        if (value === 'C') {
            setAmount('');
        } else if (value === '<') {
            setAmount(amount.slice(0, -1));
        } else {
            setAmount(amount + value);
        }
    };

    const handleAdd = () => {
        if (amount && name && category) {
            onAddCashIn({
                amount: parseFloat(amount),
                name,
                category,
                date: date.toISOString().split('T')[0],
            });
            setAmount('');
            setName('');
            setCategory('');
            setDate(new Date());
            onClose();
        }
    };

    return (
        <Modal animationType="slide" transparent={false} visible={visible} onRequestClose={onClose}>
            <View className="flex-1 bg-white">
                {/* Header */}
                <View className="relative bg-white border-b border-slate-200 p-6">
                    <View className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
                    <View className="flex-row justify-between items-center pt-4">
                        <Text className="text-slate-800 text-xl font-bold font-JakartaBold">Add Cash In</Text>
                        <TouchableOpacity onPress={onClose}>
                            <X size={24} color="#64748b" />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Form */}
                <View className="px-6 py-4 flex-1">
                    <View className="mb-4">
                        <Text className="text-slate-600 text-sm font-medium mb-2 font-Jakarta">Name</Text>
                        <TextInput
                            className="border border-slate-200 rounded-lg p-3 text-slate-800 font-Jakarta"
                            placeholder="Enter transaction name"
                            placeholderTextColor="#94a3b8"
                            value={name}
                            onChangeText={setName}
                        />
                    </View>

                    <View className="mb-4">
                        <Text className="text-slate-600 text-sm font-medium mb-2 font-Jakarta">Category</Text>
                        <View className="border border-slate-200 rounded-lg p-3">
                            <FlatList
                                data={categories}
                                horizontal
                                keyExtractor={(item) => item}
                                renderItem={({ item }) => (
                                    <TouchableOpacity
                                        className={`px-4 py-2 mr-2 rounded-lg ${category === item ? 'bg-[#2563eb]' : 'bg-gray-100'
                                            }`}
                                        onPress={() => setCategory(item)}
                                    >
                                        <Text
                                            className={`text-sm font-Jakarta ${category === item ? 'text-white' : 'text-slate-800'
                                                }`}
                                        >
                                            {item}
                                        </Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </View>

                    <View className="mb-4">
                        <Text className="text-slate-600 text-sm font-medium mb-2 font-Jakarta">Date</Text>
                        <TouchableOpacity
                            className="border border-slate-200 rounded-lg p-3 flex-row items-center"
                            onPress={() => setShowDatePicker(true)}
                        >
                            <Calendar size={20} color="#64748b" />
                            <Text className="ml-2 text-slate-800 font-Jakarta">
                                {date.toISOString().split('T')[0]}
                            </Text>
                        </TouchableOpacity>
                        {showDatePicker && (
                            <DateTimePicker
                                value={date}
                                mode="date"
                                display="default"
                                onChange={(event, selectedDate) => {
                                    setShowDatePicker(false);
                                    if (selectedDate) setDate(selectedDate);
                                }}
                            />
                        )}
                    </View>

                    <View className="mb-4">
                        <Text className="text-slate-600 text-sm font-medium mb-2 font-Jakarta">Amount (Rs)</Text>
                        <TextInput
                            className="border border-slate-200 rounded-lg p-3 text-slate-800 font-Jakarta text-right text-xl"
                            value={amount}
                            editable={false}
                            placeholder="0"
                            placeholderTextColor="#94a3b8"
                        />
                    </View>

                    {/* Keypad */}
                    <View className="flex-1 justify-end">
                        <View className="flex-row flex-wrap justify-between">
                            {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '<'].map((key) => (
                                <TouchableOpacity
                                    key={key}
                                    className="w-[30%] bg-gray-100 rounded-lg p-6 m-1 items-center"
                                    onPress={() => handleKeypadPress(key)}
                                >
                                    <Text className="text-slate-800 text-2xl font-JakartaBold">{key}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* Action Buttons */}
                    <View className="flex-row justify-end gap-3 mt-6">
                        <TouchableOpacity
                            onPress={onClose}
                            className="bg-slate-100 rounded-lg px-4 py-4"
                        >
                            <Text className="text-slate-700 font-semibold font-JakartaBold">Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={handleAdd}
                            className="bg-[#2563eb] rounded-lg px-4 py-4"
                        >
                            <Text className="text-white font-semibold font-JakartaBold">Add Cash In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default CashInModal;