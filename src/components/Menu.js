import React, { Component, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useMatch, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import { BASE_URL } from "../utils/apiHelpers";
const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  useEffect(() => {}, []);
  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <Link className="brand-link" to={"/dashboard"}>
          <img
            src={logo}
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: ".8" }}
          />
          <span className="brand-text font-weight-light">COGEB</span>
        </Link>
        {/* Sidebar */}
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src={
                  userInfo.profilePic
                    ? `${BASE_URL}/${userInfo.profilePic}`
                    : "dist/img/user2-160x160.jpg"
                }
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <Link className="d-block" to={"/profile"}>
                {userInfo && userInfo.name} {userInfo && userInfo.lastName}
              </Link>
            </div>
          </div>

          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item has-treeview menu-open">
                <li className="nav-item">
                  <Link
                    to={"/dashboard"}
                    className={`nav-link ${
                      location.pathname == "/dashboard" ? "active" : ""
                    } `}
                  >
                    <i className="far fa-circle nav-icon" />
                    <p>Tableau de bord</p>
                  </Link>
                </li>
                {userInfo && userInfo.role == "ADMIN" && (
                  <li className="nav-item">
                    <Link
                      to={"/users"}
                      className={`nav-link ${
                        location.pathname == "/users" ? "active" : ""
                      } `}
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Utilisateurs</p>
                    </Link>
                  </li>
                )}
                {userInfo && userInfo.role == "GESTIONNAIRE" && (
                  <li className="nav-item">
                    <Link
                      to={"/users/chauffeur"}
                      className={`nav-link ${
                        location.pathname == "/users/chauffeur" ? "active" : ""
                      } `}
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Chauffeur</p>
                    </Link>
                  </li>
                )}
                {((userInfo && userInfo.role == "ADMIN") ||
                  (userInfo && userInfo.role == "GESTIONNAIRE")) && (
                  <li className="nav-item">
                    <Link
                      to={"/vehicule"}
                      className={`nav-link ${
                        location.pathname == "/vehicule" ? "active" : ""
                      } `}
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Véhicule</p>
                    </Link>
                  </li>
                )}
                {((userInfo && userInfo.role == "ADMIN") ||
                  (userInfo && userInfo.role == "GESTIONNAIRE")) && (
                  <li className="nav-item">
                    <Link
                      to={"/mission"}
                      className={`nav-link ${
                        location.pathname == "/mission" ? "active" : ""
                      } `}
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Mission</p>
                    </Link>
                  </li>
                )}
                {((userInfo && userInfo.role == "ADMIN") ||
                  (userInfo && userInfo.role == "GESTIONNAIRE")) && (
                  <li className="nav-item">
                    <Link
                      to={"/ficheTech"}
                      className={`nav-link ${
                        location.pathname == "/ficheTech" ? "active" : ""
                      } `}
                    >
                      <i className="far fa-circle nav-icon" />
                      <p>Fiches Techniques</p>
                    </Link>
                  </li>
                )}
                {((userInfo && userInfo.role == "ADMIN") ||
                  (userInfo && userInfo.role == "GESTIONNAIRE")) && (
                  <li className="nav-item">
                    <Link
                      to={"/ficheDep"}
                      className={`nav-link ${
                        location.pathname == "/ficheDep" ? "active" : ""
                      } `}
                    >
                      <li className="far fa-circle nav-icon" />
                      <p>Fiche Dépenses</p>
                    </Link>
                  </li>
                )}

                {((userInfo && userInfo.role == "ADMIN") ||
                  (userInfo && userInfo.role == "CONTROLEUR")) && (
                  <li className="nav-item">
                    <Link
                      to={"/Reclamation"}
                      className={`nav-link ${
                        location.pathname == "/Reclamation" ? "active" : ""
                      } `}
                    >
                      <li className="far fa-circle nav-icon" />
                      <p>
                        Réclamations et <br />
                        commentaires
                      </p>
                    </Link>
                  </li>
                )}
              </li>
            </ul>
          </nav>
          <button
            className="btn btn-primary ml-5"
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
          >
            Deconnexion
          </button>
        </div>
      </aside>
    </div>
  );
};
export default Menu;
