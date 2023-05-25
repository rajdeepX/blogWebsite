import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import CustomContext from "../CustomContext";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState(null);

  const { userInfo } = useContext(CustomContext);

  const { id } = useParams();
  const fetchPost = async () => {
    // console.log(id);
    const response = await fetch(`http://localhost:3000/post/${id}`);
    const postInfo = await response.json();
    setPostInfo(postInfo);
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (!postInfo) return "";

  return (
    <>
      <Navbar />
      <div className="post-page">
        <h1>{postInfo.title}</h1>
        <p className="author">{postInfo.author.username}</p>
        <p className="time">{formatISO9075(new Date(postInfo.createdAt))}</p>
        {userInfo.id}
        <div className="image">
          <img src={`http://localhost:3000/${postInfo.image}`} alt="image" />
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: postInfo.content }}
        />
      </div>
    </>
  );
};

export default PostPage;
