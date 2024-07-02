import React from "react";
import "./Register.css";
export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3>SNS</h3>
          <span className="loginDesc">ネトプロの世界へようこそ</span>
        </div>

        <div className="loginRight">
          <div className="loginBox">
            <p className="loginMsg">新規登録はこちら</p>
            <input type="text" className="loginInput" placeholder="ユーザ名" />
            <input type="text" className="loginInput" placeholder="Email" />
            <input
              type="text"
              className="loginInput"
              placeholder="パスワード"
            />
            <input
              type="text"
              className="loginInput"
              placeholder="パスワード確認"
            />
            <button className="loginButton">サインアップ</button>

            <button className="loginRegisterButton">ログイン</button>
          </div>
        </div>
      </div>
    </div>
  );
}
