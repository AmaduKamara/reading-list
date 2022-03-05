import { useState } from "react";

// firebase imports
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const useSignup = () => {
  const [error, setError] = useState(null);

  const signup = (email, password) => {
    setError(null);

    // This method signs up a user - it takes the auth, email and password parameters
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("User signed up: ", res.user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { error, signup };
};
