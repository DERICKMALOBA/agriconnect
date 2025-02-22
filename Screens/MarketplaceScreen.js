import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categories = ["Crops", "Equipment", "Agrochemicals", "Land", "Farm Services"];
const featuredListings = [
  { id: '1', title: 'Fresh Tomatoes', price: '$20 per kg', location: 'Nairobi', image: require('../assets/tomatoes.jpg') },
  { id: '2', title: 'Tractor for Hire', price: '$50 per hour', location: 'Eldoret', image: require('../assets/tractor.jpg') },
  { id: '3', title: 'Organic Fertilizer', price: '$15 per bag', location: 'Kisumu', image: require('../assets/fertilizer.jpg') },
];

const MarketplaceScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#f5f5f5', padding: 10 }}>
      {/* Top Navigation & Search */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <TextInput
          placeholder="Search products, land, or services"
          style={{ flex: 1, backgroundColor: 'white', padding: 10, borderRadius: 8 }}
        />
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <Ionicons name="filter" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Category Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={{ marginRight: 10, backgroundColor: '#fff', padding: 10, borderRadius: 20 }}>
            <Text>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Featured Listings */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>Featured Listings</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={featuredListings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: 'white', marginRight: 10, padding: 10, borderRadius: 10, width: 200 }}>
            <Image source={item.image} style={{ width: '100%', height: 100, borderRadius: 10 }} />
            <Text style={{ fontWeight: 'bold', marginVertical: 5 }}>{item.title}</Text>
            <Text>{item.price}</Text>
            <Text>{item.location}</Text>
            <TouchableOpacity style={{ marginTop: 5, backgroundColor: '#28a745', padding: 5, borderRadius: 5 }}>
              <Text style={{ color: 'white', textAlign: 'center' }}>Buy/Negotiate</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Quick Sell Section */}
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginVertical: 10 }}>Quick Sell</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity style={{ backgroundColor: '#ffa500', padding: 10, borderRadius: 8, flex: 1, marginRight: 5 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Sell a Product</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#17a2b8', padding: 10, borderRadius: 8, flex: 1, marginLeft: 5 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>List Land</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MarketplaceScreen;
