import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Menu from "./Menu";
import Dashboard from "./views/Dashboard";
import Footer from "./components/Footer";
import Login from "./views/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import Users from "./views/Users";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
function App() {
  return (
    <div class="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />}>
            <Route index element={<UserList />} />
            <Route path="add" element={<AddUser />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
