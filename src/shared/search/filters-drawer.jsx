import React, { useState, useEffect } from "react";
import Link from "next/link";
import graphQLClient from "@/lib/graphql/client";

import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Accordion,
  UncontrolledAccordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  ListGroup,
  ListGroupItem,
  FormGroup,
  Input,
  Label 
} from "reactstrap";

const SideMenu = ({ opened, toggle }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);
  const [open, setOpen] = useState("");
  const toggleMenu = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  }

  const FOCUS_QUERY = `query{
    categories(group: "news", show_in_menu:true) {
      id
      title
      slug
    }
  }
  `;




async function getData() {
  try {
    const response = await graphQLClient.request(FOCUS_QUERY);
    if (response) {
      setData(response);
    }
  } catch (err) {
    console.log("ERROR FROM GRAPHQL-REQUEST API CALL", err);
  } finally {
    setLoading(false);
  }
}

useEffect(() => {
  getData();
}, []);



  return (
    <div id="side-nav">
      <Offcanvas isOpen={opened} toggle={toggle}>
        <OffcanvasHeader toggle={toggle}>Altri filtri</OffcanvasHeader>
        <OffcanvasBody>
        <UncontrolledAccordion defaultOpen="1">
        <AccordionItem>
    <AccordionHeader targetId="1">
      Tipologia
    </AccordionHeader>
    <AccordionBody accordionId="1">
    <FormGroup check>
    <Input type="checkbox" />
    <Label check>
      Vendita
    </Label>
    
  </FormGroup>
  <FormGroup check>
    <Input type="checkbox" />
    <Label check>
      Affitto 
    </Label>
  </FormGroup>
    </AccordionBody>
  </AccordionItem>
  <AccordionItem>
    <AccordionHeader targetId="2">
      Prezzi
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
        </OffcanvasBody>
      </Offcanvas>
    </div>
  )
}

export default SideMenu;
