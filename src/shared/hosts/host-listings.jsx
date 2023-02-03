import React, { useState, useEffect } from "react";
import { Container, Grid, Avatar, Text, Button, Paper } from '@mantine/core';
import ItemCard from "../snippets/listing-card";
import Entries from "@/data/entries.json";

const HostListings = ({listings}) => {

  if(!listings && (<Text>Nessun annuncio ancora pubblicato</Text>));
  return (
    <section id="host-listings">
      {Array.isArray(listings) ? (
        <Grid>
          {listings.map((item, i) => (
            <Grid.Col span={6} key={i}>
             <ItemCard data={item}/>
             </Grid.Col>
          ))}
        </Grid>
      ) : (
        <Grid>Nessun dato</Grid>
      )}
    </section>
  );
      
};

export default HostListings;
