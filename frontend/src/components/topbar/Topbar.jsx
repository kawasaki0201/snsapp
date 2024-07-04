import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <span className="logo">Sanalysis</span>
        </Link>
      </div>
      <div className="topbarCenter">
        {/* <div className="serchbar"> */}
        {/* <Search className="searchIcom" /> */}
        {/* <input type="text" className="serchInput" placeholder="検索して？" /> */}
        {/* </div> */}
      </div>
      <div className="topbarRight">
        {/* <div className="topbarItemIcons"> */}
        {/* <div className="topbarIconItem"> */}
        {/* <Chat /> */}
        {/* <span className="topbarIconBadge">1</span> */}
      </div>
      {/* <div className="topbarIconItem"> */}
      {/* <Notifications /> */}
      {/* <span className="topbarIconBadge">2</span> */}
    </div>
    // {/* <img src="/assets/person/1.jpeg" alt="" className="topbarImg" /> */}
    // </div>
    // </div>
    // </div>
  );
}
