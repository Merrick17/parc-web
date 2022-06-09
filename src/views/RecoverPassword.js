import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUserApi } from "../store/actions/auth.actions";
import { useToasts } from "react-toast-notifications";
import { postApi } from "../utils/apiHelpers";
import { showNotification } from "@mantine/notifications";
const Recover = () => {
  const navigate = useNavigate();
  const params = useParams();
  let { id } = params;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const onSubmit = async (data) => {
    console.log(data);
    let result = await postApi("user/resetpass/" + id, data);
    if (result.success) {
      showNotification({
        title: "Success",
        message: "Mot de passe modifier avec success, veuillez connecter ",
        color: "green",
      });
      setTimeout(() => {
        window.location.replace("http://localhost:3000/login");
      }, 3000);
    } else {
      showNotification({
        title: "Erreur",
        message: "Une erreur c'est produite",
        color: "red",
      });
    }

    // dispatch(loginUserApi(data, navigate, addToast));
  };
  return (
    <div className="login-page">
      <div className="login-box">
        {/* /.login-logo */}
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <b>Reinitialiser Mot de passe </b>
          </div>
          <div className="card-body">
            <p className="login-box-msg"> </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-group mb-3">
                <label> Saisir Mot de passe : </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Mot de passe"
                  {...register("password", { required: true })}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              {errors.password && (
                <span className="text-danger">Champ obligatoire</span>
              )}
              <div className="input-group mb-3">
                <label> Confirmer mot de passe : </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirmer Mot de passe"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (val) => {
                      if (watch("password") != val) {
                        return "Your passwords do no match";
                      }
                    },
                  })}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              {errors.confirmPassword && (
                <span className="text-danger">Champ obligatoire</span>
              )}
              <div
                className="row mt-3"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* /.col */}
                <div className="col-8 align-center">
                  <button
                    className="btn btn-primary btn-block"
                    type="submit"

                    // onClick={() => {
                    //   navigate("users");
                    //  }}
                  >
                    Modifier
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>

            {/* /.social-auth-links */}
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
    </div>
  );
};

export default Recover;
