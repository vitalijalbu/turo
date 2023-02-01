import React from 'react';
import { Grid, Container, Group, Title, Text, Button } from '@mantine/core';


const HeroBanner = (props) => {

  return (
    <section className="section-content">
      <Container size="xl">
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
    <Container size="xl">
      <div className="row">
        <div className="col-12">
          <div className="hero-text-wrapper bg-dark">
            {props.title &&  <Title>{props.title}</Title>}
            {props.subtitle && <Text>Cerca i migliori annunci</Text>}
            {props.primaryAction && <Button>{props.primaryAction}</Button>}
          </div>
        </div>
      </div>
    </Container>
    </div>
    </Container>
  </section>

  );
}
export default HeroBanner;