import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
    Modal,
    FlatList,
} from 'react-native';
import { Wallet2, RefreshCcw, Plus, SquarePenIcon, Eye, Trash2, Calendar, BanknoteArrowDown, BanknoteArrowUp, X } from 'lucide-react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import logo from '../../assets/images/logoDark.png';
import avatar from '../../assets/images/avatar.png';
import CashInModal from '../../components/CashInModal';
import CashOutModal from '../../components/CashOutModal';

export default function HomeScreen({ navigation }) {
    const [isCashInModalVisible, setIsCashInModalVisible] = useState(false);
    const [isCashOutModalVisible, setIsCashOutModalVisible] = useState(false);
    const [isEditExpenseModalVisible, setIsEditExpenseModalVisible] = useState(false);
    const [selectedExpense, setSelectedExpense] = useState(null);
    const [expenses, setExpenses] = useState([
        {
            id: '1',
            name: 'Expense Name',
            category: 'Expense Category',
            amount: 342399,
            date: '2025-08-04',
            type: 'Cash In',
        },
    ]);
    const [categories, setCategories] = useState(['Food', 'Transport', 'Utilities', 'Salary', 'Freelance', 'Investment', 'Other']);
    const [editAmount, setEditAmount] = useState('');
    const [editName, setEditName] = useState('');
    const [editCategory, setEditCategory] = useState('');
    const [newCategory, setNewCategory] = useState('');
    const [editDate, setEditDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    // Initialize form with expense data when modal opens
    useEffect(() => {
        if (selectedExpense && isEditExpenseModalVisible) {
            setEditAmount(selectedExpense.amount?.toString() || '');
            setEditName(selectedExpense.name || '');
            setEditCategory(selectedExpense.category || '');
            setNewCategory('');
            setEditDate(selectedExpense.date ? new Date(selectedExpense.date) : new Date());
        }
    }, [selectedExpense, isEditExpenseModalVisible]);

    const handleAddCashIn = (cashInData) => {
        setExpenses([...expenses, { ...cashInData, id: `${Date.now()}`, type: 'Cash In' }]);
    };

    const handleAddCashOut = (cashOutData) => {
        setExpenses([...expenses, { ...cashOutData, id: `${Date.now()}`, type: 'Cash Out' }]);
    };

    const handleUpdateExpense = () => {
        if (editAmount && editName && (editCategory || newCategory)) {
            const finalCategory = newCategory || editCategory;
            if (newCategory && !categories.includes(newCategory)) {
                setCategories([...categories, newCategory]);
            }
            setExpenses(
                expenses.map((expense) =>
                    expense.id === selectedExpense.id
                        ? {
                            ...expense,
                            amount: parseFloat(editAmount),
                            name: editName,
                            category: finalCategory,
                            date: editDate.toISOString().split('T')[0],
                        }
                        : expense
                )
            );
            setIsEditExpenseModalVisible(false);
            setNewCategory('');
        }
    };

    const handleDeleteExpense = () => {
        setExpenses(expenses.filter((expense) => expense.id !== selectedExpense.id));
        setIsEditExpenseModalVisible(false);
        setNewCategory('');
    };

    const openEditModal = (expense) => {
        setSelectedExpense(expense);
        setIsEditExpenseModalVisible(true);
    };

    const handleKeypadPress = (value) => {
        if (value === 'C') {
            setEditAmount('');
        } else if (value === '<') {
            setEditAmount(editAmount.slice(0, -1));
        } else {
            setEditAmount(editAmount + value);
        }
    };

    return (
        <View className="flex-1 bg-white">
            <StatusBar barStyle="dark-content" />

            <View className="flex-1">
                {/* Header Section */}
                <View style={{ height: 180 }}>
                    <View className="flex-row items-center justify-between px-8 pt-12">
                        <Image
                            source={logo}
                            className="w-[100px] h-12 rounded-full"
                            resizeMode="contain"
                        />
                        <Image
                            source={avatar}
                            className="w-12 h-12 rounded-full"
                            resizeMode="contain"
                        />
                    </View>
                    <View className="items-start mx-8 pt-4 pb-2">
                        <View className="flex-row items-center justify-between w-full mb-1">
                            <View className="flex-row items-center mb-2">
                                <Calendar size={20} color="black" />
                                <Text className="text-black text-base font-medium ml-2 font-JakartaBold">
                                    28/05/2025
                                </Text>
                            </View>
                            <View className="flex-row items-center space-x-2">
                                <View className="w-2 h-2 bg-green-500 rounded-full" />
                                <Text className="text-slate-500 text-xs font-medium ml-2">Active</Text>
                            </View>
                        </View>
                        <Text className="text-black text-2xl font-light tracking-wide font-JakartaBold">
                            Cashbook Name
                        </Text>
                        <Text className="text-slate-500 text-sm font-Jakarta mb-2">Cashbook Category</Text>
                    </View>
                </View>

                <View
                    className="mx-8 bg-white rounded-xl border border-slate-200 px-2 py-6 shadow-lg"
                >
                    <View className="flex-row justify-between">
                        <TouchableOpacity
                            className="items-center flex-1 border-l-0 border-slate-200"
                            onPress={() => setIsCashOutModalVisible(true)}
                        >
                            <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center mb-2">
                                <BanknoteArrowDown size={20} color="#2563eb" />
                            </View>
                            <Text className="text-gray-700 text-sm font-medium font-JakartaBold">
                                Cash Out
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            className="items-center flex-1 border-l border-slate-200"
                            onPress={() => setIsCashInModalVisible(true)}
                        >
                            <View className="w-12 h-12 bg-gray-100 rounded-full items-center justify-center mb-2">
                                <BanknoteArrowUp size={20} color="#2563eb" />
                            </View>
                            <Text className="text-gray-700 text-sm font-medium font-JakartaBold">
                                Cash In
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 60 }}
                    style={{ paddingTop: 20 }}
                >
                    <View className="px-6">
                        {expenses.map((expense) => (
                            <TouchableOpacity
                                key={expense.id}
                                className="mx-2 mb-4"
                                onPress={() => openEditModal(expense)}
                            >
                                <View className="bg-white border border-slate-200 shadow-lg rounded-lg p-5 relative overflow-hidden">
                                    <View className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
                                    <View className="flex-row items-center justify-between mb-4 pt-2">
                                        <View className="flex-row items-center space-x-2">
                                            <Calendar size={16} color="#64748b" />
                                            <Text className="text-slate-600 text-sm font-medium ml-2">{expense.date}</Text>
                                        </View>
                                        <View className="flex-row items-center space-x-2">
                                            <View className="w-2 h-2 bg-green-500 rounded-full" />
                                            <Text className="text-slate-500 text-xs font-medium ml-2">{expense.type}</Text>
                                        </View>
                                    </View>
                                    <View className="flex-row items-center justify-between space-x-3">
                                        <View className="flex-1">
                                            <Text className="text-slate-800 text-xl font-JakartaBold tracking-tight">
                                                {expense.name}
                                            </Text>
                                            <Text className="text-slate-500 text-sm font-Jakarta">{expense.category}</Text>
                                        </View>
                                        <View className="text-right flex flex-row">
                                            <Text className="text-slate-800 text-xl font-Jakarta tracking-tight mr-1">
                                                Rs
                                            </Text>
                                            <Text className="text-slate-800 text-xl font-JakartaBold">{expense.amount}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>

            {/* Modals */}
            <CashInModal
                visible={isCashInModalVisible}
                onClose={() => setIsCashInModalVisible(false)}
                onAddCashIn={handleAddCashIn}
            />
            <CashOutModal
                visible={isCashOutModalVisible}
                onClose={() => setIsCashOutModalVisible(false)}
                onAddCashOut={handleAddCashOut}
            />

            {/* Edit Expense Modal */}
            <Modal
                animationType="slide"
                transparent={false}
                visible={isEditExpenseModalVisible}
                onRequestClose={() => setIsEditExpenseModalVisible(false)}
            >
                <View className="flex-1 bg-white">
                    <View className="relative bg-white border-b border-slate-200 p-6">
                        <View className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500" />
                        <View className="flex-row justify-between items-center pt-4">
                            <Text className="text-slate-800 text-xl font-bold font-JakartaBold">Edit Expense</Text>
                            <TouchableOpacity onPress={() => setIsEditExpenseModalVisible(false)}>
                                <X size={24} color="#64748b" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className="px-6 py-4 flex-1">
                        <View className="mb-4">
                            <Text className="text-slate-600 text-sm font-medium mb-2 font-Jakarta">Name</Text>
                            <TextInput
                                className="border border-slate-200 rounded-lg p-3 text-slate-800 font-Jakarta"
                                placeholder="Enter transaction name"
                                placeholderTextColor="#94a3b8"
                                value={editName}
                                onChangeText={setEditName}
                            />
                        </View>

                        <View className="mb-4">
                            <Text className="text-slate-600 text-sm font-medium mb-2 font-Jakarta">Category</Text>
                            <View className="border border-slate-200 rounded-lg p-3">
                                <FlatList
                                    data={categories}
                                    numColumns={3}
                                    keyExtractor={(item) => item}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity
                                            className={`flex-1 m-1 p-2 rounded-lg ${editCategory === item ? 'bg-[#2563eb]' : 'bg-gray-100'
                                                }`}
                                            onPress={() => {
                                                setEditCategory(item);
                                                setNewCategory('');
                                            }}
                                        >
                                            <Text
                                                className={`text-sm font-Jakarta text-center ${editCategory === item ? 'text-white' : 'text-slate-800'
                                                    }`}
                                            >
                                                {item}
                                            </Text>
                                        </TouchableOpacity>
                                    )}
                                />
                                <TextInput
                                    className="border border-slate-200 rounded-lg p-3 mt-2 text-slate-800 font-Jakarta"
                                    placeholder="Add new category"
                                    placeholderTextColor="#94a3b8"
                                    value={newCategory}
                                    onChangeText={(text) => {
                                        setNewCategory(text);
                                        setEditCategory('');
                                    }}
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
                                    {editDate.toISOString().split('T')[0]}
                                </Text>
                            </TouchableOpacity>
                            {showDatePicker && (
                                <DateTimePicker
                                    value={editDate}
                                    mode="date"
                                    display="default"
                                    onChange={(event, selectedDate) => {
                                        setShowDatePicker(false);
                                        if (selectedDate) setEditDate(selectedDate);
                                    }}
                                />
                            )}
                        </View>

                        <View className="mb-4">
                            <Text className="text-slate-600 text-sm font-medium mb-2 font-Jakarta">Amount (Rs)</Text>
                            <TextInput
                                className="border border-slate-200 rounded-lg p-3 text-slate-800 font-Jakarta text-right text-xl"
                                value={editAmount}
                                editable={false}
                                placeholder="0"
                                placeholderTextColor="#94a3b8"
                            />
                        </View>

                        <View className="flex-1 justify-end">
                            <View className="flex-row flex-wrap justify-between">
                                {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '<'].map((key) => (
                                    <TouchableOpacity
                                        key={key}
                                        className="w-[30%] bg-gray-100 rounded-lg p-4 m-1 items-center"
                                        onPress={() => handleKeypadPress(key)}
                                    >
                                        <Text className="text-slate-800 text-xl font-JakartaBold">{key}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>

                        <View className="flex-row justify-between space-x-3 mt-6">
                            <TouchableOpacity
                                onPress={handleDeleteExpense}
                                className="bg-red-500 rounded-lg px-4 py-2 flex-row items-center"
                            >
                                <Trash2 size={18} color="white" />
                                <Text className="text-white font-semibold font-Jakarta ml-2">Delete</Text>
                            </TouchableOpacity>
                            <View className="flex-row gap-3">
                                <TouchableOpacity
                                    onPress={() => setIsEditExpenseModalVisible(false)}
                                    className="bg-slate-100 rounded-lg px-4 py-2"
                                >
                                    <Text className="text-slate-700 font-semibold font-Jakarta">Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={handleUpdateExpense}
                                    className="bg-[#2563eb] rounded-lg px-4 py-2"
                                >
                                    <Text className="text-white font-semibold font-Jakarta">Update Expense</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}