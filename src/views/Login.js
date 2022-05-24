import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUserApi } from "../store/actions/auth.actions";
import { useToasts } from "react-toast-notifications";
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(loginUserApi(data, navigate, addToast));
  };
  return (
    <div className="login-page">
      <div className="login-box">
        {/* /.login-logo */}
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <b>Bienvenue</b>
          </div>
          <div className="card-body">
            <p className="login-box-msg"> </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nom utilisateur"
                  {...register("userName", { required: true })}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              {errors.userName && (
                <span className="text-danger">Champ obligatoire</span>
              )}
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Mot de passe"
                  {...register("password", { required: true })}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              {errors.password && (
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
                    // }}
                  >
                    S'authentifier
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>

            {/* /.social-auth-links */}
            <p className="mb-1">
              <a href="forgot-password.html">
                avez-vous oublier votre mot de passe
              </a>
            </p>
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
    </div>
  );
};

export default Login;
