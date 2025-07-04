import { useState } from "react";
import "./styles/MessageInput.css"; // Assuming you have a CSS file for styling

export default function MessageInput({ onSend }) {
  const [text, setText] = useState("");

  const send = () => {
    onSend(text);
    setText("");
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && send()}
        placeholder="Напиши щось..."
      />
      <button onClick={send}>💬</button>
    </div>
  );
}
