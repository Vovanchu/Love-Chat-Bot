import dashaImg from "../assets/images/dasha.jpg";
import vovaImg from "../assets/images/vova.jpg";
import React from "react";
import "./styles/MessageList.css"; // Assuming you have a CSS file for styling

export default function MessageList({ messages }) {
  return (
    <div className="message-list">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`message ${msg.sender === "user" ? "user" : "bot"}`}
        >
          <img
            src={msg.sender === "user" ? dashaImg : vovaImg}
            alt="avatar"
            className="avatar"
          />
          <span>{msg.text}</span>
        </div>
      ))}
    </div>
  );
}
