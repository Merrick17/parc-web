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
import AddMission from "./components/AddMission";
import EditUser from "./components/EditUser";
import FicheTechList from "./components/FicheTechList";
import AddFicheTech from "./components/AddFicheTech";
import FicheTech from "./views/FicheTech";
import AddFicheDep from "./components/AddFicheDep";
import FicheDepList from "./components/FicheDepList";
import FicheDep from "./views/FicheDepenses";
import Addreclamation from "./components/Addreclamation";
import ReclamationList from "./components/ReclamationList";
import Reclamation from "./views/Reclamation";
import EditVehicule from "./components/EditVehicule";
import EditReclamation from "./components/EditReclamation";
import PrivateRoute from "./components/PrivateRoute";
import EditFicheTech from "./components/EditFicheTech";
import EditFicheDep from "./components/EditFicheDep";
import Profile from "./components/Profile";
import DriverList from "./components/DriverList";
import AddDriver from "./components/AddDriver";
import Home from "./views/Home";
function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="users"
            element={
              <PrivateRoute>
                <Users />
              </PrivateRoute>
            }
          >
            <Route index element={<UserList />} />
            <Route path="add" element={<AddUser />} />
            <Route path="edit/:id" element={<EditUser />} />
          </Route>
          <Route
            path="vehicule"
            element={
              <PrivateRoute>
                <Vehicule />
              </PrivateRoute>
            }
          >
            <Route index element={<VehiculeList />} />
            <Route path="add" element={<AddVehicule />} />
            <Route path="edit/:id" element={<EditVehicule />} />
          </Route>
          <Route path="mission" element={<Mission />}>
            <Route index element={<MissionList />} />
            <Route path="add" element={<AddMission />} />
          </Route>
          <Route
            path="FicheTech"
            element={
              <PrivateRoute>
                <FicheTech />
              </PrivateRoute>
            }
          >
            <Route index element={<FicheTechList />} />
            <Route path="add" element={<AddFicheTech />} />
            <Route path="edit/:id" element={<EditFicheTech />} />
          </Route>
          <Route
            path="ficheDep"
            element={
              <PrivateRoute>
                <FicheDep />
              </PrivateRoute>
            }
          >
            <Route index element={<FicheDepList />} />
            <Route path="add" element={<AddFicheDep />} />
            <Route path="edit/:id" element={<EditFicheDep />} />
          </Route>
          <Route path="profile" element={<Profile />} />
          <Route
            path="reclamation"
            element={
              <PrivateRoute>
                <Reclamation />
              </PrivateRoute>
            }
          >
            <Route index element={<ReclamationList />} />
            <Route path="add" element={<Addreclamation />} />
            <Route path="edit/:amani" element={<EditReclamation />} />
          </Route>
          <Route
            path="DriverList"
            element={
              <PrivateRoute>
                <Users/>
              </PrivateRoute>
            }
          >
            <Route index element={<DriverList />} />
            <Route path="add" element={<AddDriver />} />
            
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
