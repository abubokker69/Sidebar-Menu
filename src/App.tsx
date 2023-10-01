import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Search from "./components/Search";
import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Portfolio />} />
        <Route path="/*" element={<Error />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
