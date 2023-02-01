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



const Publish = () => (
 <Page>
    <div className="container pt-4">
      <div className="grid">
        <div className="col-md-4">
          <SidePanel/>
          </div>
        <div className="col-md-8">
 <BlockTitle>Pubblica annuncio</BlockTitle>
              <BlockHeader>
                Il tuo annuncio verrà esaminato dal nostro staff prima di
                essere online.
              </BlockHeader>
              
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
    clearButton
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

export default Publish;
