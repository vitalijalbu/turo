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
  Segmented,
  List,
  ListItem,
  ListItemRow,
  ListItemCell,
  ListInput,
  Icon,
  f7,
} from "framework7-react";
import typeList from '@/data/types.json';

const EstimateForm = () => {
  const [priceMin, setPriceMin] = useState('sale');
  const [priceMax, setPriceMax] = useState(200);

  const onPriceChange = (values) => {
    setPriceMin(values[0]);
    setPriceMax(values[1]);
  };

  return (
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
</List>
  );
};

export default EstimateForm;
