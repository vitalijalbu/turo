import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Container,
  Row,
  Col,
  Button,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import PageHead from "@/shared/account/page-head";
import { IconMessage2 } from "@tabler/icons-react";
import * as dayjs from 'dayjs';
import { getAllRequests } from "@/lib/graphql/queries/requests";
import PopupRequest from "@/shared/account/popup-request";

const Index = () => {
  const [entries, setEntries] = useState([]);
  const [navOpen, setNavOpen] = useState(false);
   /* actions */ 
   const openSideNav = () => setNavOpen(!navOpen);

  useEffect(() => {
    getAllRequests().then((data) => {
      setEntries(data?.entries || []);
      console.log('🐝 API response', data)
    }).catch((error) => {
      console.log(error);
    });
  }, []);
  return (
    <>
    {navOpen && <PopupRequest opened={navOpen} toggle={openSideNav} />}
    <div className="page">
      <PageHead
        title={"Richieste dei clienti"}
      />
      <div className="page-content">
      <Container>
      <Row>
            <Col md={12}>
              <Nav pills>
                <NavItem>
                  <NavLink href="#" active>
                    Richieste specifiche
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Richieste generiche</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        <Row>
          <Col md={12}>
          {Array.isArray(entries) ? (
          <table class="table">
                <tbody>
                  {entries.map((entry) => (
                    <tr key={entry.id}>
                    <th scope="row">
                    <div className="d-flex align-items-center">
      <div className="icon-lg bg-light rounded-circle flex-shrink-0">
        <IconMessage2 />
      </div>
      {/* Title */}
      <div className="ms-2">
        <h6 className="card-title mb-0">{entry?.author.fullName}</h6>
        <ul className="nav nav-divider small">
          <li className="nav-item">{`Numero: #${entry.id}`}</li>
        </ul>
      </div>
    </div>
                    </th>
                    <td>
                      <span className="d-block">{entry.message}</span>
                    </td> 
                    <td>
                      <span className="d-block">{`Creato il ${entry?.dateCreated}`}</span>
                    <span className="d-block">{`Ultima modifica ${entry?.dateUpdated}`}</span>
                    </td> 

                    <td className="text-right">
                    <Button color="dark" onClick={openSideNav}>
        Vedi dettagli
      </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                
              </table>
               ) : (
                <Row>Nessun dato</Row>
              )}
          </Col>
        </Row>
      </Container>
      </div>
    </div>
    </>
  )
}

export default Index;
