import { signOut } from "firebase/auth";
import { auth } from "../firebase/config";

export const useLogout = () => {
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return [logout];
};
