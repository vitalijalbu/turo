import React from "react";
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



const Financial = () => (
 <Page>
    <div className="container pt-4">
      <div className="grid">
        <div className="col-md-4">
          <SidePanel/>
          </div>
        <div className="col-md-8">
        <BlockTitle>Finanze</BlockTitle>
              <BlockHeader>
                Il tuo annuncio verrà esaminato dal nostro staff prima di
                essere online.
              </BlockHeader>
        <Block>
          <Card className="bordered">
            <CardContent>
              <BlockTitle>Cifre</BlockTitle>
              <List>
                <ListInput
                  label="Titolo annuncio"
                  type="text"
                  naeme="title"
                  outline
                  floatingLabel
                  clearButton
                />
                <ListInput
                  label="Descizione breve"
                  type="text"
                  info="Massimo 80 caratteri"
                  clearButton
                  outline
                  floatingLabel
                />
                <ListInput
                  label="Fatturato anno precedente"
                  type="number"
                  info="Cifra in €"
                  outline
                  floatingLabel
                  clearButton
                />   
                <ListInput
                  label="Spese condominio"
                  type="number"
                  info="Cifra in €"
                  outline
                  floatingLabel
                  clearButton
                />
              </List>
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
);

export default Financial;
