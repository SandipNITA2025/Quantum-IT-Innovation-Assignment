import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./app/login/page";
import Register from "./app/regsiter/page";
import Home from "./app/home/page";

const useAuth = () => {
  const user = localStorage.getItem("userData");
  return user ? true : false;
};

const App = () => {
  const isAuthenticated = useAuth();

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!isAuthenticated ? <Register /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
};

export default App;
