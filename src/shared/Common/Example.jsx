import React, { useState, useRef } from "react";
import {
  Page,
  Navbar,
  BlockTitle,
  Block,
  Popup,
  NavRight,
  NavTitle,
  Button,
  List,
  ListItem,
  Icon,
  f7,
} from "framework7-react";
import Entries from '@/data/entries.json';
import ItemSwiper from "../Search/ItemSwiper";

const Example = () => {


  return (
    <section>
    <div className="container">
    <List className="display-flex fle" mediaList noHairlines noChevron>
      {Entries.data.entries.map((data, i) => (
      <ListItem title={data.title} subtitle={data.excerpt} text={data.dateCreated} link={'/search?type='+data.slug}>
          <div slot="media" src="https://via.placeholder.com/80x80" className="slidd">
          <ItemSwiper/>
          </div>
      </ListItem>
      ))} 
      </List>
      </div>
    </section>
  );
};

export default Example;
