import React, { useState, useEffect } from "react";
import { Container, Grid, Title, Group } from '@mantine/core';
import MapBlock from "@/shared/search/MapBlock";
import FiltersHorizontal from "@/shared/search/filters-horizontal";
//import PopupMap from "@/shared/search/PopupMap";
//import PopupFilters from "@/shared/search/PopupFilters";
import SectionList from "@/shared/search/listings-section";


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
     {/*popupMap && <PopupMap opened={popupMap} toggle={toggleMapPopup}/>*/}
     {/*PopupFilters && <PopupMap opened={popupFilters} toggle={toggleFilterPopup}/>/*/}
    <div className="page" id="searchPage">
      <Container size="xl">
        <Grid>
          <Grid.Col span={12}>
          <Title>Filtri</Title>
           <div className="medium-only">
            <MapBlock/>
            <FiltersHorizontal/>
            </div>
          </Grid.Col>
          </Grid>
          <Grid>
          <Grid.Col span={12}>
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
