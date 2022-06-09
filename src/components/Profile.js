import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import moment from "moment";
import { updatePhoto, updateUserApi } from "../store/actions/user.actions";
import { BASE_URL } from "../utils/apiHelpers";
const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [image, setImage] = useState(null);
  const [imgPath, setImgPath] = useState("");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    console.log("USer Info",userInfo)
    setValue("cin", userInfo.cin);
    setValue("name", userInfo.name);
    setValue("lastName", userInfo.lastName);
    setValue("address", userInfo.address);
    setValue("phoneNumber", userInfo.phoneNumber);
    setValue("userName", userInfo.userName);
    setValue(
      "birthDate",
      moment(new moment(userInfo.birthDate, "YYYY-MM-DD").toDate()).format(
        "YYYY-MM-DD"
      )
    );
    setValue("civilState", userInfo.civilState.toUpperCase());
  }, [userInfo]);
  const onSubmit = (data) => {
    
    dispatch(updateUserApi(userInfo._id, data));
    //navigate(-1);
  };
  const UploadImg = () => {
    let formData = new FormData();
    formData.append("image", image);
    dispatch(updatePhoto(userInfo._id, formData));
  };
  return (
    <div>
      <section className="content-header"></section>

      <section className="content mt-5">
        <div className="card" style={{ border: "none" }}>
          <div className="card-body p-0">
            <div className="row d-flex justify-content-center ml-5">
              <div className="col-auto">
                <div className="card mb-4 mb-xl-0">
                  <div className="card-header">Photo de profile</div>
                  <div className="card-body text-center">
                    {userInfo.profilePic == "" ? (
                      <img
                        src="http://bootdey.com/img/Content/avatar/avatar1.png"
                        className="img-account-profile rounded-circle mb-2"
                      />
                    ) : (
                      <img
                        className="img-account-profile rounded-circle mb-2"
                        src={`${BASE_URL}/${userInfo.profilePic}`}
                        style={{
                          width: 200,
                          height: 200,
                          objectFit: "contain",
                        }}
                      />
                    )}

                    <div className="small font-italic text-muted mb-4">
                      {/* JPG or PNG no larger than 5 MB */}
                    </div>
                    <input
                      type={"file"}
                      className="form-control mb-3"
                      onChange={(e) => {
                        setImage(e.target.files[0]);
                        setImgPath(e.target.value);
                        console.log("Img path", imgPath);
                      }}
                    />
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={() => {
                        UploadImg();
                      }}
                    >
                      Modifier photo de profil
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <div className="card mb-4">
                  <div className="card-header">Information Personnel</div>
                  <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="mb-3">
                        <label className="small mb-1" htmlFor="inputUsername">
                          Nom Utilisateur
                        </label>
                        <input
                          className="form-control"
                          id="inputUsername"
                          type="text"
                          placeholder="Login"
                          {...register("userName", {
                            required: true,
                          })}
                        />
                        {errors.userName && (
                          <span className="text-danger p-2">
                            Champ obligatoire ou Invalide
                          </span>
                        )}
                      </div>
                      <div className="mb-3">
                        <label className="small mb-1" htmlFor="inputUsername">
                          CIN
                        </label>
                        <input
                          className="form-control"
                          id="inputUsername"
                          type="text"
                          placeholder="Login"
                          {...register("cin", {
                            required: true,
                          })}
                        />
                        {errors.cin && (
                          <span className="text-danger p-2">
                            Champ obligatoire ou Invalide
                          </span>
                        )}
                      </div>
                      <div className="row gx-3 mb-3">
                        <div className="col-md-6">
                          <label
                            className="small mb-1"
                            htmlFor="inputFirstName"
                          >
                            Prénom
                          </label>
                          <input
                            className="form-control"
                            id="inputFirstName"
                            type="text"
                            placeholder="Prénom"
                            {...register("name", {
                              pattern: "",
                              required: true,
                            })}
                          />
                          {errors.name && (
                            <span className="text-danger p-2">
                              Champ obligatoire ou invalide{" "}
                            </span>
                          )}
                        </div>
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputLastName">
                            Nom
                          </label>
                          <input
                            className="form-control"
                            id="inputLastName"
                            type="text"
                            placeholder="Enter your last name"
                            {...register("lastName", { required: true })}
                          />
                          {errors.lastName && (
                            <span className="text-danger p-2">
                              Champ obligatoire ou invalide{" "}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="row gx-3 mb-3">
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputOrgName">
                            Etat Civile
                          </label>
                          <select
                            className="form-control"
                            id="inputOrgName"
                            type="text"
                            placeholder="Enter your organization name"
                            {...register("civilState", { required: true })}
                          >
                            <option value={"CELIBATAIRE"}>Celibataire</option>
                            <option value={"VEUF"}>Veuf</option>
                            <option value={"MARIEE"}>Marié</option>
                            <option value={"DiVORCE"}>Divorcé</option>
                          </select>
                          {errors.civilState && (
                            <span className="text-danger p-2">
                              Champ obligatoire ou invalide{" "}
                            </span>
                          )}
                        </div>
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputLocation">
                            Adresse
                          </label>
                          <input
                            className="form-control"
                            id="inputLocation"
                            type="text"
                            placeholder="Adresse"
                            {...register("address", { required: true })}
                          />
                          {errors.address && (
                            <span className="text-danger p-2">
                              Champ obligatoire ou invalide{" "}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="row gx-3 mb-3">
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputPhone">
                            Numéro de téléphone
                          </label>
                          <input
                            className="form-control"
                            id="inputPhone"
                            type="tel"
                            placeholder="Numéro de télephone"
                            {...register("phoneNumber", { required: true })}
                          />
                          {errors.phoneNumber && (
                            <span className="text-danger p-2">
                              Champ obligatoire ou invalide{" "}
                            </span>
                          )}
                        </div>
                        <div className="col-md-6">
                          <label className="small mb-1" htmlFor="inputBirthday">
                            Date de naissance
                          </label>
                          <input
                            className="form-control"
                            id="inputBirthday"
                            type="date"
                            {...register("birthDate", { required: true })}
                          />
                          {errors.birthDate && (
                            <span className="text-danger p-2">
                              Champ obligatoire ou invalide{" "}
                            </span>
                          )}
                        </div>
                      </div>
                      <button className="btn btn-primary" type="submit">
                        Modifier
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
{
  /* <div>
      <section className="content-header"></section>

      <section className="content">
        <div className="row">
          <div className="col-xl-4">
            <div className="card mb-4 mb-xl-0">
              <div className="card-header">Profile Picture</div>
              <div className="card-body text-center">
                <img
                  className="img-account-profile rounded-circle mb-2"
                  src="http://bootdey.com/img/Content/avatar/avatar1.png"
                  alt
                />
                <div className="small font-italic text-muted mb-4">
                  JPG or PNG no larger than 5 MB
                </div>
                <button className="btn btn-primary" type="button">
                  Upload new image
                </button>
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="card mb-4">
              <div className="card-header">Account Details</div>
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputUsername">
                      Username (how your name will appear to other users on the
                      site)
                    </label>
                    <input
                      className="form-control"
                      id="inputUsername"
                      type="text"
                      placeholder="Enter your username"
                      defaultValue="username"
                    />
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputFirstName">
                        First name
                      </label>
                      <input
                        className="form-control"
                        id="inputFirstName"
                        type="text"
                        placeholder="Enter your first name"
                        defaultValue="Valerie"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLastName">
                        Last name
                      </label>
                      <input
                        className="form-control"
                        id="inputLastName"
                        type="text"
                        placeholder="Enter your last name"
                        defaultValue="Luna"
                      />
                    </div>
                  </div>
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputOrgName">
                        Organization name
                      </label>
                      <input
                        className="form-control"
                        id="inputOrgName"
                        type="text"
                        placeholder="Enter your organization name"
                        defaultValue="Start Bootstrap"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputLocation">
                        Location
                      </label>
                      <input
                        className="form-control"
                        id="inputLocation"
                        type="text"
                        placeholder="Enter your location"
                        defaultValue="San Francisco, CA"
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="small mb-1" htmlFor="inputEmailAddress">
                      Email address
                    </label>
                    <input
                      className="form-control"
                      id="inputEmailAddress"
                      type="email"
                      placeholder="Enter your email address"
                      defaultValue="name@example.com"
                    />
                  </div>
                 
                  <div className="row gx-3 mb-3">
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputPhone">
                        Phone number
                      </label>
                      <input
                        className="form-control"
                        id="inputPhone"
                        type="tel"
                        placeholder="Enter your phone number"
                        defaultValue="555-123-4567"
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="small mb-1" htmlFor="inputBirthday">
                        Birthday
                      </label>
                      <input
                        className="form-control"
                        id="inputBirthday"
                        type="text"
                        name="birthday"
                        placeholder="Enter your birthday"
                        defaultValue="06/10/1988"
                      />
                    </div>
                  </div>
                  <button className="btn btn-primary" type="button">
                    Save changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div> */
}
