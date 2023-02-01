import React, { useState, useEffect } from "react";
import { Block, List, ListItem, Button, ListItemRow, ListItemCell, f7 } from "framework7-react";
import Entries from "@/data/entries.json";

const AlertList = () => {

  return (
    <>
    {Array.isArray(Entries.data.entries) ? (
      <List mediaList noHairlines>
        {Entries.data.entries.map((entry, i) => (
          <ListItem
            title={entry.title}
            subtitle="Item Subtitle"
          >
            <img
              slot="media"
              height="100px"
              width="150px"
              src="https://maps.googleapis.com/maps/api/staticmap?zoom=12&markers=color:blue%7C46.0455337,8.9867885&markers=color:blue%7C46.0455337,8.9867885&markers=color:blue%7C46.0421715,8.985212&markers=color:blue%7C46.0478992,8.9860825&markers=color:blue%7C46.0432361565214,8.98474909929994&markers=color:blue%7C46.0421715,8.985212&markers=color:blue%7C46.0455337,8.9867885&markers=color:blue%7C46.0455337,8.9867885&markers=color:blue%7C46.0416855,8.9852241&markers=color:blue%7C46.0452477,8.9820372&markers=color:blue%7C46.0492509282068,8.9868974932541&size=600x400&maptype=roadmap&key=AIzaSyDWDoto6RaWuY-ENfT_hXUkhySUrS9Uww4&language=it"
              className="thumb"
            />
            <ListItemRow>
              <ListItemCell>
                <Button fill>Vai alla ricerca</Button>
              </ListItemCell> 
              <ListItemCell>
              <Button color="red" outline onClick={()=> alert('sei sicuro di voler elimnare?')}>Elimina</Button>
              </ListItemCell>
              </ListItemRow>
          </ListItem>
        ))}
      </List>
    ) : (
      <Block strong>Nessun dato</Block>
    )}
    </>
  );
      
};

export default AlertList;
