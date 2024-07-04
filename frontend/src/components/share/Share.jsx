import { Analytics, Face, Gif, Image } from "@mui/icons-material";
import React from "react";
import "./Share.css";
//import Reavrasaj  from "./ogesasas/kishikounosues:"
export default function Share() {
  const REACT_APP_PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            src={REACT_APP_PUBLIC_FOLDER + "/person/noAvatar.png"}
            alt=""
            className="shareProfileImg"
          />
          
          <input
            type="text"
            className="shareInput"
            placeholder="今何してる？"
          />
        </div>
        <hr className="shareHr" />

        <div className="shareButtons">
          <div className="shareOptions">
            <Image className="shareIcon" htmlColor="blue" />
            <span className="shareOptionText">写真</span>
          </div>
          <div className="shareOptions">
            <Gif className="shareIcon" htmlColor="hotpink" />
            <span className="shareOptionText">GIF</span>
          </div>
          <div className="shareOptions">
            <Face className="shareIcon" htmlColor="green" />
            <span className="shareOptionText">気持ち</span>
          </div>
          <div className="shareOptions">
            <Analytics className="shareIcon" htmlColor="red" />
            <span className="shareOptionText">投票</span>
          </div>
          <button className="shareButton">投稿</button>
        </div>
      </div>
    </div>
  );
}
