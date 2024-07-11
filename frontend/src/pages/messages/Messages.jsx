import React from "react";
import { useNavigate } from "react-router-dom";

export default function Messages() {
  const navigate = useNavigate();

  const navigateToMessage1 = () => {
    navigate("/message1");
  };

  return (
    <div>
      <h2>メッセージ一覧</h2>
      <ul>
        <li>メッセージ1</li>
        <li>メッセージ2</li>
        <li>メッセージ3</li>
      </ul>
      <button onClick={navigateToMessage1}>kishi</button>
    </div>
  );
}
