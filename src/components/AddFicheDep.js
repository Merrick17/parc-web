import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddFicheDepApi } from "../store/actions/ficheDep.actions";
import { getVehiculeApi } from "../store/actions/vehicule.actions";
const AddFicheDep = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list } = useSelector((state) => state.vehicule);
  const onSubmit = (data) => {
    dispatch(AddFicheDepApi(data));
    navigate(-1);
  };
  useEffect(() => {
    dispatch(getVehiculeApi());
  }, []);
  //id,
  //date,
  //tvs,
  //entretien,
  //reparation,
  //coutAssurance,
  //carburant,
  return (
    <div className="d-flex justify-content-center align-items-center flex-1">
      <div className="row w-100" style={{ width: "90%", marginTop: "2em" }}>
        <div className="col-auto " style={{ minWidth: "100% " }}>
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Ajouter Fiche Dépenses</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
              <div className="form-group">
                <label htmlFor="exampleInputEmail0"> Date </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleInputEmail0"
                  placeholder="Date"
                  {...register("date", { required: true })}
                />
                {errors.date && (
                  <span className="text-danger p-2">Champ obligatoire</span>
                )}
              </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">TVS</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="TVS"
                    {...register("tvs", {
                      required: true,
                    })}
                  />
                  {errors.tvs && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Entretien</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Entretien"
                    {...register("entretien", { required: true })}
                  />
                  {errors.entretien && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Reparation</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Reparation"
                    {...register("reparation", { required: true })}
                  />
                  {errors.reparation && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Coût d'assurance</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Coûtd'assurance"
                    {...register("coutAssurance", { required: true })}
                  />
                  {errors.coutAssurance && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Carburant</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Carburant"
                    {...register("carburant", { required: true })}
                  />
                  {errors.carburant && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0"> Vehicule </label>
                  <select
                    className="form-control"
                    {...register("vehicule", { required: true })}
                  >
                    <option value="" disabled selected>
                      Immatriculation
                    </option>
                    {list.map((elm) => (
                      <option value={elm._id}> {elm.immat}</option>
                    ))}
                  </select>
                  {errors.vehicule && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
              </div>

              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" className="btn btn-primary mx-3">
                  Confirmer
                </button>
                <button type="button" className="btn btn-danger">
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
export default AddFicheDep;
