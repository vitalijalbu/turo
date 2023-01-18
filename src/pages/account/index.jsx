import React, { useState, useEffect } from "react";
import { Container, Grid, Card, Group, Text, Title} from "@mantine/core";
import Head from "@/shared/components/account/Head";


const Account = () => {
  return (
    <div className="page pt-0">
      <Head
        title={"Benvenuto User"}
        primaryAction={{
          url: "/hosting/create",
          content: "Crea annuncio",
        }}
      />
      <Container size="xl">
        <Grid>
          <Grid.Col md={6} lg={9} xs={6}>
            ciao</Grid.Col>

          <Grid.Col md={6} lg={3} xs={6}>
            <Card shadwo="sm">
              <div className="list no-hairlines no-chevron">
                <ul>
                  <li className="">
                    <a className="item-link" href="/reports">
                      <div className="item-content">
                        <div className="item-inner">
                          <div className="item-title">Visite al profilo</div>
                          <div className="item-after">
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
                          <div className="item-after">
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
                          <div className="item-after">
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
                          <div className="item-after">
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
                          <div className="item-after">
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
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
};

export default Account;
