import React, { useState, useEffect } from "react";
import { Page, AreaChart, List, ListItem, Card, CardHeader, CardContent, CardFooter, BlockTitle, Block, Button, Link, Row, Col } from "framework7-react";

const Index = () => {
    // helpers data for axis
    const dates = [];
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    for (let i = 0; i < 12; i += 1) {
      dates.push(new Date(year, month - (12 - i)));
    }
    const axisDateFormat = Intl.DateTimeFormat(undefined, { month: 'short', year: 'numeric' });
    const tooltipDateFormat = Intl.DateTimeFormat(undefined, { month: 'long', year: 'numeric' });

    
  return (
    <Page>
            <section className="page-heading">
        <div className="container">
          <div className="page-back_btn display-flex justify-content-space-between align-items-center">
            <Button
              large
              href="/hosting"
              iconF7="arrow_left"
              color="black"
              reloadAll={true}
            >
              Indietro
            </Button>
          </div>
          <div className="display-flex justify-content-space-between align-items-center">
            <div className="">
              <h1 className="page-title">Bentornato, User</h1>
              <p className="page-subtitle">Il mio account</p>
            </div>
            <div className="">
              <Button
                large
                fill
                color="primary"
                href="/hosting"
                iconF7="plus"
                reloadAll={true}
              >
                Aggiungi un nuovo annuncio
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="padding-vertical-xl">
      <div className='container'>
      <Row>
        <Col width="70">
        <BlockTitle large>Analisi visite</BlockTitle>
        <Card>
        <CardContent>
        <AreaChart
          tooltip
          axis
          axisLabels={dates}
          toggleDatasets
          lineChart
          formatAxisLabel={(date) => axisDateFormat.format(date)}
          formatTooltipAxisLabel={(date) => tooltipDateFormat.format(date)}
          datasets={[
            {
              label: 'Red data',
              color: '#f00',
              values: [0, 300, 127, 47, 43, 33, 23, 32],
            }
          ]}
        />
        </CardContent>
      </Card>
      
        </Col> 
        <Col width="30">
        <BlockTitle large>Aiuto?</BlockTitle>
      
        </Col>
      </Row>
      </div>
    </section>
    </Page>
  );
};

export default Index;