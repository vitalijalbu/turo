import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader} from "reactstrap";
import PageHead from "@/shared/account/page-head";
import { getSession } from "@/lib/graphql/client";

const Account = () => {
  const session = getSession();
  const user = session.user;

  return (
    <div className="page">
      <PageHead
        title={`Bentornato, ${user.fullName}`}
        nextAction={{
          url: "/hosting/create",
          content: "Crea annuncio",
        }}
      />
      <div className="page-content">
      <Container>
        <Row>
          <Col md={6} lg={9} xs={6}>
          <h2 className="page-title">Bacheca</h2>
          </Col>

          <Col md={6} lg={3} xs={6}>
            <Card>
            <CardHeader>
              Anteprima
            </CardHeader>
            <CardBody>
              <div className="list no-hairlines no-chevron">
                <ul>
                  <li className="">
                    <a className="item-link" href="/reports">
                      <div className="item-content">
                        <div className="item-inner">
                          <div className="item-title">Visite al profilo</div>
                          <div className="item-after text-primary">
                            <span>201</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a className="item-link" href="/settings">
                      <div className="item-content">
                        <div className="item-inner">
                          <div className="item-title">Membro dal</div>
                          <div className="item-after text-primary">
                            <span>12-04-2022</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a className="item-link" href="/settings">
                      <div className="item-content">
                        <div className="item-inner">
                          <div className="item-title">Tipo account</div>
                          <div className="item-after text-primary">
                            <span>Agenzia</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a className="item-link" href="/hosting/listings">
                      <div className="item-content">
                        <div className="item-inner">
                          <div className="item-title">Totale annunci</div>
                          <div className="item-after text-primary">
                            <span>2</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a className="item-link" href="/settings/billing">
                      <div className="item-content">
                        <div className="item-inner">
                          <div className="item-title">Piano</div>
                          <div className="item-after text-primary">
                            <span>Pro</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li className="">
                    <a className="item-link" href="/hosts/1000/">
                      <div className="item-content">
                        <div className="item-inner">
                          <div className="item-title">Profilo pubblico</div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>

    </div>
  );
};

export default Account;
