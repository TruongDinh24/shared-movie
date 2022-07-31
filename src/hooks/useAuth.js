import React, { useContext } from "react";

export let AuthContext = React.createContext({
  authUser: null,
  signIn: async (email, password) => {},
  signOut: () => {},
});

let useAuth = () => useContext(AuthContext);

export default useAuth;
