import React, { useState, useEffect } from "react";
import { Container, Grid, Title, Button } from '@mantine/core';
import MapBlock from "@/shared/Search/MapBlock";
import Filters from "@/shared/Search/Filters";
import PopupMap from "@/shared/Search/PopupMap";
import PopupFilters from "@/shared/Search/PopupFilters";
import SectionList from "@/shared/Search/SectionList";


const Search = () => {
  const [popupMap, setMapPopup] = useState(false);
  const [popupFilters, setFiltersPopup] = useState(false);
       /* Toggle Item Popup */
       const toggleMapPopup = () => {
        setMapPopup(!popupMap);
      };
  const toggleFilterPopup = () => {
    setFiltersPopup(!popupFilters);
      };

  return (
    <>
     {popupMap && <PopupMap opened={popupMap} toggle={toggleMapPopup}/>}
     {PopupFilters && <PopupMap opened={popupFilters} toggle={toggleFilterPopup}/>}
    <div className="page" id="searchPage">
      <Container size="xl">
        <Grid gutter="lg">
          <Grid.Col span={3}>
          <Title>Filtri</Title>
           <div className="medium-only">
            <MapBlock/>
            <Filters/>
            </div>
          </Grid.Col>
          <Grid.Col span={9}>
          <Title large>Risultati ricerca</Title>
            <SectionList/>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
    </>
  );
};

export default Search;
