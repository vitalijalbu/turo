import React, { useState } from "react";
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
  Stepper,
  Card,
  CardContent,
  CardFooter
} from "framework7-react";
import SidePanel from "@/components/Hosting/SidePanel";



const FloorPlan = () => {
  const [applesCount, setApplesCount] = useState(0);
  const [orangesCount, setOrangesCount] = useState(0);

  return(
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
        <List noHairlines>
            <List>
              <ListItem title={`Camere ${applesCount}`}>
                <Stepper
                  buttonsOnly={true}
                  large
                  outline
                  slot="after"
                  onStepperChange={setApplesCount}
                />
              </ListItem>
              <ListItem title={`Camere ${orangesCount}`}>
                <Stepper
                  buttonsOnly={true}
                  large
                  outline
                  slot="after"
                  onStepperChange={setOrangesCount}
                />
              </ListItem>
            </List>
          </List>
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


export default FloorPlan;





