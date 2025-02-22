import React, { useState } from "react";
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ProfileScreen = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ScrollView className="flex-1 bg-gray-100 p-4">
      {/* Profile Header */}
      <View className="items-center mb-4">
        <Image
          source={{ uri: "https://via.placeholder.com/100" }}
          className="w-24 h-24 rounded-full"
        />
        <TouchableOpacity>
          <Text className="text-blue-500 mt-2">Change Profile Picture</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Details */}
      <View className="bg-white p-4 rounded-lg shadow-md">
        <Text className="text-lg font-bold mb-2">Basic Information</Text>
        <TextInput className="border p-2 rounded-md mb-2" placeholder="Full Name" />
        <TextInput className="border p-2 rounded-md mb-2" placeholder="Username" />
        <TextInput className="border p-2 rounded-md mb-2" placeholder="Email" />
        <TextInput className="border p-2 rounded-md mb-2" placeholder="Phone Number" />
        <TextInput className="border p-2 rounded-md mb-2" placeholder="Location" />
        <TextInput className="border p-2 rounded-md mb-2" placeholder="Bio" multiline />
      </View>

      {/* Business & Marketplace */}
      <View className="bg-white p-4 mt-4 rounded-lg shadow-md">
        <Text className="text-lg font-bold mb-2">Business & Marketplace</Text>
        <TouchableOpacity className="flex-row items-center mb-2">
          <Ionicons name="pricetag-outline" size={20} color="black" />
          <Text className="ml-2">Listed Products for Sale</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center mb-2">
          <Ionicons name="cart-outline" size={20} color="black" />
          <Text className="ml-2">Pending Orders</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center">
          <Ionicons name="wallet-outline" size={20} color="black" />
          <Text className="ml-2">Transaction History</Text>
        </TouchableOpacity>
      </View>

      {/* Financial & Support */}
      <View className="bg-white p-4 mt-4 rounded-lg shadow-md">
        <Text className="text-lg font-bold mb-2">Financial & Support</Text>
        <TouchableOpacity className="flex-row items-center mb-2">
          <Ionicons name="cash-outline" size={20} color="black" />
          <Text className="ml-2">Wallet & Payment Info</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center mb-2">
          <Ionicons name="shield-checkmark-outline" size={20} color="black" />
          <Text className="ml-2">Loan & Insurance Info</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center">
          <Ionicons name="help-circle-outline" size={20} color="black" />
          <Text className="ml-2">Support & Help Center</Text>
        </TouchableOpacity>
      </View>

      {/* Settings & Preferences */}
      <View className="bg-white p-4 mt-4 rounded-lg shadow-md">
        <Text className="text-lg font-bold mb-2">Settings & Preferences</Text>
        <TouchableOpacity className="flex-row items-center mb-2">
          <Ionicons name="lock-closed-outline" size={20} color="black" />
          <Text className="ml-2">Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center mb-2">
          <Ionicons name="notifications-outline" size={20} color="black" />
          <Text className="ml-2">Notification Preferences</Text>
        </TouchableOpacity>
        
        {/* Dark Mode Toggle */}
        <View className="flex-row justify-between items-center mb-2">
          <View className="flex-row items-center">
            <Ionicons name="moon-outline" size={20} color="black" />
            <Text className="ml-2">Dark Mode</Text>
          </View>
          <Switch value={darkMode} onValueChange={() => setDarkMode(!darkMode)} />
        </View>

        <TouchableOpacity className="flex-row items-center">
          <Ionicons name="trash-outline" size={20} color="red" />
          <Text className="ml-2 text-red-500">Delete Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfileScreen;
