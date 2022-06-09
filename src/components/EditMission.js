import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { AddMissionApi, updateMission } from "../store/actions/mission.actions";
const EditMission = () => {
  const params = useParams();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.users).list;
  const vehiculeList = useSelector((state) => state.vehicule).list;
  const missionList = useSelector((state) => state.missions).list;
  const onSubmit = (data) => {
    console.log("Data", data);
    dispatch(updateMission(data, params.id));
    navigate(-1);
  };
  // dateMission,
  //startTime,
  // arrivalTime,
  //destination,
  //evaluation,
  //cause,
  // chauffeur,
  // vehicule,
  useEffect(() => {
    let selectedMission = missionList.find((elm) => elm._id == params.id);
    if (selectedMission) {
      console.log("Selected Mission", selectedMission);
      setValue("dateMission", selectedMission.dateMission);
      setValue("startTime", selectedMission.startTime);
      setValue("arrivalTime", selectedMission.arrivalTime);
      setValue("destination", selectedMission.destination);
      setValue("evaluation", selectedMission.evaluation);
      setValue("cause", selectedMission.cause);
      setValue("chauffeur", selectedMission.chauffeur);
      setValue("vehicule", selectedMission.vehicule);
    }
  }, [params]);
  return (
    <div className="d-flex justify-content-center align-items-center flex-1">
      <div className="row w-100" style={{ width: "90%", marginTop: "2em" }}>
        <div className="col-auto " style={{ minWidth: "100% " }}>
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Modifier Mission</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="date"
                    {...register("dateMission", { required: true })}
                  />
                  {errors.dateMission && (
                    <span className="text-danger p-2">Champ invalide</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Heure de départ</label>
                  <input
                    type="time"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Heure de départ"
                    {...register("startTime", { required: true })}
                  />
                  {errors.startTime && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Heure d'arrivé</label>
                  <input
                    type="time"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Heure d'arrivé"
                    {...register("arrivalTime", { required: true })}
                  />
                  {errors.arrivalTime && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Destination </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Destination"
                    {...register("destination", { required: true })}
                  />
                  {errors.destination && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0"> Cause</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Cause "
                    {...register("cause", { required: true })}
                  />
                  {errors.cause && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0"> Evaluation</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Evaluation "
                    {...register("evaluation", { required: false })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0"> Chauffeur</label>
                  <select className="form-control" {...register("chauffeur")}>
                    <option value="" disabled selected>
                      Selectionner un chauffeur
                    </option>
                    {userList.map((elm) => (
                      <option value={elm._id}>
                        {elm.name} {elm.lastName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0"> Vehicule</label>
                  <select className="form-control" {...register("vehicule")}>
                    <option value="" disabled selected>
                      Selectionner une vehicule
                    </option>
                    {vehiculeList.map((elm) => (
                      <option value={elm._id}>{elm.immat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="card-footer">
                <button type="submit" className="btn btn-primary mx-3">
                  Confirmer
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditMission;
