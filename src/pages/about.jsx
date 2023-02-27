import React, { useState, useEffect } from "react";


import { Button, Col,  Row} from 'reactstrap';

const About = () => {
  return (
    
   <div className="page">
   <div className="page-content">
  
   <div className="container">
   <div className="col-xl-10 mx-auto text-center mb-3">
  {/* Title */}
  <h1>Il portale dedicato esclusivamente alla ricerca di hotel e ristoranti già esistenti o da realizzare</h1>
  <p className="lead">
  Resthotels è un portale immobiliare dedicato esclusivamente alla ricerca di hotel e ristoranti in vendita e in
affitto sul territorio italiano.
  </p>

</div>

    <Row>
      <Col md={10}>
      <h3 className="mb-4">Chi siamo</h3>
       Sul nostro portale potrai ricercare sai le attività dedicate a tale scopo sia le
mura commerciali con il fine di essere venduti o affittati come attività di ristorazione o attività ricettiva.
Il portale nasce dall’idea di costruire un canale dedicato e specializzato per chiunque sia alla ricerca di un
attività di ristorazione o ricettiva in tutta Italia, rendendo più facile e agevole tale ricerca per imprenditori e
società di investimento. L’obiettivo è offrire una ricerca di annunci con tutte le informazioni necessarie per
tali investimenti e facilitarne la riuscita finale.
Il sito è tradotto in più lingue per attrarre visitatori da tutto il mondo.
Lingue: italiano, inglese, tedesco, francese, cinese
Puntiamo a offrire una ricerca veloce e attendibile grazie ad un portale costruito ad hoc con le migliori
tecnologie ad oggi presenti.
Il nostro portale si rivolge a tutti i professionisti del settore immobiliare e a privati/società che possiedono
le mura o attività con destinazione di ristoro o ricettiva. Pubblica subito il tuo annuncio, il primo annuncio è
gratis.
      </Col>
    </Row>
   </div>
    </div>
    </div>
    
  );
};

export default About;
