import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getFicheTechsApi,
  deleteFicheTechApi,
} from "../store/actions/ficheTech.actions";
import Swal from "sweetalert2";
import moment from "moment";
const FicheTechList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFicheTechsApi());
  }, []);
  const { list } = useSelector((state) => state.fichetech);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Est ce que vous voulez supprimer cette fiche technique  ",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Confirmer",
      denyButtonText: `Annuler`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log("confirmer");
        dispatch(deleteFicheTechApi(id));
      } else if (result.isDenied) {
        console.log("Annuler");
      }
    });
  };
  return (
    <div>
      <section className="content-header"></section>

      <section className="content">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Liste fiche contrôle technique</h3>
            <div className="card-tools">
              {" "}
              <Link
                type="button"
                className="btn btn-primary"
                to={"/ficheTech/add"}
              >
                Ajouter
              </Link>
            </div>
          </div>
          <div className="card-body p-0">
            <table className="table table-striped projects">
              <thead>
                <tr>
                  <th style={{ width: "15%" }}>N°</th>
                  <th style={{ width: "20%" }}>Date</th>

                  <th style={{ width: "30%" }}>Véhicule </th>
                  <th> Contenu</th>
                  <th style={{ width: "30%" }}>Ajouter le </th>
                </tr>
              </thead>
              <tbody>
                {list.map((elm, ind) => (
                  <tr>
                    <td>{ind + 1}</td>
                    <td>{elm.date}</td>
                    <td>{elm.vehicule && elm.vehicule.immat}</td>
                    <td>{elm.content}</td>
                    <td>{moment(elm.createdAt).format("DD-MM-YYYY")}</td>
                    <td
                      className="project-actions text-right"
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Link
                        className="btn btn-info btn-sm mr-2 "
                        to={`/ficheTech/edit/${elm._id}`}
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
        </div>
      </section>
    </div>
  );
};

export default FicheTechList;
