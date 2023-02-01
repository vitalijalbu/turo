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
  ListItemRow,
  ListItemCell,
  ListInput,
  Toggle,
  Button,
  List,
  ListItem,
  Icon
} from "framework7-react";
import SideNav from "@/components/Settings/SideNav";

const Notifications = () => (
  <Page>
    <div className="container pt-4">
      <div className="grid">
        <div className="col-md-4">
          <SideNav />
        </div>
        <div className="col-md-8">
          <BlockTitle>Notifiche</BlockTitle>
          <Card className="bordered">
          <CardContent padding={false}>
                <List media noHairlinesMd>
                  <ListItem>
                    <span>
                      Newsletter
                      <span className="item-text">
                        Ricevi aggiornamenti e promozioni
                      </span>
                    </span>
                    <Toggle defaultChecked></Toggle>
                  </ListItem>
                  <ListItem>
                    <span>
                      Avvisi importanti
                      <span className="item-text">
                        Ricevi aggiornamenti e promozioni
                      </span>
                    </span>
                    <Toggle></Toggle>
                  </ListItem>
                </List>
              </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </Page>
);

export default Notifications;
