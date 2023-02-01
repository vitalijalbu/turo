import React, { useState, useRef } from "react";
import {
  Page,
  Navbar,
  BlockTitle,
  Block,
  Popup,
  NavRight,
  NavTitle,
  Button,
  Card, CardContent, Link,
  List,
  ListItem,
  Icon,
  f7,
} from "framework7-react";
import typeList from '@/data/hosts.json';


const Index = () => {


  return (
    <Page>
    <Block>
      <BlockTitle large>Hosts</BlockTitle>
    <div className="grid">
      {typeList.data.users.map((data, i) => (
       <div className="col-md-4 col-lg-3 col-xs-12">
       <Card>
       <CardContent className="card-content">
           <div className="div">
           <List mediaList noChevron>
               <ListItem title="Hosting title" subtitle="Membro dal 20/02/2021" link="/hosts/1000">
                 <img
                   slot="media"
                   className="avatar-img"
                   src="https://via.placeholder.com/80"
                 />
               </ListItem>
                     <ListItem
                       title="Tipo account"
                       link="/hosts/1000"
                       after={"Agenzia"}
                     /> 
                     <ListItem
                       title="Totale annunci"
                       link="/hosts/1000"
                       after={2}
                     />
               </List>
           </div> 
         </CardContent>
         </Card>
       </div>
      ))} 
      </div>
      </Block>
    </Page>
  );
};

export default Index;
