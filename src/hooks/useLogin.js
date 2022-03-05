import { useState } from "react";
// firebase imports
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  const [error, setError] = useState(null);

  const login = (email, password) => {
    setError(null);

    // This method signs up a user - it takes the auth, email and password parameters
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("User logged in: ", res.user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { error, login };
};
