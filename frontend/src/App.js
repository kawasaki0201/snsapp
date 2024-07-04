import { useContext } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Messages from "./pages/messages/Messages"; // メッセージページのインポート
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { AuthContext } from "./state/AuthContext";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/message" element={<Messages />} />{" "}
        {/* メッセージページのルート */}
      </Routes>
    </Router>
  );
}

export default App;
