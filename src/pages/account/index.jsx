import React, { useState, useEffect } from "react";
import Link from "framework7-react";
import {
  Page,
  List,
  ListItem,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  BlockTitle,
  Block,
  Button,
  Icon
} from "framework7-react";

import Overview from "@/components/Account/Overview";
import PageHead from "@/components/Account/PageHead";
import HostingServices from "@/components/Account/HostingServices";
import Entries from "@/data/entries.json";

const Account = () => {
  return (
    <Page>
      <PageHead title="Bentornato, User"/>
      <section className="padding-vertical-xl">
        <div className="container">
          <div className="grid">
            <div className="col-md-4">
              <Card className="bordered">
                <CardHeader>
                  Annunci online
                </CardHeader> 
                <CardContent>
                  Annunci online
                </CardContent>
              </Card>
            </div>
            </div>
          <div className="grid">
            <div className="col-md-8 col-xs-12">
            <div className="display-flex justify-content-space-between align-items-center">
              <BlockTitle>Ultimi annunci</BlockTitle>
              <Button href="/account/listings" force={true}>Vedi tutti <Icon f7="arrow_right"/></Button>
              </div>
              {Array.isArray(Entries.data.entries) ? (
                <List mediaList noHairlines>
                  {Entries.data.entries.map((entry, i) => (
                    <ListItem
                      title={entry.title}
                      subtitle="Item Subtitle"
                      link={"/account/listings"}
                    >
                      <img
                        slot="media"
                        src="https://via.placeholder.com/80x80"
                        className="thumb"
                      />
                    </ListItem>
                  ))}
                </List>
              ) : (
                <Block strong>Nessun dato</Block>
              )}
            </div>
            <div className="col-md-4 col-xs-12">
              <Overview />
            </div>
          </div>
        </div>
      </section>
      <HostingServices/>
    </Page>
  );
};

export default Account;
