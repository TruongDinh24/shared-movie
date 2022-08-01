import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components";
import { Home, Layout, ShareVideo } from "./containers";
import "./index.scss";
import AuthProvider from "./providers/AuthProvider";
import VideoProvider from "./providers/VideoProvider";

function App() {
  return (
    <VideoProvider>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/share" element={<ShareVideo />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </VideoProvider>
  );
}

export default App;
