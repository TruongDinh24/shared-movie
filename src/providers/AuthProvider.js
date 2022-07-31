import jwt_decode from "jwt-decode";
import jwt_encode from "jwt-encode";
import { useState } from "react";
import { AuthContext } from "../hooks/useAuth";

let getAuthUser = () => {
  try {
    let { email } = sessionStorage.getItem("access_token");
    return { email };
  } catch (error) {
    return null;
  }
};

const AuthProvider = (props) => {
  let [authUser, setAuthUser] = useState(getAuthUser());
  const secret = "secret";
  let signIn = async (email, password) => {
    try {
      let token = jwt_encode({ email, password }, secret);
      sessionStorage.setItem("access_token", token);
      setAuthUser({ token, email: "sharedmovie@gmail.com" });
    } catch (err) {
      console.log("err", err);
    }
  };

  let signOut = () => {
    sessionStorage.clear();
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider value={{ authUser, signIn, signOut }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
