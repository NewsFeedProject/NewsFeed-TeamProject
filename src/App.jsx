import PostProvider from "context/PostContext";
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
      <PostProvider>
        <Router />
      </PostProvider>
    </>
  );
}

export default App;
