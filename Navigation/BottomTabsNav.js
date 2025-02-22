import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

// Import Screens
import HomeScreen from "../Screens/HomeScreen";
import MarketplaceScreen from "../Screens/MarketplaceScreen";
import LoansScreen from "../Screens/LoansScreen";
import MessagesScreen from "../Screens/MesageScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import Services from "../Screens/Services";
import SellProduct from "../Screens/Sell/SellProduct";
import LeaseOutLand from "../Screens/Sell/LeaseOutLand";
import LeaseOutEquipment from "../Screens/Sell/LeaseOutEquipment";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// ✅ Stack Navigator (Includes All Screens with Bottom Tabs)
function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MarketplaceScreen" component={MarketplaceScreen} />
      <Stack.Screen name="LoansScreen" component={LoansScreen} />
      <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="Services" component={Services} />
      <Stack.Screen name="SellProduct" component={SellProduct} />
      <Stack.Screen name="LeaseOutLand" component={LeaseOutLand} />
      <Stack.Screen name="LeaseOutEquipment" component={LeaseOutEquipment} />
    </Stack.Navigator>
  );
}

// ✅ Bottom Tabs (Always Visible Except on Login & Register)
export default function BottomTabsNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: "white" },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Marketplace":
              iconName = "cart-outline";
              break;
            case "Loans":
              iconName = "wallet-outline";
              break;
            case "Messages":
              iconName = "chatbubbles-outline";
              break;
            default:
              iconName = "ellipse-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
      })}
    >
      <Tab.Screen name="Home" component={MainStack} />
    <Tab.Screen name="Marketplace" component={MarketplaceScreen} />
    <Tab.Screen name="Loans" component={LoansScreen} />
    <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
}
