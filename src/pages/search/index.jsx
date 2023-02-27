import React, { useState, useEffect } from "react";
import Link from "next/link";
import { searchListings } from "@/lib/graphql/queries/search";
import {
  
  Select,
  Flex,
  Box,
  Spacer,
  Heading,
  useToast,
} from "@chakra-ui/react";
import PopupMap from "@/shared/search/popup-map";
import Filters from "@/shared/search/filters";
import ListingItem from "@/shared/snippets/listing-item";
import { IconBell, IconMap2 } from "@tabler/icons-react";
import { Button } from "@chakra-ui/react";
const Search = () => {
  const toast = useToast();
  const [mapOpen, setMapOpen] = useState(false);
  /* actions */
  const toggleMapPopup = () => setMapOpen(!mapOpen);
  const saveSearch = () => {
    toast({
      title: "Ricerca salvata",
      duration: 1500,
      status: "success",
      isClosable: true,
    });
  };
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
        <div className="page-content">
          <section className="border-bottom" id="search-filters">
            <div className="container">
              <div className="row">
                <div className="mb-2">
                  <div md={12}>
                    <div className="d-flex justify-content-between align-items-center filters-subnav">
                      <div className="filters-block flex-grow-1">
                        <div className="filters-block">
                          <Filters />
                        </div>
                      </div>
                      <div className="filters-block text-right">
                        <Button
                          onClick={() => saveSearch()}
                          leftIcon={<IconBell />}
                        >
                          Salva ricerca
                        </Button>
                        <Button
                          outline
                          onClick={toggleMapPopup}
                          leftIcon={<IconMap2 />}
                        >
                          Mostra la mappa
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="container">
            <div className="mb-2">
              <div md={12}>
                <div className="section-head d-flex justify-content-between align-items-center">
                  <div className="section-title flex-grow-1">
                    <h2 className="page-title">22 risultati trovati</h2>
                  </div>
                  <div>
                    <Select placeholder="Select option">
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </div>
                </div>
              </div>
              <div md={12}>
                {Array.isArray(entries) ? (
                  <div className="list-properties">
                    {entries.map((entry) => (
                      <ListingItem data={entry} key={entry.id} />
                    ))}
                  </div>
                ) : (
                  <p>Nessun dato</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
