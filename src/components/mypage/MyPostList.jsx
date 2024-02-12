import { UsersContext } from "../../context/UsersContext";
import { PostContext } from "../../context/PostContext";
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";

function MyPostList() {
  const navigate = useNavigate();
  const params = useParams();
  const { posts } = useContext(PostContext);
  const { users } = useContext(UsersContext);
  const foundUser = users.find((user) => {
    return user.uid === params.uid;
  });
  const filteredPost = posts.filter((post) => post.userEmail === foundUser.userEmail);
  return (
    <>
      <div>MyPostList</div>
      <div
        onClick={() => {
          navigate(`/detail/${post.postId}`);
        }}
      >
        {filteredPost.length === 0 ? (
          <p>면접 후기를 남겨주세요!</p>
        ) : (
          filteredPost.map((post) => {
            return (
              <div key={post.postId} style={{ border: "1px solid green", padding: "20px" }}>
                <div style={{ border: "1px solid green", borderRadius: "10px", width: "150px", padding: "10px" }}>
                  {post.postCategory === "interview"
                    ? "면접후기"
                    : post.postCategory === "workInfo"
                    ? "취업정보"
                    : "회사 정보 공유"}
                </div>
                <p>{post.postTitle}</p>
                <p>{post.postText}</p>
              </div>
            );
          })
        )}
      </div>
    </>
  );
}

export default MyPostList;
