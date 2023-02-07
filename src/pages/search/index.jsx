import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem, Button, UncontrolledDropdown, DropdownItem, DropdownToggle, DropdownMenu, Dropdown, } from "reactstrap";
import graphQLClient from "@/lib/graphql/client";
import { GET_LISTINGS } from "@/lib/graphql/queries/search";
import FiltersDrawer from "@/shared/search/filters-drawer";
import { IconMap2 } from '@tabler/icons-react';
import PopupMap from "@/shared/search/popup-map";
import Filters from "@/shared/search/filters";
import SectionList from "@/shared/search/listings-section";



export async function getStaticProps(context) {
  const data = await graphQLClient.request(GET_LISTINGS);

  return {
    props: { data },
  };
}



const Search = ({ data }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [mapOpen, setMapOpen] = useState(false);
   /* actions */ 
  const openSideNav = () => setNavOpen(!navOpen);
  const toggleMapPopup = () => setMapOpen(!mapOpen);
  const [loading, setLoading] = useState(false);


  return (
    <> 
    {navOpen && <FiltersDrawer opened={navOpen} toggle={openSideNav} />}
    {mapOpen && <PopupMap opened={mapOpen} toggle={toggleMapPopup} />}
    <div className="page" id="searchPage">
      <Container>
      <Row>
        <Col>
        <Breadcrumb>
                  <BreadcrumbItem>
                    <Link href="/">Home</Link>
                  </BreadcrumbItem>
                  <BreadcrumbItem>
                    <Link href={`/search`} active>Ricerca</Link>
                  </BreadcrumbItem>
                </Breadcrumb></Col>
      <div className="d-flex justify-content-between align-items-center filters-subnav">
        <div className="filters-block flex-grow-1">
       <div className="filters-block">
       <Filters/>
       </div>
       </div>
         <div className="filters-block text-right">
        <Button onClick={toggleMapPopup} color="dark" outline>Mostra la mappa <IconMap2/></Button>
        </div>
        </div>
     
       </Row>
          <Row>
          <Col span={12}>
            <div className="section-head d-flex justify-content-between align-items-center">
            <div className="section-title"><h2>22 risultati trovati</h2></div>
            <div className="section-action">
            <UncontrolledDropdown>
            <DropdownToggle caret outline>Ordina per</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Data creazione</DropdownItem>
              <DropdownItem>Rilevanza</DropdownItem>
              <DropdownItem>Sponsorizzati</DropdownItem>
              <DropdownItem>Prezzo</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
            </div>
            </div>
          
            <SectionList data={data}/>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  )
}

export default Search;
