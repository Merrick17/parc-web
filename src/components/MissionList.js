import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteMissionApi,
  finishMission,
  getMissionApi,
} from "../store/actions/mission.actions";
import Swal from "sweetalert2";

const MissionList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissionApi());
  }, []);
  const inputOptions = new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        1: "Success",
        0: "Echec",
      });
    }, 1000);
  });

  const handleTerminate = async (id) => {
    const { value: ev } = await Swal.fire({
      title: "Selectionner une evaluation",
      input: "radio",
      inputOptions: inputOptions,
      inputValidator: (value) => {
        if (!value) {
          return "You need to choose something!";
        }
      },
    });
    console.log(`you selected ${ev}`);
    dispatch(finishMission({ evaluation: ev }, id));
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Est ce que vous voulez supprimer cette mission  ",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Confirmer",
      denyButtonText: `Annuler`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        console.log("confirmer");
        dispatch(deleteMissionApi(id));
      } else if (result.isDenied) {
        console.log("Annuler");
      }
    });
  };
  const { list } = useSelector((state) => state.missions);
  return (
    <div>
      <section className="content-header"></section>

      <section className="content">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Mission </h3>
            <div className="card-tools">
              <Link
                type="button"
                className="btn btn-primary"
                to={"/mission/add"}
              >
                Ajouter
              </Link>
            </div>
          </div>
          <div className="card-body p-0">
            <table className="table table-striped projects">
              <thead>
                <tr>
                  <th style={{ width: "10%" }}>N°</th>
                  <th style={{ width: "20%" }}>Date</th>
                  <th style={{ width: "20%" }}>nom de chauffeur</th>
                  <th style={{ width: "20%" }}>Immatriculation </th>
                  <th style={{ width: "20%" }}>Heure de départ</th>
                  <th style={{ width: "20%" }}>Heure d'arrivé</th>
                  <th style={{ width: "10%" }}>Destination</th>
                  <th style={{ width: "20%" }}>Cause</th>
                  <th style={{ width: "20%" }}>Etat</th>
                </tr>
              </thead>
              <tbody>
                {list.map((elm, ind) => (
                  <tr>
                    <td>{ind + 1}</td>
                    <td>{elm.dateMission}</td>
                    <td>
                      <a>
                        {elm.chauffeur.name} {elm.chauffeur.lastName}
                      </a>
                      <br />
                    </td>
                    <td>{elm.vehicule.immat}</td>
                    <td>{elm.startTime}</td>
                    <td>{elm.arrivalTime}</td>
                    <td>{elm.destination}</td>
                    <td>{elm.cause}</td>

                    <td className="project-state">
                      {elm.isFinished ? (
                        "Terminer"
                      ) : (
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => {
                            handleTerminate(elm._id);
                          }}
                        >
                          Terminer
                        </button>
                      )}
                    </td>
                    <td
                      className="project-actions text-right"
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <Link
                        className="btn btn-info btn-sm mr-2 "
                        to={`/mission/edit/${elm._id}`}
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

export default MissionList;
