import React, { useState, useEffect } from "react";
import { Container, Grid, Group, Text, Title} from "@mantine/core";
import ItemCard from "@/shared/Search/ItemCard";
import Head from "@/shared/components/account/Head";
import Entries from "@/data/entries.json";
import Link from 'next/link';

const Listings = () => {
  return (
    <div className="page pt-0">
      <Head 
      title={"I miei annunci"} 
      primaryAction={{
        url: '/hosting/create',
        content: 'Crea un nuovo annuncio',
      }}/>
      <Container size="xl">
<Grid>
<Grid.Col md={8} lg={8} xs={12}>
{Array.isArray(Entries.data.entries) ? (
   <> 
    {Entries.data.entries.map((item, i) => (
      
       <ItemCard data={item}/>
       
    ))}
  </>
) : (
  <Text strong>Nessun dato</Text>
)}
</Grid.Col>
</Grid>
</Container>
</div>
  );
};

export default Listings;
