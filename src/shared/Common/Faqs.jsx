import React, { useState, useRef } from "react";
import Link from 'next/link';
import { Container, Button, Row, Col, UncontrolledAccordion, AccordionItem, AccordionHeader, AccordionBody } from 'reactstrap';
import faqList from '@/data/faqs.json';
import { IconArrowUpRight } from '@tabler/icons-react';;


const Faqs = () => {


  return (
    <section className="section-content faqs">
    <Container>
      <Row>
      <Col lg={8} md={12} className="mx-auto"> 
      <h3>Domande più frequenti</h3>
     
<UncontrolledAccordion defaultOpen="1" flush>
  <AccordionItem>
    <AccordionHeader targetId="1">
      Accordion Item 1
    </AccordionHeader>
    <AccordionBody accordionId="1">
      <strong>
        This is the first item's accordion body.
      </strong>
      You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
      <code>
        .accordion-body
      </code>
      , though the transition does limit overflow.
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="2">
      Accordion Item 2
    </AccordionHeader>
    <AccordionBody accordionId="2">
      <strong>
        This is the second item's accordion body.
      </strong>
      You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
      <code>
        .accordion-body
      </code>
      , though the transition does limit overflow.
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="3">
      Accordion Item 3
    </AccordionHeader>
    <AccordionBody accordionId="3">
      <strong>
        This is the third item's accordion body.
      </strong>
      You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
      <code>
        .accordion-body
      </code>
      , though the transition does limit overflow.
    </AccordionBody>
  </AccordionItem>
</UncontrolledAccordion>

      <Link href="/help" target="_blank" passHref>
    <Button color="primary" size="sm" rel="noopener noreferrer" outline>Vai al centro supporto <IconArrowUpRight/></Button>
    </Link>
    </Col>

      </Row>
      </Container>
    </section>
  );
};

export default Faqs;
