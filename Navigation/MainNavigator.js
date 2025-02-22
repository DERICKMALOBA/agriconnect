// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
// import { Ionicons } from "@expo/vector-icons";

// import HomeScreen from "../Screens/HomeScreen";
// import MarketplaceScreen from "../Screens/MarketplaceScreen";
// import LoansScreen from "../Screens/LoansScreen";
// import MessagesScreen from "../Screens/MesageScreen";
// import ProfileScreen from "../Screens/ProfileScreen";
// import SellProduct from "../Screens/Sell/SellProduct";
// import LeaseOutLand from "../Screens/Sell/LeaseOutLand";
// import Services from "../Screens/Services";
// import LeaseOutEquipment from "../Screens/Sell/LeaseOutEquipment";

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();
// const MarketplaceStack = createStackNavigator();

// function MainTabs() {
//   return (
//     <Tab.Navigator
//     screenOptions={({ route }) => ({
//       headerShown: false,
//       tabBarStyle: { backgroundColor: 'white' }, // Default background
//       tabBarActiveTintColor: 'blue', // Active tab icon color
//       tabBarInactiveTintColor: 'gray', // Inactive tab icon color
//       tabBarIcon: ({ color, size }) => {
//         let iconName;
  
//         if (route.name === 'Home') {
//           iconName = 'home-outline';
//         } else if (route.name === 'Marketplace') {
//           iconName = 'cart-outline';
//         } else if (route.name === 'Loans') {
//           iconName = 'wallet-outline';
//         } else if (route.name === 'Messages') {
//           iconName = 'chatbubbles-outline';
//         }
  
//         return <Ionicons name={iconName} size={size} color={color} />;
//       },
//       tabBarLabelStyle: {
//         fontSize: 12,
//         fontWeight: 'bold',
//       },
//     })}
//   >
//     <Tab.Screen name="Home" component={HomeScreen} />
//     <Tab.Screen name="Marketplace" component={MarketplaceStackNavigator} />
//     <Tab.Screen name="Loans" component={LoansScreen} />
//     <Tab.Screen name="Messages" component={MessagesScreen} />
//   </Tab.Navigator>
  
//   );
// }

// function MarketplaceStackNavigator() {
//   return (
//     <MarketplaceStack.Navigator screenOptions={{ headerShown: false }}>
//       <MarketplaceStack.Screen name="MarketplaceMain" component={MarketplaceScreen} />
//       <MarketplaceStack.Screen name="SellProduct" component={SellProduct} />
//       <MarketplaceStack.Screen name="LeaseOutLand" component={LeaseOutLand} />
//       <MarketplaceStack.Screen name="Services" component={Services} />
//       <MarketplaceStack.Screen name="LeaseOutEquipment" component={LeaseOutEquipment} />
//     </MarketplaceStack.Navigator>
//   );
// }

// function TabLayout() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="MainTabs" component={MainTabs} />
//       <Stack.Screen name="Profile" component={ProfileScreen} />
//       <Stack.Screen name="MarketplaceStack" component={MarketplaceStackNavigator} />

//     </Stack.Navigator>
//   );
// }

// export default TabLayout;
