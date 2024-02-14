import { createContext, useEffect, useState } from "react";
import usersData from "../data/usersData.json";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "data/firebase";

export const UsersContext = createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
  }, []);

  console.log("현재유저정보", currentUser);

  return <UsersContext.Provider value={currentUser}>{children}</UsersContext.Provider>;
};

export default UserProvider;
