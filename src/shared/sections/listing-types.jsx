import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Title,
  Card,
  Image,
  Group,
  Text,
} from "@mantine/core";
import Link from "next/link";
import graphQLClient from "@/lib/graphql/client";
import { GET_LISTING_TYPES } from "@/lib/graphql/queries/categories";

const ListingTypes = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  console.log("✅ received-categories", data);

  async function getData() {
    try {
      const response = await graphQLClient.request(GET_LISTING_TYPES);
      if (response) {
        setData(response);
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

    if (!data) return <Text strong>Nessun dato</Text>;
    
  return (
    <section className="section-content">
      <Container size="xl">
        <div className="section-title">
          <Title order={1}>Sfoglia annunci</Title>
        </div>

        <Grid>
          {data?.categories?.map((type, i) => (
            <Grid.Col md={6} lg={3} xs={6} key={i}>
             <Card withBorder radius="md" p={0}>
                <Group noWrap spacing={0}>
                  <Image src={type?.media_url[0]?.url ?? '/img/placeholder.png'} height={140} width={140} />
                  <Link href={"/search?type=" + type.slug}>
                    <Text mt="xs" mb="md">
                      {type.title}
                    </Text>
                  </Link>
                </Group>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default ListingTypes;
