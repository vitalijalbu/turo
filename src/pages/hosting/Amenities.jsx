import React, { useEffect, useState } from "react";
import {
  View,
  Page,
  Block,
  BlockTitle,
  BlockHeader,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  ListInput,
  Toggle,
  Button,
  List,
  ListItem,
  Panel,
  Icon,
  Card,
  CardContent,
  CardFooter
} from "framework7-react";
import SidePanel from "@/components/Hosting/SidePanel";


import amenitiesList from '@/data/amenities.json';

const Type = () => {
  const [isLoading, setloading] = useState(false);
  const [selected, setSelected] = useState(0);

  console.log('amenities', selected);
  const selectCard = (index) => {
    setSelected(!index);
  }
  return(
    <Page>
    <div className="container pt-4">
      <div className="grid">
        <div className="col-md-4">
          <SidePanel/>
          </div>
        <div className="col-md-8">
        <BlockTitle>Servizi</BlockTitle>
              <BlockHeader>
                Seleziona i servizi inclusi
              </BlockHeader>
        <Block>
          <Card className="bordered">
            <CardContent>
              <BlockTitle>Titolo e descizione</BlockTitle>
              <BlockHeader>Descrivi la tua proprietà</BlockHeader>
              ciao
            </CardContent>
            <CardFooter className="align-content-space-between">
            <Button outline>
              Indietro
            </Button>
            <Button fill>
              Continua
            </Button>
          </CardFooter>
          </Card>
          </Block>
        </div>
      </div>
    </div>
            </Page>
)
  }

export default Type;
