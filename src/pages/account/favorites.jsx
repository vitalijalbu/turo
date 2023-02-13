import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { Container, Row, Col} from "reactstrap";
import ItemCard from "@/shared/snippets/listing-card";
import PageHead from "@/shared/account/page-head";
import { getUserFavorites } from "@/lib/graphql/queries/favorites";


const Favorites = () => {
  const [loading, setLoading] = useState(false);
  const [entries, setentries] = useState([]);


  useEffect(() => {
    getUserFavorites()
    .then((data) => {
      setentries(data?.entries);
      console.log('🐝 API response FAVORITES', data)
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  if (!entries) return <p>Nessun dato</p>;
  return (
    <div className="page pt-0">
      <PageHead title={"Preferiti"}/>
      <div className="page-content">
      <Container>
<Row>
{Array.isArray(entries) ? (
   <> 
    {entries.map((item, i) => (
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
