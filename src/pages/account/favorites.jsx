import React, { useState, useEffect } from "react";
import { Container, Row, Col} from "reactstrap";
import ItemCard from "@/shared/snippets/listing-card";
import PageHead from "@/shared/account/page-head";
import Entries from "@/data/entries.json";
import Link from 'next/link';

const Favorites = () => {
  return (
    <div className="page pt-0">
      <PageHead title={"Preferiti"}/>
      <div className="page-content">
      <Container>
<Row>
{Array.isArray(Entries.data.entries) ? (
   <> 
    {Entries.data.entries.map((item, i) => (
      <Col md={6} lg={3} xs={6}>
       <ItemCard data={item}/>
       </Col>
    ))}
  </>
) : (
  <p strong>Nessun dato</p>
)}
</Row>
</Container>
</div>
</div>
  );
};

export default Favorites;
