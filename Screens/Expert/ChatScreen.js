import React, { useState } from "react";
import { View } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";

const ChatScreen = ({ route }) => {
  const { expert } = route.params;
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
  };

  return (
    <View className="flex-1">
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{ _id: 1, name: "User" }}
      />
    </View>
  );
};

export default ChatScreen;
