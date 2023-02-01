import React from "react";
import {
  Page,
  Block,
  BlockTitle,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Card,
  CardContent,
  CardFooter,
  ListItemRow,
  ListItemCell,
  ListInput,
  Toggle,
  Button,
  List,
  ListItem,
  Icon,
  View,
} from "framework7-react";
import SideNav from "@/components/Settings/SideNav";

const Billing = () => (
  <Page>
   <div className="container pt-4">
      <div className="grid">
        <div className="col-md-4">
          <SideNav />
        </div>
        <div className="col-md-8">
          <BlockTitle>Fatturazione</BlockTitle>
          <Card className="bordered">
            <CardContent>
              <List>
                <ListItemRow>
                  <ListItemCell>
                    <ListInput
                      label="Nome"
                      type="text"
                      placeholder="Your name"
                      clearButton
                    />
                  </ListItemCell>
                  <ListItemCell>
                    <ListInput
                      label="Cognome"
                      type="text"
                      placeholder="Cognome"
                      clearButton
                    />
                  </ListItemCell>
                </ListItemRow>
                <ListInput
                  label="E-mail"
                  type="email"
                  placeholder="Indirizzo e-mail"
                  clearButton
                />
                <ListInput
                  label="Telefono"
                  type="number"
                  placeholder="Telefono"
                  clearButton
                />

                <ListItem>
                  <span>
                    Tipologia account
                    <span className="item-text">
                      Ricevi aggiornamenti e promozioni
                    </span>
                  </span>
                  <Toggle></Toggle>
                </ListItem>
              </List>
            </CardContent>
            <CardFooter>
              <Button fill>
                Salva
              </Button>
              </CardFooter>
            
          </Card>
        </div>
      </div>
    </div>
  </Page>
);

export default Billing;
