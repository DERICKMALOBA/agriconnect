import React, { useState } from "react";
import {
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import DatePicker from "react-native-date-picker";

import * as ImagePicker from "expo-image-picker";

const equipmentTypes = [
  { label: "Tractor", value: "Tractor" },
  { label: "Harvester", value: "Harvester" },
  { label: "Irrigation System", value: "Irrigation System" },
];

const LeaseOutEquipment = () => {
  const [title, setTitle] = useState("");
  const [equipmentType, setEquipmentType] = useState(null);
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("");
  const [price, setPrice] = useState("");

  const [description, setDescription] = useState("");
  const [contactInfo, setContactInfo] = useState("Your Contact Info");
  const [images, setImages] = useState([]);
  const [leaseStartDate, setLeaseStartDate] = useState(null);
  const [leaseEndDate, setLeaseEndDate] = useState(null);
  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImages([...images, result.assets[0].uri]);
    }
  };


  const handleSubmit = async () => {
    if (!title || !equipmentType || !location || !capacity || !price || !leaseStartDate || !leaseEndDate || !description || !contactInfo) {
      alert("Please fill in all required fields.");
      return;
    }
  
    const formData = new FormData();
    formData.append("title", title);
    formData.append("equipmentType", equipmentType);
    formData.append("location", location);
    formData.append("capacity", capacity);
    formData.append("price", price);
    formData.append("leaseStartDate", leaseStartDate.toISOString());
    formData.append("leaseEndDate", leaseEndDate.toISOString());
    formData.append("description", description);
    formData.append("contactInfo", contactInfo);
  
    images.forEach((img, index) => {
      formData.append(`images`, {
        uri: img,
        name: `image_${index}.jpg`,
        type: "image/jpeg",
      });
    });
  
    try {
      const response = await fetch("https://your-api-endpoint.com/equipment-lease", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert("Listing submitted successfully!");
        // Reset form fields after submission
        setTitle("");
        setEquipmentType(null);
        setLocation("");
        setCapacity("");
        setPrice("");
        setLeaseStartDate(null);
        setLeaseEndDate(null);
        setDescription("");
        setContactInfo("");
        setImages([]);
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit listing. Please try again.");
    }
  };
  


  return (
    <ScrollView style={{ padding: 20, backgroundColor: "#f4f4f4" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Lease Out Equipment
      </Text>

      <Text style={{ fontSize: 16, marginTop: 10 }}>Title</Text>
      <TextInput
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 5,
          marginTop: 5,
          borderWidth: 1,
          borderColor: "#ddd",
        }}
        placeholder="Enter equipment title"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={{ fontSize: 16, marginTop: 10 }}>Equipment Type</Text>
      <Dropdown
        data={equipmentTypes}
        labelField="label"
        valueField="value"
        placeholder="Select equipment type"
        value={equipmentType}
        onChange={(item) => setEquipmentType(item.value)}
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 5,
          marginTop: 5,
          borderWidth: 1,
          borderColor: "#ddd",
        }}
      />

      <Text style={{ fontSize: 16, marginTop: 10 }}>Location</Text>
      <TextInput
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 5,
          marginTop: 5,
          borderWidth: 1,
          borderColor: "#ddd",
        }}
        placeholder="Enter location"
        value={location}
        onChangeText={setLocation}
      />

      <Text style={{ fontSize: 16, marginTop: 10 }}>
        Capacity/Specifications
      </Text>
      <TextInput
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 5,
          marginTop: 5,
          borderWidth: 1,
          borderColor: "#ddd",
        }}
        placeholder="e.g., 50 HP"
        value={capacity}
        onChangeText={setCapacity}
      />

      <Text style={{ fontSize: 16, marginTop: 10 }}>Lease Price</Text>
      <TextInput
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 5,
          marginTop: 5,
          borderWidth: 1,
          borderColor: "#ddd",
        }}
        placeholder="Enter price (per day, week, etc.)"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <Text style={{ fontSize: 16, marginTop: 10 }}>Lease Start Date</Text>
      <TouchableOpacity onPress={() => setOpenStart(true)} style={{backgroundColor: "white", padding: 10, borderRadius: 5, marginTop: 5, borderWidth: 1, borderColor: "#ddd",}}>
        <Text>
          {leaseStartDate ? leaseStartDate.toDateString() : "Select Start Date"}
        </Text>
      </TouchableOpacity>
      <DatePicker
        modal
        open={openStart}
        date={leaseStartDate || new Date()}
        mode="date"
        onConfirm={(date) => {
          setOpenStart(false);
          setLeaseStartDate(date);
        }}
        onCancel={() => setOpenStart(false)}
      />

      <Text style={{ fontSize: 16, marginTop: 10 }}>Lease End Date</Text>
      <TouchableOpacity onPress={() => setOpenEnd(true)} style={{backgroundColor: "white", padding: 10, borderRadius: 5, marginTop: 5, borderWidth: 1, borderColor: "#ddd",}}>
        <Text>
          {leaseEndDate ? leaseEndDate.toDateString() : "Select End Date"}
        </Text>
      </TouchableOpacity>
      <DatePicker
        modal
        open={openEnd}
        date={leaseEndDate || new Date()}
        mode="date"
        onConfirm={(date) => {
          setOpenEnd(false);
          setLeaseEndDate(date);
        }}
        onCancel={() => setOpenEnd(false)}
      />

      <Text style={{ fontSize: 16, marginTop: 10 }}>Images</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#007bff",
          padding: 10,
          borderRadius: 5,
          alignItems: "center",
          marginTop: 5,
        }}
        onPress={pickImage}
      >
        <Text style={{ color: "white" }}>Upload</Text>
      </TouchableOpacity>

      <ScrollView horizontal>
        {images.map((img, index) => (
          <Image
            key={index}
            source={{ uri: img }}
            style={{
              width: 100,
              height: 100,
              marginTop: 10,
              marginRight: 10,
              borderRadius: 5,
            }}
          />
        ))}
      </ScrollView>

      <Text style={{ fontSize: 16, marginTop: 10 }}>Description</Text>
      <TextInput
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 5,
          marginTop: 5,
          borderWidth: 1,
          borderColor: "#ddd",
          height: 80,
          textAlignVertical: "top",
        }}
        placeholder="Enter additional details"
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={{ fontSize: 16, marginTop: 10 }}>Contact Info</Text>
      <TextInput
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 5,
          marginTop: 5,
          borderWidth: 1,
          borderColor: "#ddd",
        }}
        placeholder="Enter contact details"
        value={contactInfo}
        onChangeText={setContactInfo}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "#28a745",
          padding: 15,
          borderRadius: 5,
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}    onPress={handleSubmit}
        >Submit Listing</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LeaseOutEquipment;
