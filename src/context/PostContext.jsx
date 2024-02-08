import { createContext, useState } from "react";
import detailListDummyData from "../data/detailListDummyData.json";

export const PostContext = createContext(null);

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState(detailListDummyData);

  return <PostContext.Provider value={{ posts, setPosts }}>{children}</PostContext.Provider>;
};

export default PostProvider;
