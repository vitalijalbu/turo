import React, { useState, useEffect } from "react";


import { Button, Heading } from '@chakra-ui/react';

const Business = () => {
  return (
    
   <div className="page">
   <div className="page-content">
  
   <div className="container">
   <div _ngcontent-yqm-c0="" className="col px-0">
  <div _ngcontent-yqm-c0="" className="container section with-image">
    <div _ngcontent-yqm-c0="" className="row align-items-center">
      <div _ngcontent-yqm-c0="" className="col col-md-6 order-1 order-md-0">
        <div _ngcontent-yqm-c0="" className="row">
          <div _ngcontent-yqm-c0="" className="col pt-4 mt-2 pt-md-0 mt-md-0">
            <Heading> La tua dashboard personale </Heading>
          </div>
        </div>
        <div _ngcontent-yqm-c0="" className="row">
          <div _ngcontent-yqm-c0="" className="col">
            {" "}
            Una volta che le tue inserzioni sono state pubblicate con noi, puoi
            gestire i tuoi contatti e le vendite attraverso la tua dashboard
            personale. La nostra interfaccia intuitiva e i sistemi integrati
            facilitano il tuo lavoro.{" "}
          </div>
        </div>
      </div>
      <div
        _ngcontent-yqm-c0=""
        className="col-md-6 order-0 order-md-1 text-center"
      >
        <picture _ngcontent-yqm-c0="">
          <img
            _ngcontent-yqm-c0=""
            alt=""
            src="https://res.listglobally.com/puzzle/dashboard"
          />
        </picture>
      </div>
    </div>
  </div>
</div>

<div _ngcontent-yqm-c0="" className="row">
  <div _ngcontent-yqm-c0="" className="col">
    <div _ngcontent-yqm-c0="" className="container section section-end">
      <div _ngcontent-yqm-c0="" className="row">
        <h2 _ngcontent-yqm-c0="" className="mb-0">
          I nostri prodotti
        </h2>
      </div>
      <div _ngcontent-yqm-c0="" className="row products">
        {/**/}
        <div _ngcontent-yqm-c0="" className="col-12 col-md-4 mt-2 pt-4">
          <div _ngcontent-yqm-c0="" className="row">
            <img
              _ngcontent-yqm-c0=""
              alt=""
              src="https://res.listglobally.com/puzzle/Global.png"
            />
          </div>
          <div _ngcontent-yqm-c0="" className="row">
            <div _ngcontent-yqm-c0="" className="col pt-3">
              <h3 _ngcontent-yqm-c0="" className="row">
                {" "}
                Global
              </h3>
              <div _ngcontent-yqm-c0="" className="row">
                {" "}
                La nostra soluzione tutto-in-uno per far crescere il tuo
                pubblico e le tue prestazioni. Distinguiti dalla concorrenza e
                porta la tua inserzione a livello globale.{" "}
              </div>
            </div>
          </div>
          <div _ngcontent-yqm-c0="" className="row">
            <u _ngcontent-yqm-c0="">
              <a
                _ngcontent-yqm-c0=""
                className="theme-color-primary"
                href="/global"
              >
                {" "}
                Scopri di più{" "}
              </a>
            </u>
          </div>
        </div>
        <div _ngcontent-yqm-c0="" className="col-12 col-md-4 mt-2 pt-4">
          <div _ngcontent-yqm-c0="" className="row">
            <img
              _ngcontent-yqm-c0=""
              alt=""
              src="https://res.listglobally.com/puzzle/Elite.png"
            />
          </div>
          <div _ngcontent-yqm-c0="" className="row">
            <div _ngcontent-yqm-c0="" className="col pt-3">
              <h3 _ngcontent-yqm-c0="" className="row">
                {" "}
                Elite
              </h3>
              <div _ngcontent-yqm-c0="" className="row">
                {" "}
                Elite posiziona le tue proprietà in cima ai risultati di ricerca
                sui portali Properstar, facendo in modo che siano viste dal
                maggior numero possibile di utenti.{" "}
              </div>
            </div>
          </div>
          <div _ngcontent-yqm-c0="" className="row">
            <u _ngcontent-yqm-c0="">
              <a
                _ngcontent-yqm-c0=""
                className="theme-color-primary"
                href="/elite"
              >
                {" "}
                Scopri di più{" "}
              </a>
            </u>
          </div>
        </div>
        <div _ngcontent-yqm-c0="" className="col-12 col-md-4 mt-2 pt-4">
          <div _ngcontent-yqm-c0="" className="row">
            <img
              _ngcontent-yqm-c0=""
              alt=""
              src="https://res.listglobally.com/puzzle/Luxury.png"
            />
          </div>
          <div _ngcontent-yqm-c0="" className="row">
            <div _ngcontent-yqm-c0="" className="col pt-3">
              <h3 _ngcontent-yqm-c0="" className="row">
                {" "}
                Luxury
              </h3>
              <div _ngcontent-yqm-c0="" className="row">
                {" "}
                Pubblica i tuoi annunci sui portali immobiliari di prestigio più
                importanti del mondo, tra cui Mansion Global e The Wall Street
                Journal.{" "}
              </div>
            </div>
          </div>
          <div _ngcontent-yqm-c0="" className="row">
            <u _ngcontent-yqm-c0="">
              <a
                _ngcontent-yqm-c0=""
                className="theme-color-primary"
                href="/luxury"
              >
                {" "}
                Scopri di più{" "}
              </a>
            </u>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   </div>
    </div>
    </div>
    
  );
};

export default Business;
