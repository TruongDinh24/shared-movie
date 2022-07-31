import { useState } from "react";
import { useAuth } from "../hooks";

let SignInUp = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let { signIn } = useAuth();

  let handleSubmit = async (e) => {
    e.preventDefault();
    await signIn(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="form-sign-in-up">
      <div>
        <input
          type="email"
          value={email}
          required
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          required
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default SignInUp;
