import React, { useState, useEffect } from "react";
import { Accordion, Button, RangeSlider, Checkbox, Text } from '@mantine/core';
import graphQLClient from "@/lib/graphql/client";
import { GET_LISTING_TYPES } from "@/lib/graphql/queries/categories";


const FiltersDrawer = () => {
  const [loading, setLoading] = useState(false);
  const [types, setTypes] = useState([]);
  const [priceMin, setPriceMin] = useState(200);
  const [priceMax, setPriceMax] = useState(1200);

  const onPriceChange = (values) => {
    setPriceMin(values[0]);
    setPriceMax(values[100]);
  };

  async function getData() {
    try {
      const response = await graphQLClient.request(GET_LISTING_TYPES);
      if (response) {
        setTypes(response);
      }
    } catch (err) {
      console.log("ERROR FROM GRAPHQL-REQUEST API CALL", err);
    } finally {
      setLoading(false);
    }
  }
  
    useEffect(() => {
      getData();
    }, []);

  return (
    <div>
      <Accordion defaultValue="type">
      <Accordion.Item value="type">
        <Accordion.Control>Tipologia</Accordion.Control>
        <Accordion.Panel>
        {types.length ? (
          <>
        {types?.categories?.map((type, i) => (
            <Checkbox label={type.title} key={i} />
          ))
          }
          </>) : (
            <Text>Nessuna tipologia qui</Text>
          )}
        </Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="location">
        <Accordion.Control>Dove ?</Accordion.Control>
        <Accordion.Panel>

        </Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="pricing">
        <Accordion.Control>Prezzo</Accordion.Control>
        <Accordion.Panel>
        <RangeSlider
      
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
        </Accordion.Panel>
      </Accordion.Item>

     
      <Button radius={"xl"} color="dark">
            Cerca
          </Button>
    </Accordion>
        </div>
  );
      
};

export default FiltersDrawer;
