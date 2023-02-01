import React, { useEffect, useState } from "react";
import { Page, Button, List, ListInput, BlockTitle, ListItem, ListItemRow, Toggle, ListItemCell,  Icon, BlockHeader, Block, Row, Col, Card, CardContent, CardFooter } from "framework7-react";
import SidePanel from "@/components/Hosting/SidePanel";


const Media = () => {
  return (
    <Page>
    <div className="container pt-4">
      <div className="grid">
        <div className="col-md-4">
          <SidePanel/>
          </div>
        <div className="col-md-8">
          <BlockTitle>Virtual Tour</BlockTitle>
              <BlockHeader>
                Il tuo annuncio verrà esaminato dal nostro staff prima di
                essere online.
              </BlockHeader>
              <Block>
          <Card className="bordered">
            <CardContent>
              <BlockTitle>URL</BlockTitle>
              <List>
                <ListInput
                  label="Titolo annuncio"
                  type="text"
                  naeme="title"
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
  };

export default Media;
