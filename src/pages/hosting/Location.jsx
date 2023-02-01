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



const Location = () => (
 <Page>
    <div className="container pt-4">
      <div className="grid">
        <div className="col-md-4">
          <SidePanel/>
          </div>
        <div className="col-md-8">
 <BlockTitle>Posizione</BlockTitle>
              <BlockHeader>
              Posizione approssimativa, la privacy relativa alla condivisione dell'indirizzo in caso di cancellazioni è disattivata
              </BlockHeader>
              
              <Block>
              <Card className="bordered">
            <CardContent>
              <List>
                <ListInput
                  label="Inserisci un'indirizzo"
                  type="text"
                  naeme="title"
                  outline
                  floatingLabel
                  clearButton
                />
                <ListInput
                  label="Città"
                  type="text"
                  info="Massimo 80 caratteri"
                  clearButton
                  outline
                  floatingLabel
                />
              </List>
            </CardContent>
            <CardFooter>
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

export default Location;
