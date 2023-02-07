import React, { useState, useEffect } from "react";
import Link from "next/link";
import graphQLClient from "@/lib/graphql/client";

import {
  Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { viewRequest } from "@/lib/graphql/queries/requests";

const PopupRequest = ({ opened, toggle }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);


useEffect(() => {
  viewRequest(337);
}, []);



  return (
    <div id="side-nav">
      <Offcanvas isOpen={opened} toggle={toggle} direction="end">
        <OffcanvasHeader toggle={toggle}>Dettagli richiesta</OffcanvasHeader>
        <OffcanvasBody>
        dettagli
        </OffcanvasBody>
      </Offcanvas>
    </div>
  )
}

export default PopupRequest;
