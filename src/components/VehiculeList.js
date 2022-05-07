import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsersApi } from "../store/actions/user.actions";

const VehiculeList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersApi());
  }, []);
  const { list } = useSelector((state) => state.users);
  return (
    <div>
      <section className="content-header"></section>

      <section className="content">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Vehicule </h3>
            <div className="card-tools">
              {" "}
              <Link type="button" className="btn btn-primary" to={"/vehicule/add"}>
                Ajouter
              </Link>
            </div>
          </div>
          <div className="card-body p-0">
            <table className="table table-striped projects">
              <thead>
                <tr>
                  <th style={{ width: "1%" }}>CIN</th>
                  <th style={{ width: "20%" }}>Nom & Prénom</th>
                  <th>Adresse</th>
                  <th style={{ width: "30%" }}>Num Téléphone </th>
                  <th className="text-center">Role</th>
                  <th style={{ width: "40%" }}></th>
                </tr>
              </thead>
              <tbody>
                {list.map((elm) => (
                  <tr>
                    <td>{elm.cin}</td>
                    <td>
                      <a>
                        {elm.name} {elm.firstName}
                      </a>
                      <br />
                    </td>
                    <td>{elm.address}</td>
                    <td>{elm.phoneNumber}</td>
                    <td className="project-state">{elm.role}</td>
                    <td className="project-actions text-right">
                      <button className="btn btn-info btn-sm mr-2 ">
                        <i className="fas fa-pencil-alt"></i>
                        Modifier
                      </button>
                      <button className="btn btn-danger btn-sm">
                        <i className="fas fa-trash"></i>
                        Supprimer
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VehiculeList;
