import React, { useState } from "react";
import {
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  View,
  Platform,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as ImagePicker from "expo-image-picker";

const LeaseOutLand = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [landSize, setLandSize] = useState("");
  const [soilType, setSoilType] = useState("");
  const [leaseStartDate, setLeaseStartDate] = useState(new Date());
  const [leaseEndDate, setLeaseEndDate] = useState(new Date());
  const [isStartDatePickerVisible, setStartDatePickerVisibility] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [contactInfo, setContactInfo] = useState("");
  const [images, setImages] = useState([]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
    });
    if (!result.canceled) {
      setImages([...images, ...result.assets.map((asset) => asset.uri)]);
    }
  };

  const handleConfirm = (selectedDate, type) => {
    if (type === "start") {
      setStartDatePickerVisibility(false);
      setLeaseStartDate(selectedDate);
    } else {
      setEndDatePickerVisibility(false);
      setLeaseEndDate(selectedDate);
    }
  };

  const handleSubmit = async () => {
    if (
      !title ||
      !location ||
      !landSize ||
      !soilType ||
      !leaseStartDate ||
      !leaseEndDate ||
      !price ||
      !contactInfo
    ) {
      Alert.alert("Error", "Please fill in all required fields.");
      return;
    }
    const landData = {
      title,
      location,
      landSize,
      soilType,
      leaseStartDate,
      leaseEndDate,
      price,
      description,
      contactInfo,
      images,
    };
    console.log("Submitting", landData);
    try {
      const response = await fetch("https://your-backend-api.com/lease", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(landData),
      });
      await response.json();
      Alert.alert("Success", "Listing submitted successfully!");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to submit listing.");
    }
  };

  return (
    <ScrollView style={{ padding: 20, backgroundColor: "#f4f4f4" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Lease Out Land
      </Text>
      <TextInput
        style={inputStyle}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={inputStyle}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={inputStyle}
        placeholder="Land Size (Acres/Hectares)"
        value={landSize}
        onChangeText={setLandSize}
        keyboardType="numeric"
      />
      <TextInput
        style={inputStyle}
        placeholder="Soil Type (Loamy, Sandy, etc.)"
        value={soilType}
        onChangeText={setSoilType}
      />

      {/* Lease Start Date Picker */}
      <TouchableOpacity onPress={() => setStartDatePickerVisibility(true)} style={inputStyle}>
        <Text>{leaseStartDate.toDateString()}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isStartDatePickerVisible}
        mode="date"
        onConfirm={(date) => handleConfirm(date, "start")}
        onCancel={() => setStartDatePickerVisibility(false)}
      />

      {/* Lease End Date Picker */}
      <TouchableOpacity onPress={() => setEndDatePickerVisibility(true)} style={inputStyle}>
        <Text>{leaseEndDate.toDateString()}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        isVisible={isEndDatePickerVisible}
        mode="date"
        onConfirm={(date) => handleConfirm(date, "end")}
        onCancel={() => setEndDatePickerVisibility(false)}
      />

      <TextInput
        style={inputStyle}
        placeholder="Lease Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={textareaStyle}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <TouchableOpacity style={buttonStyle} onPress={pickImage}>
        <Text style={{ color: "white" }}>Upload Images</Text>
      </TouchableOpacity>

      <ScrollView horizontal>
        {images.map((img, index) => (
          <Image key={index} source={{ uri: img }} style={imageStyle} />
        ))}
      </ScrollView>

      <TextInput
        style={inputStyle}
        placeholder="Contact Information"
        value={contactInfo}
        onChangeText={setContactInfo}
      />

      <TouchableOpacity style={submitButtonStyle} onPress={handleSubmit}>
        <Text style={{ color: "white", fontSize: 16 }}>Submit Listing</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const inputStyle = { backgroundColor: "white", padding: 10, borderRadius: 5, marginTop: 5, borderWidth: 1, borderColor: "#ddd" };
const textareaStyle = { ...inputStyle, height: 80, textAlignVertical: "top" };
const buttonStyle = { backgroundColor: "#007bff", padding: 10, borderRadius: 5, alignItems: "center", marginTop: 5 };
const submitButtonStyle = { backgroundColor: "#28a745", padding: 15, borderRadius: 5, alignItems: "center", marginTop: 20 };
const imageStyle = { width: 100, height: 100, marginTop: 10, marginRight: 10, borderRadius: 5 };

export default LeaseOutLand;
