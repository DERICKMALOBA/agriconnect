import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle Firebase or backend login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>

      {/* Email Input with Icon */}
      <View style={styles.inputContainer}>
        <Fontisto name="email" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      {/* Password Input with Icon */}
      <View style={styles.inputContainer}>
        <AntDesign name="lock" size={24} color="black" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#666"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupButtonText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

// 🌿 Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F5E9', // Light green background
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2E7D32', // Dark green
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#A5D6A7', // Light green border
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#2E7D32', // Green
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: 'transparent',
    padding: 10,
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#2E7D32', // Green text
    fontSize: 16,
    fontWeight: 'bold',
  },
});
