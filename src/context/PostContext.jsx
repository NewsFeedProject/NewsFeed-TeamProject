import { createContext, useEffect, useState } from "react";
import { collection, getDocs, query, addDoc, orderBy, doc } from "firebase/firestore/lite";
import { db } from "data/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const PostContext = createContext(null);

const PostProvider = ({ children }) => {
  // post 데이터 관리
  const [posts, setPosts] = useState([]);

  // 검색 기능
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // 로그인 값 가져오기
  const [userMail, setUserMail] = useState("");
  const [userProfileImg, setUserProfileImg] = useState("");
  const [userUid, setUserUid] = useState("");

  // 파이어베이스 데이터 불러오기

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "postInfo"), orderBy("postDate", "desc"));
      const querySnapshot = await getDocs(q);
      const initialPosts = [];

      querySnapshot.forEach((doc) => {
        const data = {
          ...doc.data(),
          id: doc.id
        };
        // console.log(data.id);

        initialPosts.push(data);
      });
      setPosts(initialPosts);
    };

    fetchData();
  }, []);
  // console.log("posts", posts);

  /* email, profileImg 데이터 불러오기 */
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserMail(user.email);
      } else {
        setUserMail(null);
      }
    });
  }, []);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserProfileImg(user.photoURL);
      } else {
        setUserProfileImg(null);
      }
    });
  }, []);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserUid(user.uid);
      } else {
        setUserUid(null);
      }
    });
  }, []);
  // console.log("유저 이메일", userMail);
  // console.log("사진뭐불러와?", userProfileImg);
  // console.log("유저 아이디", userUid);

  /* 포스트 글 추가하기 */
  const addPostSubmit = async (newpost) => {
    const collectionRef = collection(db, "postInfo");
    await addDoc(collectionRef, newpost);
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
        setPreviewImg,
        category,
        setCategory,
        searchTerm,
        setSearchTerm,
        userMail,
        userProfileImg,
        userUid,
        setUserUid
        // formattedPostData,
        // setFormattedPostData
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
