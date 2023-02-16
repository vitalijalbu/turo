import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col, Button } from "reactstrap";
import { getAllHosts } from "@/lib/graphql/queries/offices";


const Index = () => {
  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    getAllHosts().then((data) => {
      setEntries(data?.entries || []);
      console.log('🐝 API response', data)
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="page">
      <div className="page-content">
      <Container>
        <div className="section-head">
          <h1 className="section-title">Agenzie</h1>
        </div>
        <Row>
        <Col md={12}>
              {Array.isArray(entries) ? (
                <table className="table">
                  <tbody>
                    {entries.map((entry) => (
                      <tr key={entry.id}>
                        <th scope="row">
                          <div className="d-flex align-items-center">
                            <div className="avatar avatar-xl mb-2">
                              <img
                                src={entry.avatarImg ? entry.avatarImg[0].url : '/img/placeholder.svg'}
                                className="avatar-img rounded-circle border border-2 border-white"
                              />
                            </div>

                            <div className="ms-2">
                              <h5 className="mb-1">
                                <Link
                                  href={`/offices/${entry.id}`}
                                  data-focus-mouse="false"
                                >
                                  {entry.title}
                                </Link>
                              </h5>
                              <span className="text-muted">
                                {entry.location ? entry.location.address : '-'}
                              </span>
                            
                            <div>
                            <span className="d-inline">{`Annunci online 22`}</span>
                            <span className="separator"> - </span>
                            <span className="d-inline">{`Membro dal ${entry?.dateCreated}`}</span>
                          </div>
                          </div>
                          </div>
                        </th>
                         <td className="text-end">
                          <Button outline color="dark" className="me-2">Mostra numero</Button>
                          <Button outline color="dark">Invia messaggio</Button>
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
  );
};

export default Index;
