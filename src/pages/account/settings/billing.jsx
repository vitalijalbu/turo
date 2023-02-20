import React, { useState } from 'react';
import Link from 'next/link';
import { Container, Row, Col, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { IconMessageCircle, IconBookmark } from '@tabler/icons-react';
import SideNav from '@/shared/settings/side-nav';
import bills from "@/data/billing.json";
import { IconReceipt, IconCloudDownload } from '@tabler/icons-react';

const Billing = () => {
  const [loading, setLoading] = useState(false);
  const [archived, setArchived] = useState(false);
  

  const setTabs = () =>{
    setArchived(!archived);
    setLoading(true);
  }

  return (
    <div className="page">
    <div className="page-content">
    <Container>
    <div className="row g-5">
    <div className="col-md-4">
        <div className="position-sticky" style={{ top: "2rem" }}>
          <div className="p-4">
          <SideNav/>
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <h3 className="pb-4 mb-4 border-bottom">Fatturazione</h3>
        <div>
        <Row>
            <Col md={12}>
              <Nav className="subnav" pills>
                <NavItem>
                  <NavLink href="#" onClick={setTabs} active={archived === false}>
                    Piano abbonamento
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#" onClick={setTabs} active={archived === true}>Acquisti in-app</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
          {Array.isArray(bills) ? (
          <table class="table">
                <tbody>
                  {bills.map((entry) => (
                    <tr key={entry.id}>
                    <th scope="row">
                    <div className="d-flex align-items-center">
      <div className="icon-lg bg-light rounded-circle flex-shrink-0">
        <IconReceipt />
      </div>
      {/* Title */}
      <div className="ms-2">
        <h6 className="card-title mb-0">{entry.id}</h6>
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
                      <span className="d-block">{`Data ${entry?.dateCreated}`}</span>
                    </td> 

                    <td className="text-right">
                    <Button color="dark" outline size="sm">
        <IconCloudDownload/> Scarica fattura
      </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                
              </table>
               ) : (
                <p>Nessun dato</p>
              )}
    
    </div>
      </div>
    
    </div>
    
          </Container>
          </div>
      </div>
  );
};

export default Billing;
