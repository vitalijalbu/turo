import React from 'react';
import { Row, Container, Group, Title, Text, Button } from 'reactstrap';


const PageHead = (props) => {


  return (
    <section className="hero-wrapper dark overlay" style={{borderRadius: '12px'}}>
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
    <Container>
      <div className="row">
        <div className="col-12">
          <div className="hero-text-wrapper bg-dark">
            {props.title &&  <Title>{props.title}</h1>}
            {props.subtitle && <p>Cerca i migliori annunci</p>}
            {props.primaryAction && <Button>{props.primaryAction}</Button>}
          </div>
        </div>
      </div>
    </Container>
  </section>

  );
}
export default PageHead;