import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Import Screens
import LoginScreen from "../Screens/LoginScreen";
import SignupScreen from "../Screens/SignupScreen";
import BottomTabsNavigator from "./BottomTabsNav"; // Import Bottom Tabs

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Authentication Screens (No Bottom Tabs) */}
        <Stack.Screen name="Main" component={BottomTabsNavigator} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />

        {/* Main App (Includes Bottom Tabs & All Screens) */}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
