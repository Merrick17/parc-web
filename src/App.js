import "./App.css";

import Dashboard from "./views/Dashboard";

import Login from "./views/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import Users from "./views/Users";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import Vehicule from "./views/Vehicule";
import VehiculeList from "./components/VehiculeList";
import MissionList from "./components/MissionList";
import Mission from "./views/Mission";
import AddVehicule from "./components/AddVehicule";
function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />}>
            <Route index element={<UserList />} />
            <Route path="add" element={<AddUser />} />
          </Route>
          <Route path="vehicule" element={<Vehicule />}>
            <Route index element={<VehiculeList />} />
            <Route path="add" element={<AddVehicule />} />
          </Route>
          <Route path="mission" element={<Mission />}>
            <Route index element={<MissionList />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
