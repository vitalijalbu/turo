import React, { useState, useRef } from "react";
import {
  Block,
  List,
  ListItem,
  Row,
  Col,
  AccordionContent,
  Link
} from "framework7-react";
import faqList from '@/data/faqs.json';


const Faqs = () => {


  return (
    <section>
    <div className="container">
        <Row>
            <Col>
            <img slot="media" src="https://via.placeholder.com/800x533" className="img-fluid"/>
      </Col>
      <Col>
      <h3>Domande più frequenti</h3>
    <List accordionList noHairlines noHairlinesBetween>
      {faqList.data.faqs.map((data, i) => (
      <ListItem accordionItem title={data.title}>
           <AccordionContent>
          <Block>
            <p>{data.content}</p>
          </Block>
        </AccordionContent>
      </ListItem>
      ))} 
      </List>
      <Link href="/help">Vai al centro supporto</Link>
    </Col>

      </Row>
      </div>
    </section>
  );
};

export default Faqs;
