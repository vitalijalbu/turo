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
  NavItem,
  ListGroupItem,
} from "reactstrap";

const Navigation = [
  {
    id: 'Generale',
    title: 'Generale',
    links: [
      {
        label: 'Home',
        url: '/'
      },      
      {
        label: 'Cerca',
        url: '/search'
      },
      {
        label: 'Su di noi',
        url: '/about'
      },
      {
        label: 'Aiuto?',
        url: '/help'
      },
      {
        label: 'Crea un annuncio',
        url: '/hosting/details',
        icon: 'plus_circle'
      }
    ],
  },
  {
    id: 'hosting',
    title: 'Hosting',
    links: [
      {
        label: 'Il mio account',
        url: '/account',
        icon: 'person_crop_circle'
      }, 
      {
        label: 'Preferiti',
        url: '/account/favorites',
        icon: 'heart'
      },
      {
        label: 'I miei avvisi',
        url: '/account/alerts',
        icon: 'bell'
      }, 
      {
        label: 'Gestisci gli annunci',
        url: '/account/listings',
        icon: 'list_bullet_below_rectangle'
      },
      {
        label: 'Impostazioni',
        url: '/settings/account',
        icon: 'gear_alt'
      }
    ],
  }
];

const SideMenu = ({ opened, toggle }) => {
  const router = useRouter();
  const { pathname } = router.query;
  const [loading, setLoading] = useState(false);



  return (
    <div id="side-nav">
      <Offcanvas isOpen={opened} toggle={toggle}>
        <OffcanvasHeader toggle={toggle}>Menu</OffcanvasHeader>
        <OffcanvasBody>
        {Navigation.map((link, l) =>
                link.external === true ? (
                  <Link href={link.url} passHref>
                    <NavItem component="a" label={link.label} active={pathname === link.slug} />
                  </Link>
                ) : link.action ? (
                  <Link href={link.url} passHref>
                  <NavItem component="a" label={link.label} active={pathname === link.slug} />
                </Link>
                ) : (
                  <Link href={link.url} passHref>
                  <NavItem component="a" label={link.label} active={pathname === link.slug} />
                </Link>
                )
              )}
          <Accordion flush open={open} toggle={toggleMenu}>
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
