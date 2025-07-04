import React, { useState } from "react";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import responses from "../data/responses";
import "./styles/ChatWindow.css";
import audio from "../assets/song.mp3";

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Привіт, кохана 💖 Напиши мені щось..." },
  ]);

  function getResponseByMessage(userText) {
    const lowerText = userText.toLowerCase();

    for (const response of responses) {
      for (const keyword of response.keywords) {
        if (lowerText.includes(keyword)) {
          return response.text;
        }
      }
    }

    // Якщо ключових слів не знайдено — рандомна відповідь
    return responses[Math.floor(Math.random() * responses.length)].text;
  }

  const handleSend = (text) => {
    if (!text.trim()) return;

    const newMessages = [...messages, { sender: "user", text }];
    setMessages(newMessages);

    const botResponse = getResponseByMessage(text);

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    }, 1500);
  };

  return (
    <div className="chat-window">
      <div className="chat-header">💌 Чат любові</div>
      <div className="chat-messages">
        <MessageList messages={messages} />
      </div>
      <div className="chat-input">
        <MessageInput onSend={handleSend} />
      </div>

      <div className="audio-player">
        <audio
          className="audio-controls"
          preload="auto"
          loop
          autoPlay
          src={audio}
          volume={0.15}
        ></audio>
      </div>
    </div>
  );
}
