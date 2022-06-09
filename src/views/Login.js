import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginUserApi } from "../store/actions/auth.actions";
import { useToasts } from "react-toast-notifications";
import Modal from "react-modal";
import { sendEmail } from "../store/actions/user.actions";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");
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
  const [email, setEmail] = useState("");
  const onSubmit = (data) => {
    console.log(data);
    dispatch(loginUserApi(data, navigate, addToast));
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  return (
    <div className="login-page">
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        style={customStyles}
        contentLabel="Reinitialiser Mot de passe"
      >
        <div
          style={{
            wdith: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <p>Saisir Votre Adresse Email</p>
          <form className="form-inline">
            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="inputPassword2" className="sr-only">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputPassword2"
                placeholder="Email"
                value={email}
                onChange={(ev) => {
                  setEmail(ev.target.value);
                }}
              />
            </div>
            <button
              onClick={() => {
                dispatch(sendEmail(email));
                setIsOpen(false);
              }}
              className="btn btn-primary mb-2 mx-2"
            >
              Envoyer
            </button>
            <button
              onClick={() => {
                setIsOpen(false);
              }}
              className="btn btn-danger mb-2"
            >
              Annuler
            </button>
          </form>
        </div>
      </Modal>
      <div className="login-box">
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
                    //  }}
                  >
                    Se connecter
                  </button>
                </div>
                {/* /.col */}
              </div>
            </form>

            {/* /.social-auth-links */}
            <p className="mb-1">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(true);
                }}
              >
                mot de passe oublié ?
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
