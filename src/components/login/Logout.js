import { signOut } from "firebase/auth";
import { auth } from "data/firebase";


export const Logout = async (event) => {
  event.preventDefault();
  await signOut(auth);
};