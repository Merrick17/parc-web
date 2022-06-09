import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddVehiculeApi } from "../store/actions/vehicule.actions";
const AddVehicule = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    dispatch(AddVehiculeApi(data));
    navigate(-1);
  };
  // immat,
  // marque,
  // model,
  // color,
  // buyingPrice,
  // buyingDate,
  // maxWeight,
  // dispo,
  // doorNumber,
  // typeVehicule,
  // nbTires,
  return (
    <div className="d-flex justify-content-center align-items-center flex-1">
      <div className="row w-100" style={{ width: "90%", marginTop: "2em" }}>
        <div className="col-auto " style={{ minWidth: "100% " }}>
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Ajouter Vehicule</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Immatriculation</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Immatriculation"
                    {...register("immat", {
                      required: true,
                    })}
                  />
                  {errors.immat && (
                    <span className="text-danger p-2">Champ invalide</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Marque</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Marque"
                    {...register("marque", { required: true })}
                  />
                  {errors.marque && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Model</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Modele"
                    {...register("model", { required: true })}
                  />
                  {errors.model && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Couleur</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Couleur"
                    {...register("color", { required: true })}
                  />
                  {errors.color && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Prix d'achat </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Prix d'achat"
                    {...register("buyingPrice", { required: true })}
                  />
                  {errors.buyingPrice && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0"> Date d'achat</label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Date d'achat "
                    {...register("buyingDate", { required: true })}
                  />
                  {errors.buyingDate && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Poids Maximale </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Poids Maximale"
                    {...register("maxWeight", { required: true })}
                  />
                  {errors.maxWeight && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="civil">Disponibilité </label>
                  <select
                    className="form-control"
                    id="civil"
                    placeholder="Disponibilité"
                    {...register("dispo", {
                      required: true,
                      defaultValue: true,
                    })}
                  >
                    <option value={true}>DISPONIBLE</option>
                    <option value={false}>NON DISPONIBLE</option>
                  </select>

                  {errors.dispo && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1"> Nombre de portes </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Nombre de portes "
                    {...register("doorNumber", { required: true })}
                  />{" "}
                  {errors.doorNumber && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1"> Nombre des roues </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Nombre de roues "
                    {...register("nbTires", { required: true })}
                  />{" "}
                  {errors.nbTires && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="role">Type vihécule </label>
                  <select
                    className="custom-select custom-select-md"
                    id="role"
                    {...register("typeVehicule", {
                      required: true,
                      defaultValue: "CAMION",
                    })}
                  >
                    <option value="VOITURE">Voiture de fonction</option>
                    <option value="SEMI">Semi Remorque</option>
                    <option value="POID_LOURD">Poids Lourd</option>
                    <option value="PARTNER">Partner</option>
                  </select>
                  {errors.typeVehicule && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
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

export default AddVehicule;
