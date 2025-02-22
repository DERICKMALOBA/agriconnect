import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const experts = [
  { id: "1", name: "Dr. Jane Smith", expertise: "Crop Science", image: "https://via.placeholder.com/50" },
  { id: "2", name: "John Doe", expertise: "Livestock Management", image: "https://via.placeholder.com/50" },
  { id: "3", name: "Emily Johnson", expertise: "Agri-Business", image: "https://via.placeholder.com/50" },
];

const ExpertsScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");

  const filteredExperts = experts.filter(expert =>
    expert.name.toLowerCase().includes(search.toLowerCase()) ||
    expert.expertise.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View className="flex-1 bg-gray-100 p-4">
      {/* Search Bar */}
      <View className="flex-row items-center bg-white p-2 rounded-md mb-4 shadow-md">
        <Ionicons name="search-outline" size={20} color="gray" />
        <TextInput
          className="flex-1 ml-2"
          placeholder="Search experts..."
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Experts List */}
      <FlatList
        data={filteredExperts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View className="bg-white p-4 rounded-md mb-2 flex-row items-center shadow-md">
            <Image source={{ uri: item.image }} className="w-12 h-12 rounded-full" />
            <View className="ml-4 flex-1">
              <Text className="text-lg font-bold">{item.name}</Text>
              <Text className="text-gray-600">{item.expertise}</Text>
            </View>
            <TouchableOpacity
              className="bg-blue-500 px-3 py-1 rounded-md"
              onPress={() => navigation.navigate("ChatScreen", { expert: item })}
            >
              <Text className="text-white">Chat</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ExpertsScreen;
