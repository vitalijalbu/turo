import { Heading } from '@chakra-ui/react';
import React from 'react';



const HeroBanner = (props) => {

  return (
<section className="hero-banner overlay">
<div className="container">
<div className="hero-wrapper">
  {/* - img*/}
  <div className="img-responsive-wrapper">
    <div className="img-responsive">
      <div className="img-wrapper">
        <img
          src="https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg"
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
          <Heading>
          {props.title}
          </Heading>
          <p className="d-none d-lg-block">
          {props.subtitle}
          </p>
          <div className="btn-container">
            <a className="btn btn-sm btn-secondary" href="#">
              Label CTA
            </a>
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
export default HeroBanner;