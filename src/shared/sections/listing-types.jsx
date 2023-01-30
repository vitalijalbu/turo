import React, { useState, useRef } from "react";
import {
  Container,
  Grid,
  Title,
  Card,
  Image,
  Group,
  Anchor,
} from "@mantine/core";
import Link from "next/link";
import graphQLClient from "@/lib/graphql/client";
import { GET_LISTING_TYPES } from "@/lib/graphql/queries/general";

const ListingTypes = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(false);
  console.log("✅ received-listings", data);

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

  return (
    <section className="section-content">
      <Container size="xl">
        <div className="section-title">
          <Title order={1}>Sfoglia annunci</Title>
        </div>

        <Grid>
          {typeList.map((data, i) => (
            <Grid.Col md={6} lg={3} xs={6}>
              <Card
                shadow="sm"
                component="a"
                href={"/search?type=" + data.slug}
                target="_blank"
              >
                <Card.Section>
                  <Group>
                    <Link href={"/search?type=" + data.slug}>
                      <Image
                        width={120}
                        height={100}
                        fit="cover"
                        src={data.image_url}
                        alt={data.title}
                      />
                    </Link>
                    <Link href={"/search?type=" + data.slug}>
                      <Title order={3}>{data.title}</Title>
                    </Link>
                  </Group>
                </Card.Section>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default ListingTypes;
