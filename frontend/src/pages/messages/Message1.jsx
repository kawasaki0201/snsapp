import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3018"); // 自分のサーバーのURLに置き換えてください

export default function Message1() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    // メッセージ受信時の処理
    socket.on("chat message", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    // アンマウント時のクリーンアップ
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      socket.emit("chat message", inputMessage);
      setInputMessage("");
    }
  };

  return (
    <div>
      <h2>メッセージ1</h2>
      <div>
        {messages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={sendMessage}>送信</button>
      </div>
    </div>
  );
}
