import UserProvider from "context/UsersContext";
import PostProvider from "context/PostContext";
import LoginContextProvider from "context/LoginContext";
import SingUpContextProvider from "context/SingUpContext";
import Router from "shared/Router";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "data/firebase";
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const querySnapshot = await getDocs(collection(db, "postInfo"));
  //     querySnapshot.forEach((doc) => {
  //       console.log(`${doc.id} => ${doc.data()}`);
  //     });
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      <UserProvider>
        <PostProvider>
          <LoginContextProvider>
            <SingUpContextProvider>
              <Router />
            </SingUpContextProvider>
          </LoginContextProvider>
        </PostProvider>
      </UserProvider>
    </>
  );
}

export default App;
