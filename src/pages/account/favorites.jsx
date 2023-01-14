import React, { useState, useEffect } from "react";
import { Container, Grid, Group, Text, Title} from "@mantine/core";
import ItemCard from "@/shared/Search/ItemCard";
import Head from "@/shared/components/account/Head";
import Entries from "@/data/entries.json";
import Link from 'next/link';

const Favorites = () => {
  return (
    <div className="page pt-0">
      <Head  title={"Preferiti"}/>
      <Container size="xl">
<Grid>
{Array.isArray(Entries.data.entries) ? (
   <> 
    {Entries.data.entries.map((item, i) => (
      <Grid.Col md={6} lg={3} xs={6}>
       <ItemCard data={item}/>
       </Grid.Col>
    ))}
  </>
) : (
  <Text strong>Nessun dato</Text>
)}
</Grid>
</Container>
</div>
  );
};

export default Favorites;
