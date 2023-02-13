import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import { IconMessageCircle, IconBookmark } from '@tabler/icons-react';
import SideNav from '@/shared/settings/side-nav';
import bills from "@/data/billing.json";

const Billing = () => {


  return (
    
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
          {Array.isArray(bills.entries) ? (
          <table class="table">
                <tbody>
                  {bills.entries.map((entry) => (
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
                <p>Nessun dato</p>
              )}
    
    </div>
      </div>
    
    </div>
    
          </Container>
  );
};

export default Billing;
