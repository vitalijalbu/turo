import React from 'react';
import { Block, BlockTitle, Link, List, Card, ListItem, CardHeader, Badge, Button, Row, Col, CardContent } from "framework7-react";


const Overview = ({ props }) => {
 

  return (
<>
<BlockTitle>Panoramica</BlockTitle>
     <Card>
        <List noChevron noHairlines>
      <ListItem
        title="Visite al profilo"
        link="/reports"
        after={"201"}
      />
      <ListItem
        title="Membro dal"
        link="/settings"
        after={"12-04-2022"}
      /> 
       <ListItem
        title="Tipo account"
        link="/settings"
        after={"Agenzia"}
      /> 
      <ListItem
        title="Totale annunci"
        link="/hosting/listings"
        after={2}
      />
      <ListItem
        title="Piano"
        link="/settings/billing"
        after={'Pro'}
      />
      <ListItem
        title="Profilo pubblico"
        link="/hosts/1000/"
      />
    </List>
    </Card>
    <Block className="text-align-center">
        <Link href="/help">Serve aiuto?</Link>
      </Block>
  </>
  );
};

export default Overview;
