import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getFicheDepApi,
  deleteFicheDepApi,
} from "../store/actions/ficheDep.actions";
import Swal from "sweetalert2";
const FicheDepList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFicheDepApi());
  }, []);
  const { list } = useSelector((state) => state.ficheDep);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Est ce que vous voulez supprimer cette fiche  ",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Confirmer",
      denyButtonText: `Annuler`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log("confirmer");
        dispatch(deleteFicheDepApi(id));
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
            <h3 className="card-title">Fiche Dépenses </h3>
            <div className="card-tools">
              {" "}
              <Link
                type="button"
                className="btn btn-primary"
                to={"/fichedep/add"}
              >
                Ajouter
              </Link>
            </div>
          </div>
          <div className="card-body p-0">
            <table className="table table-striped projects">
              <thead>
                <tr>
                  <th style={{ width: "15%" }}>Id </th>
                  <th style={{ width: "20%" }}>Vehicule</th>
                  <th style={{ width: "20%" }}>Date</th>
                  <th> TVS</th>
                  <th style={{ width: "30%" }}>Entretien </th>
                  <th className="text-center">Reparation</th>
                  <th className="text-center">Coût d'assurance</th>
                  <th style={{ width: "30%" }}>Carburant</th>
                </tr>
              </thead>
              <tbody>
                {list.map((elm, ind) => (
                  <tr>
                    <td>{ind + 1}</td>
                    <td>{elm.vehicule && elm.vehicule.immat}</td>
                    <td>{elm.date}</td>
                    <td>{elm.tvs}</td>
                    <td>{elm.entretien}</td>
                    <td>{elm.reparation}</td>
                    <td>{elm.coutAssurance}</td>
                    <td>{elm.carburant}</td>

                    <td
                      className="project-actions text-right"
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Link
                        className="btn btn-info btn-sm mr-2 "
                        to={`/ficheDep/edit/${elm._id}`}
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

export default FicheDepList;
