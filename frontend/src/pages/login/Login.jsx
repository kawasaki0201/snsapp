import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom"; // useNavigateをインポート
import { loginCall } from "../../actionCalls";
import { AuthContext } from "../../state/AuthContext";
import "./Login.css";
export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate(); // useNavigateフックを使用
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email.current.value);
    // console.log(password.current.value);
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };
  const handleRegister = () => {
    navigate("/register"); // /registerにリダイレクト
  };
  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3>Sanalysis</h3>
          <span className="loginDesc">ネトプロの世界へようこそ</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="loginMsg">ログインはこちら</p>
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
              placeholder="password"
              required
              minLength="4"
              ref={password}
            />
            <button className="loginButton">Login</button>
            <span className="loginForgot">パスワードを忘れた方へ</span>
            <button
              type="button"
              className="loginRegisterButton"
              onClick={handleRegister}
            >
              アカウント作成
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}