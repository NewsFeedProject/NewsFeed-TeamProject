import UserProvider from "./context/UsersContext";
import PostProvider from "./context/PostContext";
import Router from "./shared/Router";

function App() {
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

export default App