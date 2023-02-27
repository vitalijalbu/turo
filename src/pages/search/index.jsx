import React, { useState, useEffect } from "react";
import Link from "next/link";
import { searchListings } from "@/lib/graphql/queries/search";
import { Container, Select, Flex, Box, Spacer, Heading } from "@chakra-ui/react";
import PopupMap from "@/shared/search/popup-map";
import Filters from "@/shared/search/filters";
import ListingItem from "@/shared/snippets/listing-item";
import { IconMap2 } from "@tabler/icons-react";
import { Button } from "@chakra-ui/react";
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
        <div className="page-content">
        <Container maxW="5xl">
        <Filters />
                  <Button color="dark" outline onClick={toggleMapPopup} leftIcon={<IconMap2 />}>Mostra la mappa</Button>
          <div className="mb-2">
            <div md={12}>
            <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Heading>22 risultati trovati</Heading>
  </Box>
  <Spacer />
  <Box p='2'>
  <Select placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
</Box>
</Flex>

              </div>
              <div md={12}>
              {Array.isArray(entries) ? (
                <div className="list-properties">
                  {entries.map((entry) => (
                    <ListingItem data={entry} key={entry.id}/>
                  ))}
                  </div>
              ) : (
                <p>Nessun dato</p>
              )}
            </div>
          </div>
        </Container>
      </div>
      </div>
    </>
  );
};

export default Search;
