import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // useParamsをインポート
import Sidebar from "../../components/sidebar/Sidebar";
import TimeLine from "../../components/timeline/TimeLine";
import Topbar from "../../components/topbar/Topbar";
import "./Profile.css";

export default function Profile() {
  const { username } = useParams(); // URLパラメーターからusernameを取得
  const REACT_APP_PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/users?username=${username}`); // URLパラメーターのusernameを使って取得
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]); // usernameを依存関係に追加

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src={
                  user.coverPicture || `${REACT_APP_PUBLIC_FOLDER}/post/3.jpeg`
                }
                alt=""
                className="profileCoverImg"
              />
              <img
                src={
                  REACT_APP_PUBLIC_FOLDER + user.profilePicture ||
                  REACT_APP_PUBLIC_FOLDER + "/person/noAvatar.png"
                }
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <TimeLine username={username} /> {/* usernameをpropsとして渡す */}
            {/* <Rightbar user={user} /> */}
          </div>
        </div>
      </div>
    </>
  );
}
