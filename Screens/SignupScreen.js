import React, { useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!name || !email || !phone || !password) {
      alert("All fields are required.");
      return;
    }
  
    try {
      const response = await fetch("http://10.0.2.2:8000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, password }),
      });
      
  
      const data = await response.json();
  
      if (response.ok) {
        alert("Signup successful!");
        // Optionally, save the JWT token to local storage for further use
        // AsyncStorage.setItem('token', data.token);
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };
  

  return (
    <View style={{ flex: 1, backgroundColor: "#E8F5E9", justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold", color: "#2E7D32", textAlign: "center", marginBottom: 20 }}>
        Create an Account
      </Text>

      {/* Name Input */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, backgroundColor: "#FFF", borderRadius: 10, borderWidth: 1, borderColor: "#A5D6A7" }}>
        <MaterialIcons name="person-2" size={24} color="black" style={{ marginLeft: 10 }} />
        <TextInput
          style={{
            flex: 1,
            padding: 12,
            fontSize: 16,
            backgroundColor: "#FFF",
            borderRadius: 10,
            marginLeft: 5,
          }}
          placeholder="Name"
          placeholderTextColor="#666"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Phone Input */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, backgroundColor: "#FFF", borderRadius: 10, borderWidth: 1, borderColor: "#A5D6A7" }}>
        <AntDesign name="phone" size={24} color="black" style={{ marginLeft: 10 }} />
        <TextInput
          style={{
            flex: 1,
            padding: 12,
            fontSize: 16,
            backgroundColor: "#FFF",
            borderRadius: 10,
            marginLeft: 5,
          }}
          placeholder="Phone"
          placeholderTextColor="#666"
          value={phone}
          onChangeText={setPhone}
          keyboardType="number-pad"
        />
      </View>

      {/* Email Input */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15, backgroundColor: "#FFF", borderRadius: 10, borderWidth: 1, borderColor: "#A5D6A7" }}>
        <Fontisto name="email" size={24} color="black" style={{ marginLeft: 10 }} />
        <TextInput
          style={{
            flex: 1,
            padding: 12,
            fontSize: 16,
            backgroundColor: "#FFF",
            borderRadius: 10,
            marginLeft: 5,
          }}
          placeholder="Email"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      {/* Password Input */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, backgroundColor: "#FFF", borderRadius: 10, borderWidth: 1, borderColor: "#A5D6A7" }}>
        <AntDesign name="lock" size={24} color="black" style={{ marginLeft: 10 }} />
        <TextInput
          style={{
            flex: 1,
            padding: 12,
            fontSize: 16,
            backgroundColor: "#FFF",
            borderRadius: 10,
            marginLeft: 5,
          }}
          placeholder="Password"
          placeholderTextColor="#666"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
      </View>

      {/* Signup Button */}
      <TouchableOpacity 
        style={{
          backgroundColor: "#2E7D32", 
          padding: 15, 
          borderRadius: 10, 
          alignItems: "center",
        }} 
        onPress={handleSignup}
      >
        <Text style={{ color: "#FFF", fontSize: 18, fontWeight: "bold" }}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
