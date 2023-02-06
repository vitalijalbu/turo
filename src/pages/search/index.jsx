import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
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
  const [navOpen, setNavOpen] = useState(false);
   /* actions */ 
  const openSideNav = () => setNavOpen(!navOpen);
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

  return (
    <> 
    {navOpen && <FiltersDrawer opened={navOpen} toggle={openSideNav} />}
    <div className="page" id="searchPage">
      <Container>
      <Row>
       <div className="filters-block">
         22 risultati trovati
        </div>
       </Row>
       <div className="text-right">
       <Button outline color="dark" onClick={() => addToFavorite()}>
       <IconBellRinging/> Salva ricerca
          </Button>
       </div>
        <Row>
          <Col span={12}>
          <h1>Filtri</h1>
           <div className="medium-only">
            <FiltersHorizontal filtersPopup={ openSideNav }/>
            </div>
          </Col>
          </Row>
          <Row>
          <Col span={12}>
          <h1 large>22 risultati trovati</h1>
            <SectionList data={data}/>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default Search;
