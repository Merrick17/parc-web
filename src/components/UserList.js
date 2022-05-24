import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUserApi, getUsersApi } from "../store/actions/user.actions";
import Swal from "sweetalert2";
const UserList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersApi());
  }, []);
  const { list } = useSelector((state) => state.users);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Est ce que vous voulez supprimer cet utilisateur",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Confirmer",
      denyButtonText: `Annuler`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log("confirmer");
        dispatch(deleteUserApi(id));
      } else if (result.isDenied) {
        console.log("Annuler");
      }
    });
  };
  return (
    <div>
      {/* Content Header (Page header) */}
      <section className="content-header">{/* /.container-fluid */}</section>
      {/* Main content */}
      <section className="content">
        {/* Default box */}
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Utilisateurs</h3>
            <div className="card-tools">
              {" "}
              <Link type="button" className="btn btn-primary" to={"/users/add"}>
                Ajouter
              </Link>
            </div>
          </div>
          <div className="card-body p-0">
            <table className="table table-striped projects">
              <thead>
                <tr>
                  <th style={{ width: "1%" }}>ID</th>
                  <th style={{ width: "1%" }}>CIN</th>
                  <th style={{ width: "20%" }}>Nom & Prénom</th>
                  <th>Adresse</th>
                  <th style={{ width: "30%" }}>Num Téléphone </th>
                  <th className="text-center">Role</th>
                  <th style={{ width: "40%" }}></th>
                </tr>
              </thead>
              <tbody>
                {list.map((elm, ind) => (
                  <tr>
                    <td>{ind + 1}</td>
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
                      <Link
                        className="btn btn-info btn-sm mr-2 "
                        to={`/users/edit/${elm._id}`}
                      >
                        <i className="fas fa-pencil-alt"></i>
                      </Link>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => {
                          handleDelete(elm._id);
                        }}
                      >
                        <i className="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </section>
      {/* /.content */}
    </div>
  );
};

export default UserList;
