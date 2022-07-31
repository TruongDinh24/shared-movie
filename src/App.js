import { Route, Routes } from "react-router-dom";
import { Layout } from "./containers";
import AuthProvider from "./providers/AuthProvider";
import "./index.scss";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
