import React from 'react';
import { Page, Card, Row, Col, Button, CardFooter, CardContent, BlockTitle } from 'framework7-react';


const Pricing = () => (
  <Page>
    <div className='container'>
    <BlockTitle>Piani e prezzi</BlockTitle>
  <Row>
    <Col width="33">
  <Card>
  <CardContent>
    <h3>Piano Basic</h3>
    <h3>5.99€/mese</h3>
  </CardContent>
      <CardFooter><Button fill large>Get started</Button></CardFooter>
    </Card>
  </Col>   
   <Col width="33">
  <Card>
  <CardContent>
    <h3>Piano Medium</h3>
    <h3>15.99€/mese</h3>
  </CardContent>
      <CardFooter><Button fill large>Get started</Button></CardFooter>
    </Card>
  </Col>    
  <Col width="33">
  <Card>
  <CardContent>
    <h3>Piano Pro</h3>
    <h3>25.99€/mese</h3>
  </CardContent>
      <CardFooter><Button fill large>Get started</Button></CardFooter>
    </Card>
  </Col>
  </Row>

    </div>
  </Page>
);

export default Pricing;
