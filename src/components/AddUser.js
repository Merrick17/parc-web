import React from "react";

const AddUser = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-1">
      <div classname="row w-100" style={{ width: "90%", marginTop: "5em" }}>
        <div className="col-auto ">
          <div className="card card-primary">
            <div className="card-header">
              <h3 className="card-title">Ajouter utilisateur</h3>
            </div>
            {/* /.card-header */}
            {/* form start */}
            <form>
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
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Nom</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Nom"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail0">Prénom</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail0"
                    placeholder="Prénom"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="civil">Etat Civile</label>
                  <input
                    type="text"
                    className="form-control"
                    id="civil"
                    placeholder="Etat Civile"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Date de naissance</label>
                  <input
                    type="date"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Date de naissance"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="role">Role</label>
                  <select class="custom-select custom-select-md" id="role">
                    <option selected>Gestionnaire</option>
                    <option value="1">Chauffeur</option>
                    <option value="2">Controleur</option>
                    <option value="3">Directeur</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
              </div>
              {/* /.card-body */}
              <div className="card-footer">
                <button type="submit" className="btn btn-primary mx-3">
                  Confirmer
                </button>
                <button type="submit" className="btn btn-danger">
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

export default AddUser;
