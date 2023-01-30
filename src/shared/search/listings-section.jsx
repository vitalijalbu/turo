import React, { useState, useEffect } from "react";
import { Grid, Text, Title, RangeSlider } from '@mantine/core';
import ListingItem from "../snippets/listing-item";


const SectionList = ({data}) => {

  return (
    <div className="list no-chevron no-hairlines no-hairlines-between">
      {Array.isArray(data.entries) ? (
        <ul className="list-properties">
          {data.entries.map((item, i) => (
             <ListingItem data={item}/>
          ))}
          </ul>
      ) : (
        <Title strong>Nessun dato</Title>
      )}
    </div>
  )
};

export default SectionList;
