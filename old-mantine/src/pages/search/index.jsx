import React, { useState, useEffect } from "react";
import { Container, Grid, Title, Group, Button, Drawer } from '@mantine/core';
import graphQLClient from "@/lib/graphql/client";
import { GET_LISTINGS } from "@/lib/graphql/queries/search";
import FiltersDrawer from "@/shared/search/filters-drawer";
import { IconBellRinging } from '@tabler/icons-react';


export async function getStaticProps(context) {
  const data = await graphQLClient.request(GET_LISTINGS);

  return {
    props: { data },
  };
}

import FiltersHorizontal from "@/shared/search/filters-horizontal";
//import PopupMap from "@/shared/search/PopupMap";
//import PopupFilters from "@/shared/search/PopupFilters";
import SectionList from "@/shared/search/listings-section";
import { showNotification } from '@mantine/notifications';

const Search = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [params, setFiltersParams] = useState(false);
  const [popupMap, setMapPopup] = useState(false);
  const [opened, setOpened] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const addToFavorite = () => {
    showNotification({
      title: 'La ricerca è stata salvata',
      autoClose: 2500,
    });
  };


    /* Toggle Item Popup */
    const openMapPopup = () => {
      setMapPopup(true);
    };

  return (
    <div className="page" id="searchPage">
      <Container size="xl">
      <Group spacing="lg" grow>
       
       <div className="filters-block">
         22 risultati trovati
       </div>
       <div className="text-right">
       <Button radius={"xl"} leftIcon={<IconBellRinging/>} variant="outline" color="dark" onClick={() => addToFavorite()}>
           Salva ricerca
          </Button>
       </div>
       </Group>
        <Grid>
          <Grid.Col span={12}>
          <Title>Filtri</Title>
           <div className="medium-only">
            <FiltersHorizontal filtersPopup={ () => setOpened(!opened) }/>
            </div>
          </Grid.Col>
          </Grid>
          <Grid>
          <Grid.Col span={12}>
          <Title large>22 risultati trovati</Title>
            <SectionList data={data}/>
          </Grid.Col>
        </Grid>
      </Container>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Filtri ricerca"
        padding="xl"
        size="xl"
      >
        <FiltersDrawer/>
      </Drawer>
    </div>
  );
};

export default Search;
