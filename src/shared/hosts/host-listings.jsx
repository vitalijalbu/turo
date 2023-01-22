import React, { useState, useEffect } from "react";
import { Container, Grid, Avatar, Text, Button, Paper } from '@mantine/core';
import ItemCard from "../search/listing-card";
import Entries from "@/data/entries.json";
const HostListings = () => {

  return (
    <section id="host-listings">
      {Array.isArray(Entries.data.entries) ? (
        <Grid>
          {Entries.data.entries.map((item, i) => (
            <Grid.Col span={6}>
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
