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
  ListInput,
  Icon,
  f7,
} from "framework7-react";
import typeList from "@/data/types.json";
import AddressField from "../FormFields/AddressField";

const SearchForm = () => {
  const [priceMin, setPriceMin] = useState("sale");
  const [priceMax, setPriceMax] = useState(200);

  const onPriceChange = (values) => {
    setPriceMin(values[0]);
    setPriceMax(values[1]);
  };

  return (
    <div className="search-form">
      <form>
        <div className="card-content card-content-padding">
          <List>
            <AddressField
              name="formatted_address"
              label="Dove ?"
              required={false}
              placeholder="Inserisci indirizzo"
            />

            <ListItem
              title="Cosa ?"
              smartSelect
              smartSelectParams={{ openIn: "popover" }}
            >
              <select name="superhero" multiple defaultValue={["Hotel"]}>
                <option value="Hotel">Hotel</option>
                <option value="Ristorante">Ristorante</option>
                <option value="Commerciale">Commerciale</option>
              </select>
            </ListItem>
          </List>
        </div>
        <div className="card-content card-content-padding">
          <Segmented tag="p">
            <Button outline>
              Vendita
            </Button>
            <Button outline>
              Affitto
            </Button>
          </Segmented>
        </div>
        <div className="card-content card-content-padding">
          <Button iconF7="search" large fill href="/search">
            Cerca
          </Button>
        </div>
      </form>
      <div className="card-content card-content-padding">
        <Button iconF7="plus_circle" large href="/hosting/create">
          Pubblica un annuncio gratis
        </Button>
      </div>
    </div>
  );
};

export default SearchForm;
