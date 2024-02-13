import UserProvider from "context/UsersContext";
import PostProvider from "context/PostContext";
import LoginContextProvider from "context/LoginContext";
import SingUpContextProvider from "context/SingUpContext";
import Router from "shared/Router";

function App() {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const querySnapshot = await getDocs(collection(db, "users"));
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
