const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    //データ格納用のコードをわかりやすく書いてみた4/29
    username: {
      type: String,
      required: true,
      min: 3,
      max: 25,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 50,
    },
    profilePicture: {
      //画像の情報→String型でいいの？
      type: String,
      default: "",
    },
    followers: {
      //フォロワーの数
      type: Array,
      default: [],
    },
    followings: {
      //フォロー中の情報
      type: Array,
      default: [],
    },
    isAdmin: {
      //ログインしているかそうでないか
      type: Boolean,
      default: false,
    },

    desc: {
      //概要欄の情報
      type: String,
      max: 70,
    },
    city: {
      //出身
      type: String,
      max: 50,
    },
  },
  { timestamps: true } //→データを格納した時間や情報を記録してくれる
);
module.exports = mongoose.model("User", UserSchema);
