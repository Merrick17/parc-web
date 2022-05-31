import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUserApi } from "../store/actions/user.actions";
const AddDriver = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [isDriver, setIsDriver] = useState(false);
  let value = watch("role");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    dispatch(addUserApi(data));
    navigate(-1);
  };
  useMemo(() => {
    console.log("Value", value);
    if (value === "CHAUFFEUR") {
      setIsDriver(true);
    } else {
      setIsDriver(false);
    }
  }, [value]);
  return (
    <div className="d-flex justify-content-center align-items-center flex-1">
      <div className="row w-100" style={{ width: "90%", marginTop: "2em" }}>
        <div className="col-auto " style={{ minWidth: "100% " }}>
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Ajouter Chauffeur</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">
                    Carte identité Nationale
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Carte identité Nationale"
                    {...register("cin", {
                      required: true,
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Please enter a number",
                      },
                      minLength: 8,
                    })}
                  />
                  {errors.cin && (
                    <span className="text-danger p-2">Champ invalide</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Nom</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Nom"
                    {...register("lastName", { required: true })}
                  />
                  {errors.lastName && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Prénom</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Prénom"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Login</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Login"
                    {...register("userName", {
                      required: true,
                      pattern: {
                        value:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      },
                    })}
                  />
                  {errors.userName && (
                    <span className="text-danger p-2">
                      Champ obligatoire ou Invalide
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Numéro téléphone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Numéro Téléphone"
                    {...register("phoneNumber", {
                      required: true,
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Please enter a number",
                      },
                      minLength: 8,
                      maxLength: 8,
                    })}
                  />
                  {errors.phoneNumber && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Adresse</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Adresse"
                    {...register("address", { required: true })}
                  />
                  {errors.address && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="civil">Etat Civile</label>
                  <select
                    className="custom-select custom-select-md"
                    id="etat"
                    {...register("civilState", {
                      required: true,
                      defaultValue: "Célibataire",
                    })}
                  >
                    <option value={""} disabled selected>
                      SELECTIONNER
                    </option>
                    <option value={"CELIBATAIRE"}>Célibataire</option>
                    <option value="MARIEE">Mariée</option>
                    <option value="DIVORCE">Divorcé</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Date de naissance</label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Date de naissance"
                    {...register("birthDate", { required: true })}
                  />{" "}
                  {errors.birthDate && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    Catégorie de permis
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Catégorie Permis"
                    {...register("categDriver", { required: false })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Numero de permis</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Numéro Permis"
                    {...register("numDriver", {
                      required: false,
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Please enter a number",
                      },
                    })}
                  />
                  {errors.numDriver && (
                    <span className="text-danger p-2">Champ invalide</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
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

export default AddDriver;
