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
        <OffcanvasHeader toggle={toggle}>Menu</OffcanvasHeader>
        <OffcanvasBody>
        <span class="MainMenuVertical_mainTitle__n5xMf">Sezioni</span>
          <Accordion flush open={open} toggle={toggleMenu}>
          {data?.categories?.map((topic, i) => (
            <AccordionItem key={i}>
              <AccordionHeader targetId={topic.id}>{topic.title}</AccordionHeader>
              <AccordionBody accordionId={topic.id}>
                <ListGroup flush>
                  <ListGroupItem href="#" tag="a">
                    Cras justo odio
                  </ListGroupItem>
                  <ListGroupItem href="#" tag="a">
                    Dapibus ac facilisis in
                  </ListGroupItem>
                  <ListGroupItem href="#" tag="a">
                    Morbi leo risus
                  </ListGroupItem>
                  <ListGroupItem href="#" tag="a">
                    Porta ac consectetur ac
                  </ListGroupItem>
                  <ListGroupItem href="#" tag="a">
                    Vestibulum at eros
                  </ListGroupItem>
                </ListGroup>
              </AccordionBody>
            </AccordionItem> 
            ))}
          </Accordion>
        </OffcanvasBody>
        <OffcanvasBody>
          <ul className="footer-list list-unstyled">
            <li>
              <a className="list-item" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="list-item" href="/notizie">
                Ultime notizie
              </a>
            </li>
            <li>
              <a className="list-item" href="/comuni">
                Comuni
              </a>
            </li>
            <li>
              <a className="list-item" href="/lavoro">
                Offerte di lavoro
              </a>
            </li>
            <li>
              <a className="list-item" href="/pubblicita">
                Pubblicità
              </a>
            </li>
            <li>
              <a className="list-item" href="/carica-contenuto">
                Inviaci una segnalazione
              </a>
            </li>
          </ul>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  )
}

export default SideMenu;
