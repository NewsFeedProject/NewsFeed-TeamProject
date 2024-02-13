import UserProvider from "./context/UsersContext";
import PostProvider from "./context/PostContext";
import Router from "./shared/Router";

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
          <Router />
        </PostProvider>
      </UserProvider>
    </>
  );
}

export default App;
