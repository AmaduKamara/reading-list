import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { toast } from "react-toastify";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !setEmail) {
      toast.error("Please provide values for input fields!");
    }
    if (error) {
      toast.error(error);
    }
    signup(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>email:</span>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          <span>password:</span>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button>sign up</button>
        {/* {error && toast.error("Please provide values for input fields!")} */}
      </form>
    </div>
  );
}
