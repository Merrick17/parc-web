import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddReclamationApi } from "../store/actions/reclamation.actions";
const AddReclamation = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    dispatch(AddReclamationApi(data));
    navigate(-1);
  };
  // id,
  // date,
  // contenu,
  return (
    <div className="d-flex justify-content-center align-items-center flex-1">
      <div className="row w-100" style={{ width: "90%", marginTop: "2em" }}>
        <div className="col-auto " style={{ minWidth: "100% " }}>
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Ajouter Réclamation</h3>
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
                    placeholder="Date"
                    {...register("date", { required: true })}
                  />
                  {errors.date && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Contenu</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Contenu"
                    {...register("contenu", { required: true })}
                  />
                  {errors.contenu && (
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReclamation;
