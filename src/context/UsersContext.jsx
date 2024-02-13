import { createContext, useState } from "react";
import usersData from "../data/usersData.json";

export const UsersContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData);

  return <UsersContext.Provider value={{ users, setUsers }}>{children}</UsersContext.Provider>;
};

export default UserProvider;
