import { Route, Routes } from "react-router-dom";
import { Home, Layout } from "./containers";
import AuthProvider from "./providers/AuthProvider";
import "./index.scss";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
