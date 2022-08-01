import React, { useContext } from "react";

export let AuthContext = React.createContext({
  authUser: null,
  signIn: (email, password) => {},
  signOut: () => {},
});

let useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
