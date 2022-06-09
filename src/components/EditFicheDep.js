import React, { useEffect, useState, useMemo } from "react";
import { useForm } from "react-hook-form";
//import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateFicheDepApi } from "../store/actions/ficheDep.actions";

const EditFicheDep = () => {
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
  const { list } = useSelector((state) => state.ficheDep);
  const vehiculeList = useSelector((state) => state.vehicule).list;

  const getSelectedFicheDep = () => {
    if (list.length != 0) {
      let selectedFicheDep = list.find((elm) => elm._id == params.id);
      console.log("Selected FicheDep", selectedFicheDep);
      setValue("tvs", selectedFicheDep.tvs);
      setValue("date", selectedFicheDep.date);
      setValue("entretien", selectedFicheDep.entretien);
      setValue("reparation", selectedFicheDep.reparation);
      setValue("coutAssurance", selectedFicheDep.coutAssurance);
      setValue("carburant", selectedFicheDep.carburant);
      setValue("vehicule", selectedFicheDep.vehicule._id);
      setValue("typePlafond", selectedFicheDep.typePlafond);
    }
  };
  const onSubmit = (data) => {
    dispatch(updateFicheDepApi(params.id, data));
    navigate(-1);
  };
  useEffect(() => {
    console.log("Params", params._id);
    getSelectedFicheDep();
  }, [params]);
  return (
    <div className="d-flex justify-content-center align-items-center flex-1">
      <div className="row w-100" style={{ width: "90%", marginTop: "2em" }}>
        <div className="col-auto " style={{ minWidth: "100% " }}>
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Modifier Fiche depenses</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">TVS</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="TVS"
                    {...register("tvs", { required: true })}
                  />
                  {errors.tvs && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>

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
                  <label htmlFor="exampleInputEmail0">Cout d'assurance</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Cout d'assurance"
                    {...register("coutAssurance", { required: true })}
                  />
                  {errors.coutAssurance && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                <div className="form-group">
                  <label>Plafond</label>
                  <div className="d-flex justify-content-evenly">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value={0}
                        {...register("typePlafond")}
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Sous Plafond
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value={1}
                        {...register("typePlafond")}
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Plafond
                      </label>
                    </div>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        value={2}
                        {...register("typePlafond")}
                      />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Sur Plafond
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Carburant </label>
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
                  <label htmlFor="exampleInputEmail0">Vehicule</label>
                  <select
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    {...register("vehicule", { required: false })}
                  >
                    {" "}
                    <option value={""}>Selectionner une vehicule</option>
                    {vehiculeList.map((elm) => (
                      <option value={elm._id}>{elm.immat}</option>
                    ))}
                  </select>
                  {errors.vehicule && (
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

export default EditFicheDep;
