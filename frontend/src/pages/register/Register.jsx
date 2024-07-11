import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import TypingEffect from "react-typing-effect";
import backgroundImage from "./R.jpg"; // 画像をインポート
import "./Register.css";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate(); // useNavigateフックを使用

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.current.value !== passwordConfirmation.current.value) {
      passwordConfirmation.current.setCustomValidity(
        "パスワードが一致しません"
      );
    } else {
      try {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        await axios.post("/api/auth/register", user);
        setRedirect(true);
      } catch (err) {
        console.log("Registration error:", err);
      }
    }
  };

  const handleLogin = () => {
    navigate("/login"); // /loginにリダイレクト
  };

  useEffect(() => {
    const letters = document.querySelectorAll(".logoLetter");
    letters.forEach((letter, index) => {
      letter.style.animationDelay = `${index * 0.3}s`;
    });
  }, []);

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div
      className="login"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {" "}
      {/* インラインスタイルで背景画像を設定 */}
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">
            {"Sanalysis".split("").map((char, index) => (
              <span key={index} className="logoLetter">
                {char}
              </span>
            ))}
          </h3>
          <TypingEffect
            className="loginDesc"
            text={["ネトプロの世界へようこそ"]}
            speed={100}
            eraseSpeed={100}
            typingDelay={200}
            eraseDelay={2000}
          />
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <p className="loginMsg">新規登録はこちら</p>
            <input
              type="text"
              className="loginInput"
              placeholder="ユーザ名"
              required
              ref={username}
            />
            <input
              type="email"
              className="loginInput"
              placeholder="Email"
              required
              ref={email}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="パスワード"
              required
              minLength="4"
              ref={password}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="パスワード確認"
              required
              minLength="4"
              ref={passwordConfirmation}
            />
            <button className="loginButton" type="submit">
              サインアップ
            </button>
            <button
              type="button"
              className="loginRegisterButton"
              onClick={handleLogin}
            >
              ログイン
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
