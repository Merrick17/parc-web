import React, { useEffect, useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUserApi } from "../store/actions/user.actions";
//import { EditUserApi } from "../store/actions/user.actions";
const EditUser = () => {
  let params = useParams();
  const [isDriver, setIsDriver] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  let value = watch("role");
  const navigate = useNavigate();
  const { list } = useSelector((state) => state.users);
  useMemo(() => {
    console.log("Value", value);
    if (value == "CHAUFFEUR") {
      setIsDriver(true);
    } else {
      setIsDriver(false);
    }
  }, [value]);
  const getSelectedUser = () => {
    if (list.length != 0) {
      let selectedUser = list.find((elm) => elm._id == params.id);
      console.log("Selected User", selectedUser);
      setValue("lastName", selectedUser.lastName);
      setValue("cin", selectedUser.cin);
      setValue("name", selectedUser.name);
      setValue("userName", selectedUser.userName);
      setValue("birthDate", selectedUser.birthDate);
      setValue("phoneNumber", selectedUser.phoneNumber);
      setValue("address", selectedUser.address);
      setValue("civilState", selectedUser.civilState);
      setValue("categDriver", selectedUser.categDriver);
      setValue("numDriver", selectedUser.numDriver);
      setValue("role", selectedUser.role);
    }
  };
  const onSubmit = (data) => {
    dispatch(updateUserApi(params.id, data));
    navigate(-1);
  };
  useEffect(() => {
    console.log("Params", params.id);
    getSelectedUser();
  }, [params]);
  return (
    <div className="d-flex justify-content-center align-items-center flex-1">
      <div className="row w-100" style={{ width: "90%", marginTop: "2em" }}>
        <div className="col-auto " style={{ minWidth: "100% " }}>
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Modifier utilisateur</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">
                    Carte identit?? Nationale
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Carte identit?? Nationale"
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
                  <label htmlFor="exampleInputEmail0">Pr??nom</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Pr??nom"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
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
                  <label htmlFor="exampleInputEmail0">Num??ro t??l??phone</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Num??ro T??l??phon"
                    {...register("phoneNumber", { required: true })}
                  />
                  {errors.phoneNumber && (
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
                      defaultValue: "C??libataire",
                    })}
                  >
                    <option value={""} disabled selected>
                      Selectionner un ??tat civile
                    </option>
                    <option value={"CELIBATAIRE"}>C??libataire</option>
                    <option value="MARIEE">Mari??(e)</option>
                    <option value="DIVORCE">Divorc??(e)</option>
                    <option value="VEUF">Veuf(ve)</option>
                  </select>
                </div>
                
                
                <div className="form-group">
                  <label htmlFor="role">Role</label>
                  <select
                    className="custom-select custom-select-md"
                    id="role"
                    {...register("role", {
                      required: true,
                      defaultValue: "GESTIONNAIRE",
                    })}
                  >
                    <option value={""} disabled>
                      SELECTIONNER UN ROLE
                    </option>
                    <option value="CHAUFFEUR">Chauffeur</option>
                    <option value={"GESTIONNAIRE"}>Gestionnaire</option>
                    <option value="CONTROLEUR">Controleur</option>
                    <option value="DIRECTEUR">Directeur</option>
                    <option value="ADMIN">Admin</option>
                  </select>
                  {errors.role && (
                    <span className="text-danger p-2">Champ obligatoire</span>
                  )}
                </div>
                {isDriver && (
                  <>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">
                        Cat??gorie de permis
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Cat??gorie Permis"
                        {...register("categDriver", { required: false })}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">
                        Numero de permis
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Num??ro Permis"
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
                  </>
                )}
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Nom d'utilisateur</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Nom d'utilisateur"
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
                  <label htmlFor="exampleInputPassword1">Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Mot de passe"
                    {...register("password", { required: false })}
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

export default EditUser;
