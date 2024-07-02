import axios from "axios";
import React, { useEffect, useState } from "react";
//import { Post } from "../../dummyDate";
import Post from "../post/Post";
import Share from "../share/Share";
import "./TimeLine.css";

export default function TimeLine({ username }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = username
        ? await axios.get(`/api/posts/profile/${username}`)
        : await axios.get("/api/posts/timeline/668109c8555d2fa257d83e9c");
      setPosts(response.data);
      // console.log(response);
    };

    fetchPosts();
  }, [username]);

  return (
    <div className="timeline">
      <div className="timelineWrapper">
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
