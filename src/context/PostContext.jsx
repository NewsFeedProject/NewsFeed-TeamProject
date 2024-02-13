import { createContext, useState } from "react";
import detailListDummyData from "../data/detailListDummyData.json";

export const PostContext = createContext(null);

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(detailListDummyData);

  /* 포스트 글 추가하기 */
  const addPostSubmit = (newpost) => {
    setPosts((posts) => [newpost, ...posts]);
  };

  /* 글 쓰기 - img 추가하기 */
  const [postImg, setPostImg] = useState([]);
  const [previewImg, setPreviewImg] = useState(null);

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
        addPostSubmit,
        postImg,
        setPostImg,
        previewImg,
        setPreviewImg
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
