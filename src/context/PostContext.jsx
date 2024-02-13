import { createContext, useEffect, useState } from "react";
import { collection, getDocs, query, addDoc } from "firebase/firestore/lite";
import { db } from "data/firebase";
import detailListDummyData from "data/detailListDummyData";

export const PostContext = createContext(null);

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  /* firebase 데이터 불러오기 */
  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "postInfo"));
      const querySnapshot = await getDocs(q);

      const initialPosts = [];

      querySnapshot.forEach((doc) => {
        const data = {
          id: doc.id,
          ...doc.data()
        };
        console.log(data);
        initialPosts.push(data);
      });

      setPosts(initialPosts);
    };
    fetchData();
  }, []);

  /* 포스트 글 추가하기 */
  const addPostSubmit = async (newpost) => {
    setPosts((posts) => [newpost, ...posts]);

    const collectionRef = collection(db, "postInfo");
    await addDoc(collectionRef, newpost);
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
