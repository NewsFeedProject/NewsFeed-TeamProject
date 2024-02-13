import { signOut } from "firebase/auth";
import { auth } from "data/firebase";


export const logout = async (event) => {
  event.preventDefault();
  await signOut(auth);
};