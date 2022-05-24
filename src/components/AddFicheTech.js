import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddFicheTechApi } from "../store/actions/ficheTech.actions";
import { getVehiculeApi } from "../store/actions/vehicule.actions";
const AddFicheTech = () => {
  const {
    register,
    handleSubmit,
    //watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { list } = useSelector((state) => state.vehicule);
  useEffect(() => {
    dispatch(getVehiculeApi());
  }, []);
  const onSubmit = (data) => {
    dispatch(AddFicheTechApi(data));
    navigate(-1);
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-1">
      <div className="row w-100" style={{ width: "90%", marginTop: "2em" }}>
        <div className="col-auto " style={{ minWidth: "100% " }}>
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Ajouter Fiche Technique </h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                {/* <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Id</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Id"
                    {...register("id", { required: true })}
                  />
                  {errors.id && (
                    <span className="text-danger p-2">Champ invalide</span>
                  )}
                </div> */}
              </div>
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
              <div className="form-group">
                <label htmlFor="exampleInputEmail0">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail0"
                  placeholder="Contenu"
                  {...register("content", { required: true })}
                />
                {errors.content && (
                  <span className="text-danger p-2">Champ obligatoire</span>
                )}
              </div>

              {/* /.card-body */}
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
export default AddFicheTech;
