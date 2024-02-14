import { createContext, useState } from "react";
import usersData from "../data/usersData.json";
import { getAuth } from "firebase/auth";

export const UsersContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData);

  const auth = getAuth();
  const user = auth.currentUser;

  return <UsersContext.Provider value={{ users, setUsers }}>{children}</UsersContext.Provider>;
};

export default UserProvider;
