import { createContext, useState } from "react";
import detailListDummyData from "../data/detailListDummyData.json";

export const PostContext = createContext(null);

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(detailListDummyData);
  const category = posts.map((item) => item.postCategory);
  // console.log(posts);

  /* 포스트 글 추가하기 */
  const addPostSubmit = (newpost) => {
    setPosts((posts) => [newpost, ...posts]);
  };

  return <PostContext.Provider value={{ posts, setPosts, addPostSubmit, category }}>{children}</PostContext.Provider>;
};

export default PostProvider;
