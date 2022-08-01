import React, { useContext } from "react";

export let AuthContext = React.createContext({
  authUser: null,
  signIn: async (email, password) => {},
  signOut: () => {},
});

let authContext = () => useContext(AuthContext);

export default authContext;
