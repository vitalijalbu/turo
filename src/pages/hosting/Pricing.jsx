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



const Pricing = () => (
<Page>
    <div className="container pt-4">
      <div className="grid">
        <div className="col-md-4">
          <SidePanel/>
          </div>
        <div className="col-md-8">
        <BlockTitle>Prezzi</BlockTitle>
  <BlockHeader>Descrivi la tua proprietà</BlockHeader>
        <Block>
        <Card className="bordered">
<CardContent>

  <List>
    <ListItem>
      <span>
        Trattativa riservata?
        <span className="item-text">
          Il prezzo non verrà mostrato al cliente
        </span>
      </span>
      <Toggle></Toggle>
    </ListItem>
    <ListInput
      label="Prezzo"
      type="number"
      placeholder="Prezzo"
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


export default Pricing;





