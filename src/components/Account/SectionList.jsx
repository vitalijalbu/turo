import React, { useState, useEffect } from "react";
import { Block, List, Preloader, Row } from "framework7-react";
import ItemList from "../Hosting/ItemList";
import Entries from "@/data/entries.json";

const SectionList = () => {

  return (
    <>
    <Block>
      {Array.isArray(Entries.data.entries) ? (
        <div className="list no-chevron no-hairlines no-hairlines-between">
        <ul className="list-properties">
          {Entries.data.entries.map((item, i) => (
             <ItemList props={item}/>
          ))}
          </ul>
        </div>
      ) : (
        <Block strong>Nessun dato</Block>
      )}
    </Block>
    </>
  );
      
};

export default SectionList;
