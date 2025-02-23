import React, { useState } from "react";
import {  Text, TextInput, ScrollView, TouchableOpacity, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";


import * as ImagePicker from "expo-image-picker";

const SellProductScreen = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Crops");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [images, setImages] = useState([]);

  // Image Picker Function
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImages([...images, result.assets[0].uri]);
    }
  };

  // Handle Submit
  const handleSubmit = async () => {
    if (!name || !description || !category || !price || !quantity || !location || !email || !phone) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    try {
      let formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("price", price);
      formData.append("quantity", quantity);
      formData.append("location", location);
      formData.append("email", email);
      formData.append("phone", phone);

      images.forEach((image, index) => {
        formData.append("images", {
          uri: image,
          name: `image${index}.jpg`,
          type: "image/jpeg",
        });
      });

      const response = await fetch("https://your-api-url.com/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert("Success", "Product listed successfully!");
      } else {
        Alert.alert("Error", result.message || "Something went wrong");
      }
    } catch (error) {
      Alert.alert("Error", "Failed to submit product");
      console.error(error);
    }
  };


  return (
    <ScrollView style={{ padding: 20, backgroundColor: "#f4f4f4" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>Sell Your Product</Text>

      {/* Product Name */}
      <Text style={{ fontSize: 16, marginTop: 10 }}>Product Name</Text>
      <TextInput style={styles.input} placeholder="Enter product name" value={name} onChangeText={setName} />

      {/* Description */}
      <Text style={{ fontSize: 16, marginTop: 10 }}>Description</Text>
      <TextInput
        style={styles.textarea}
        placeholder="Enter product description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* Category Dropdown */}
      <Text style={{ fontSize: 16, marginTop: 10 }}>Category</Text>
      <Picker
        selectedValue={category}
        style={styles.picker}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        <Picker.Item label="Crops" value="Crops" />
        <Picker.Item label="Livestock" value="Livestock" />
        <Picker.Item label="Animal Products" value="Animal Products" />
        <Picker.Item label=" Farm Inputs" value="Farm Inputs" />
        <Picker.Item label=" Forestry & Natural Products" value="Forestry & Natural Products" />
      </Picker>

      {/* Price */}
      <Text style={{ fontSize: 16, marginTop: 10 }}>Price</Text>
      <TextInput style={styles.input} placeholder="Enter price" value={price} onChangeText={setPrice} keyboardType="numeric" />

      {/* Quantity */}
      <Text style={{ fontSize: 16, marginTop: 10 }}>Quantity</Text>
      <TextInput style={styles.input} placeholder="Enter quantity" value={quantity} onChangeText={setQuantity} keyboardType="numeric" />

      {/* Location */}
      <Text style={{ fontSize: 16, marginTop: 10 }}>Location</Text>
      <TextInput style={styles.input} placeholder="Enter location" value={location} onChangeText={setLocation} />

      {/* Upload Images */}
      <Text style={{ fontSize: 16, marginTop: 10 }}>Images</Text>
      <TouchableOpacity style={styles.uploadBtn} onPress={pickImage}>
        <Text style={{ color: "white" }}>Upload Image</Text>
      </TouchableOpacity>
      <ScrollView horizontal>
        {images.map((img, index) => (
          <Image key={index} source={{ uri: img }} style={styles.image} />
        ))}
      </ScrollView>

      {/* Contact Information */}
      <Text style={{ fontSize: 16, marginTop: 10 }}>Email</Text>
      <TextInput style={styles.input} placeholder="Enter email" value={email} onChangeText={setEmail} keyboardType="email-address" />

      <Text style={{ fontSize: 16, marginTop: 10 }}>Phone Number</Text>
      <TextInput style={styles.input} placeholder="Enter phone number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitBtn}>
        <Text style={{ color: "white", fontSize: 16 }}  onPress={handleSubmit} >Submit Listing</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = {
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  textarea: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    height: 80,
    textAlignVertical: "top",
  },
  picker: {
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  uploadBtn: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 5,
  },
  submitBtn: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 5,
  },
};

export default SellProductScreen;
