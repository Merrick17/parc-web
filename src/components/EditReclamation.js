import React, { useEffect, useState, useMemo } from "react";
import { useForm } from "react-hook-form";
//import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateReclamationApi } from "../store/actions/reclamation.actions";

const EditReclamation = () => {
  let params = useParams();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { list } = useSelector((state) => state.reclamation);

  const getSelectedReclamation = () => {
    if (list.length != 0) {
      let selectedReclamation = list.find((elm) => elm._id == params.amani);
      console.log("Selected Reclamation", selectedReclamation);
      setValue("date", selectedReclamation.date);
      setValue("contenu ", selectedReclamation.contenu);
    }
  };
  const onSubmit = (data) => {
    dispatch(updateReclamationApi(params.amani, data));
    navigate(-1);
  };
  useEffect(() => {
    console.log("Params", params._id);
    getSelectedReclamation();
  }, [params]);
  return (
    <div className="d-flex justify-content-center align-items-center flex-1">
      <div className="row w-100" style={{ width: "90%", marginTop: "2em" }}>
        <div className="col-auto " style={{ minWidth: "100% " }}>
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Modifier Réclamation</h3>
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

export default EditReclamation;
