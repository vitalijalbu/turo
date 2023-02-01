import React from 'react';
import { Button } from "framework7-react";


const PromoBanner = (props) => {

  return (
    <section>
      <div>
      <div className="container">
    <div className="hero-wrapper dark overlay" style={{borderRadius: '12px'}}>
    {/* - img*/}
    <div className="img-responsive-wrapper">
      <div className="img-responsive">
        <div className="img-wrapper">
          <img
            src={props.imageUrl ? props.imageUrl : "https://via.placeholder.com/1920x800"}
            title="titolo immagine"
            alt="descrizione immagine"
          />
        </div>
      </div>
    </div>
    {/* - texts*/}
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="hero-text-wrapper bg-dark">
            {props.title &&  <h1>{props.title}</h1>}
            {props.subtitle && <p>Cerca i migliori annunci</p>}
            {props.primaryAction && <Button>{props.primaryAction}</Button>}
          </div>
        </div>
      </div>
    </div>
    
  </div>
  </div>
    </div>
  </section>

  );
}
export default PromoBanner;