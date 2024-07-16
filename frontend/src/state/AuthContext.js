import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

//最初のユーザー状態の定義
const initialState = {
  user: null, //ログインしてないですね。
  // user: {
  //   _id: "668764f4a78b4a3ecbb31c73",
  //   username: "kawasaki",
  //   email: "kawasaki@gmail.com",
  //   password: "kawasaki",
  //   profilePicture: "",

  //   followers: [],

  //   followings: [],
  //   isAdmin: false,
  // },


  //JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false, //ログインしようともしてないですね。
  error: false, //エラーも吐いてないですね。
};

export const AuthContext = createContext(initialState);
export const AuthContextProvider = ({ children }) => {
  //ユーザー入力によって状態(state)が更新され、それをグローバルに利用している。
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
