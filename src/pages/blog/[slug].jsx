import React from 'react';
import { Page, List, ListItem, Row, Col, Block, BlockTitle, f7 } from 'framework7-react';

  const Entry = (props) => {
    const { f7route, f7router } = props;
    console.log('path', f7route.path);
    return (
    <Page>
      <div className='container'>
        <Row>
          <Col>
          <h1>Page support</h1>
        <p>Requested content not found.</p>
          </Col>
          <Col>
          <BlockTitle>Azioni</BlockTitle>
        <List>
        <ListItem title="Chiamaci" link="#" after="+390023992"></ListItem>
        <ListItem title="Contattaci" link="mailto:support@ceebo.com?subject=Assistenza" external after="support@ceebo.com"></ListItem>
        </List>
          </Col>
        </Row>
      </div>
    </Page>
    );
};

export default Entry;
