import React, { useState, useEffect } from "react";
import Link from "next/link";
import { searchListings } from "@/lib/graphql/queries/search";
import {
  Container,
  Row,
  Col,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Dropdown
} from "reactstrap";
import PopupMap from "@/shared/search/popup-map";
import Filters from "@/shared/search/filters";
import ListingItem from "@/shared/snippets/listing-item";
import { IconMap2 } from "@tabler/icons-react";

const Search = () => {
  
  const [mapOpen, setMapOpen] = useState(false);
  /* actions */
  const toggleMapPopup = () => setMapOpen(!mapOpen);
  const [loading, setLoading] = useState(false);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    searchListings()
      .then((data) => {
        setEntries(data?.entries);
        console.log("🐝 API response", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {mapOpen && <PopupMap opened={mapOpen} toggle={toggleMapPopup} />}
      <div className="page" id="searchPage">
        <div className="page-content pt-0">
        <Container>
          <Row className="mb-2">
            <Col md={12}>
            <div className="d-flex justify-content-between align-items-center filters-subnav">
              <div className="filters-block flex-grow-1">
                <div className="filters-block">
                  <Filters />
                </div>
              </div>
              <div className="filters-block text-right">
                <Button onClick={toggleMapPopup} color="dark" outline>
                  Mostra la mappa <IconMap2 />
                </Button>
              </div>
            </div>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col md={12}>
              <div className="section-head d-flex justify-content-between align-items-center">
                <div className="section-title flex-grow-1">
                  <h2 className="page-title">22 risultati trovati</h2>
                </div>
                <div className="section-action">
                  <UncontrolledDropdown>
                    <DropdownToggle caret outline>
                      Ordina per
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Data creazione</DropdownItem>
                      <DropdownItem>Rilevanza</DropdownItem>
                      <DropdownItem>Sponsorizzati</DropdownItem>
                      <DropdownItem>Prezzo</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
              </Col>
              <Col md={12}>
              {Array.isArray(entries) ? (
                <div className="list-properties">
                  {entries.map((entry) => (
                    <ListingItem data={entry} key={entry.id}/>
                  ))}
                  </div>
              ) : (
                <p>Nessun dato</p>
              )}
            </Col>
          </Row>
        </Container>
      </div>
      </div>
    </>
  );
};

export default Search;
