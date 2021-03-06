import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddMissionApi } from "../store/actions/mission.actions";
import { getUsersApi } from "../store/actions/user.actions";
import { getVehiculeApi } from "../store/actions/vehicule.actions";
const InfoCard = ({ control }) => {
  const vehicule = useWatch({
    control,
    name: "vehicule",
  });
  const vehiculeList = useSelector((state) => state.vehicule).list;
  let itm = vehiculeList.find((elm) => elm._id == vehicule);
  return itm ? (
    <div className="card" style={{ width: "100%", height: "100%" }}>
      <div className="card-header">{itm.immat}</div>
      <div className="card-body">
        <div className="row">
          <div className="col">
            <span>Couleur :{itm.color}</span>
            <hr />
            <span>Marque :{itm.marque}</span>
            <hr />
            <span>Model :{itm.model}</span>
          </div>
          <div className="col">
            <span>Nbr Roue :{itm.nbrTires}</span>
            <hr />
            <span>Type :{itm.typeVehicule}</span>
            <hr />
            <span>Nbr Portes :{itm.doorNumber}</span>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
};

const AddMission = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userList = useSelector((state) => state.users).list;
  const vehiculeList = useSelector((state) => state.vehicule).list;
  const onSubmit = (data) => {
    dispatch(AddMissionApi(data));
    navigate(-1);
  };
  useEffect(() => {
    dispatch(getUsersApi());
    dispatch(getVehiculeApi());
  }, []);
  // dateMission,
  //startTime,
  // arrivalTime,
  //destination,
  //evaluation,
  //cause,
  // chauffeur,
  // vehicule,

  return (
    <div className="d-flex justify-content-center align-items-center flex-1">
      <div className="row w-100" style={{ width: "90%", marginTop: "2em" }}>
        <div className="col-auto " style={{ minWidth: "100% " }}>
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Ajouter Mission</h3>
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
                  <label htmlFor="exampleInputEmail0">Heure de d??part</label>
                  <input
                    type="time"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Heure de d??part"
                    {...register("startTime", { required: true })}
                  />
                  {errors.startTime && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Heure d'arriv??</label>
                  <input
                    type="time"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Heure d'arriv??"
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
                  <label htmlFor="exampleInputEmail0"> Chauffeur</label>
                  <select
                    className="form-control"
                    {...register("chauffeur", { required: true })}
                  >
                    <option value="" disabled selected>
                      Selectionner un chauffeur
                    </option>
                    {userList
                      .filter(
                        (elm) =>
                          elm.role == "CHAUFFEUR" && elm.available == true
                      )
                      .map((elm) => (
                        <option value={elm._id}>
                          {elm.name} {elm.lastName}
                        </option>
                      ))}
                  </select>
                  {errors.evaluation && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail0"> Vehicule</label>
                      <select
                        className="form-control"
                        {...register("vehicule", { required: true })}
                      >
                        <option value="" disabled selected>
                          Selectionner une vehicule
                        </option>
                        {vehiculeList
                          .filter((elm) => elm.dispo == true)
                          .map((elm) => (
                            <option value={elm._id}>{elm.immat}</option>
                          ))}
                      </select>
                      {errors.evaluation && (
                        <span className="text-danger p-2">
                          Champ obligatoire
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-7">
                    <InfoCard control={control} />
                  </div>
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
export default AddMission;
