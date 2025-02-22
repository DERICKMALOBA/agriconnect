import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
  StatusBar,
} from "react-native";
import {
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const categories = [
  {
    name: "Crops & Seeds",
    icon: <MaterialCommunityIcons name="sprout" size={30} color="green" />,
  },
  {
    name: "Land for Lease",
    icon: <FontAwesome5 name="globe" size={30} color="brown" />,
  },
  {
    name: "Equipment for Lease",
    icon: <MaterialCommunityIcons name="tractor" size={30} color="black" />,
  },
  {
    name: "Agrochemicals",
    icon: <MaterialCommunityIcons name="flask" size={30} color="red" />,
  },
  {
    name: "Animals for Sale",
    icon: <MaterialCommunityIcons name="cow" size={30} color="brown" />,
  },
  {
    name: "Farm Services",
    icon: <Ionicons name="people" size={30} color="blue" />,
  },
];

const featuredListings = [
  {
    id: "1",
    title: "Organic Maize",
    price: "$200 per ton",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    title: "Tractor for Rent",
    price: "$50/day",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    title: "Irrigation Pump",
    price: "$80/day",
    image: "https://via.placeholder.com/150",
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#4CAF50" />

      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 15,
          backgroundColor: "#4CAF50",
          elevation: 5,
          paddingTop: StatusBar.currentHeight,
          width: "100%",
          zIndex: 10,
        }}
      >
          <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: 45,
            height: 45,
            borderRadius: 22,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
        
          <Text style={{ color: "#8b5E3b", fontWeight: "bold", fontSize: 16 }}>
            DM
          </Text>
         
          </View>
          <View style={{ marginLeft: 10, marginTop: 5 }}>
            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
           Hi derick </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Notifications")}
          >
            <Ionicons
              name="notifications-outline"
              size={24}
              color="#fff"
              style={{ marginLeft: 17 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Ionicons
              name="person-outline"
              size={24}
              color="#fff"
              style={{ marginLeft: 17 }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Users")}>
            <Ionicons
              name="bulb-outline"
              size={24}
              color="#fff"
              style={{ marginLeft: 17 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        style={{ flex: 1, paddingHorizontal: 15, backgroundColor: "#e0e0e0" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ padding: 20 }}>
          {/* Categories */}
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginVertical: 12,
              color: "#333",
            }}
          >
            Categories
          </Text>
          <FlatList
            data={categories}
            horizontal
            keyExtractor={(item) => item.name}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  backgroundColor: "#fff",
                  padding: 15,
                  borderRadius: 12,
                  marginRight: 10,
                  alignItems: "center",
                  elevation: 3,
                }}
              >
                {item.icon}
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "500",
                    marginTop: 5,
                    textAlign: "center",
                  }}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            )}
          />

          {/* Featured Listings */}
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginVertical: 12,
              color: "#333",
            }}
          >
            Featured Listings
          </Text>
          <FlatList
            data={featuredListings}
            horizontal
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: "#fff",
                  padding: 12,
                  borderRadius: 12,
                  marginRight: 10,
                  alignItems: "center",
                  elevation: 3,
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{ width: 120, height: 120, borderRadius: 10 }}
                />
                <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 5 }}>
                  {item.title}
                </Text>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#4CAF50" }}
                >
                  {item.price}
                </Text>
              </View>
            )}
          />
        </View>

        {/* Quick Access Buttons */}
        <View style={{ marginVertical: 20, paddingTop: 10, paddingBottom: 10 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 10,
              color: "#333",
            }}
          >
            Quick Access
          </Text>
          {/* First Row */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("SellProduct")}
              style={{
                padding: 12,
                borderRadius: 8,
                width: "48%",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#8b5E3b", fontWeight: "bold" }}>
                Sell a Product
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("LeaseOutLand")}
              style={{
                padding: 12,
                borderRadius: 8,
                width: "48%",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#8b5E3b", fontWeight: "bold" }}>
                List Land
              </Text>
            </TouchableOpacity>
          </View>

          {/* Second Row */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("LeaseOutEquipment")}
              style={{
                padding: 12,
                borderRadius: 8,
                width: "48%",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#8b5E3b", fontWeight: "bold" }}>
                Rent Out Equipment
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Services")}
              style={{
                padding: 12,
                borderRadius: 8,
                width: "48%",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "#8b5E3b", fontWeight: "bold" }}>
                {" "}
                Farm Services
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
