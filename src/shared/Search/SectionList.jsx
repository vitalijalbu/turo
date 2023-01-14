import React, { useState, useEffect } from "react";
import { Grid, Text, Title, RangeSlider } from '@mantine/core';
import ItemList from "./ItemList";
import Entries from "@/data/entries.json";

const SectionList = () => {

  return (
    <div className="list no-chevron no-hairlines no-hairlines-between">
      {Array.isArray(Entries.data.entries) ? (
        <ul className="list-properties">
          {Entries.data.entries.map((item, i) => (
             <ItemList data={item}/>
          ))}
          </ul>
      ) : (
        <Title strong>Nessun dato</Title>
      )}
    </div>
  )
};

export default SectionList;
