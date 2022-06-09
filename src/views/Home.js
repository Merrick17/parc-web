import React from "react";
import "../landing.css";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
        id="mainNav"
      >
        <div className="container px-4">
          <a className="navbar-brand">COGEB</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>
                  Se Connecter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Header*/}
      <header className="bg-primary bg-gradient text-white bg-image">
        <div className="container px-4 text-center">
          <h1 className="fw-bolder">COGEB</h1>
          <p className="lead">CONSTRUISONS L'AVENIR ENSEMBLE</p>
          <a className="btn btn-lg btn-light" href="#about">
            QUI SOMME NOUS ?
          </a>
        </div>
      </header>
      {/* About section*/}
      <section id="about" className="landing_section">
        <div className="container px-4">
          <div className="row gx-4 justify-content-center">
            <div className="col-lg-8">
              <h2>Qui somme nous ? </h2>
              <p className="lead">
                Fondé en 1980 par son président et fondateur Mr. Mohamed LAZREG,
                LE COMPTOIR GENERAL DE BATIMENT ( COGEB ) a pour objectif
                principal la commercialisation en gros des bois et dérivés, des
                matériaux de construction, des produits sidérurgiques, du
                sanitaires, des faïences et grés, de la robinetterie et en
                général tout produit du bâtiment. Le Comptoir Général de
                bâtiment est l’une des sociétés du GROUPE COGEB qui englobe
                aussi les sociétés : COGEB IMMOBILIERE, COGEB INTERNATIONAL,
                SOPRODI ET HUILERIE EL BARAKA. Forte d’une grande expérience et
                grâce à ses conseils, COGEB a su donner entière satisfaction à
                sa clientèle qui lui a toujours renouvelé sa confiance.
              </p>
            </div>

            <div className="col-lg-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.2954246828135!2d10.6442283!3d35.81722679999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1b3f54171a3ed815!2scogeb_groupe!5e0!3m2!1sfr!2stn!4v1653652996301!5m2!1sfr!2stn"
                style={{
                  width: "100%",
                  height: 450,
                  border: 0,
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light landing_section" id="contact">
        <div className="container px-4">
          <div className="row gx-4 justify-content-center">
            <div className="col-lg-8">
              <h2>Nous Contacter</h2>
              <div className="row">
                <div className="col-md-6">
                  <img src={logo} />
                </div>
                <div className="col-md-6">
                  <address>
                    Siège social Sousse 121 Avenue Hédi Nouira, 4003 Sousse
                  </address>
                  <br />
                  <ul>
                    <li>
                      +216 73 22 54 71/ +216 73 22 33 43 /+216 73 22 58 93
                    </li>
                    <li>contact@cogeb-groupe.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer*/}
      <footer className="py-5 bg-dark">
        <div className="container px-4">
          <p className="m-0 text-center text-white"></p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
