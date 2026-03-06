import { Routes, Route, Navigate } from "react-router-dom";
// import HomePage from "./pages/HomePage";
import HomePage from "./pages/HomePage"; // ✅ correct
import Loginpage from "./pages/Loginpage";
import { ProfilePage } from "./pages/ProfilePage";
import {Toaster} from "react-hot-toast"
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const App = () => {
  const { authUser, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
       
    <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
    <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
    <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>

      </div>
    );
  }

  return (
    <div className="bg-[url('/assets/bgImage.svg')] bg-contain">
      <Toaster />
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!authUser ? <Loginpage /> : <Navigate to="/" />}
        />
        <Route
          path="/profile"
          element={authUser ? <ProfilePage /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
};

export default App;

