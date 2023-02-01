import React, { useState, useEffect } from "react";
import {
  Page,
  List,
  ListItem,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  BlockTitle,
  Block,
  Button,
  Link,
  Icon,
  Row,
  Col
} from "framework7-react";
import AlertList from "@/components/Account/AlertList";
import HelpHosting from "@/components/Account/HelpHosting";

const Alerts = () => {
  return (
    <Page>
      <section className="page-heading">
        <div className="container">
          <div className="page-back_btn display-flex justify-content-space-between align-items-center">
            <Button
              large
              back
              iconF7="arrow_left"
              color="black"
              reloadAll={true}
            >
              Indietro
            </Button>
          </div>
          <div className="display-flex justify-content-space-between align-items-center">
            <div className="">
              <h1 className="page-title">I miei avvisi</h1>
              <p className="page-subtitle">Grazie ai nostri avvisi, non si lascerà sfuggire nessun oggetto dei Suoi desideri</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="grid">
            <div className="col-md-8 col-xs-12">
              <AlertList/>
          </div>
          <div className="col-md-4 col-xs-12">
              <HelpHosting title="Serve aiuto?"/>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
};

export default Alerts;
