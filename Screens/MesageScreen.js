import React from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const chats = [
  { id: '1', name: 'John Doe', lastMessage: 'Hello, is the tractor available?', unread: 2, image: require('../assets/user1.jpg') },
  { id: '2', name: 'Jane Smith', lastMessage: 'I’m interested in the land for lease.', unread: 0, image: require('../assets/user2.jpg') },
  { id: '3', name: 'Supplier AgriMart', lastMessage: 'We have the fertilizers in stock.', unread: 1, image: require('../assets/user3.jpg') },
];

export default function MessageScreen() {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput placeholder="Search chats..." style={styles.searchInput} />
      </View>
      
      {/* Chat List */}
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.chatItem}>
            <Image source={item.image} style={styles.profileImage} />
            <View style={styles.chatDetails}>
              <Text style={styles.chatName}>{item.name}</Text>
              <Text style={styles.lastMessage}>{item.lastMessage}</Text>
            </View>
            {item.unread > 0 && (
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadText}>{item.unread}</Text>
              </View>
            )}
          </TouchableOpacity>
        )}
      />
      
      {/* New Chat Button */}
      <TouchableOpacity style={styles.newChatButton}>
        <Ionicons name="chatbubble-ellipses" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  searchIcon: { marginRight: 5 },
  searchInput: { flex: 1, height: 40 },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  chatDetails: { flex: 1 },
  chatName: { fontWeight: 'bold', fontSize: 16 },
  lastMessage: { color: 'gray', marginTop: 2 },
  unreadBadge: {
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
  newChatButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 30,
    elevation: 5,
  },
});