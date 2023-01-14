import React from 'react';
import { Block, Link, List, Card, ListItem, CardHeader, CardContent, Badge, Button, Row, Col } from "framework7-react";


const Overview = ({ props }) => {
 

  return (
    <>
     <Card>
      <CardContent padding={false}>
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
    </CardContent>
    </Card>
    <Block className="text-align-center">
        <Link href="/help">Serve aiuto?</Link>
      </Block>
  </>
  );
};

export default Overview;
