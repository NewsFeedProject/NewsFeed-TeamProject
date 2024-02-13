import UserProvider from "context/UsersContext";
import PostProvider from "context/PostContext";
import LoginContextProvider from "context/LoginContext";
import SingUpContextProvider from "context/SingUpContext";
import Router from "shared/Router";

function App() {
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

export default App